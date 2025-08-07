import bcrypt from 'bcryptjs'
import { statements } from '../database/schema'

export interface User {
  id: string
  username: string
  email: string
  full_name?: string
  avatar_url?: string
  level: number
  xp: number
  streak_days: number
  total_questions_answered: number
  correct_answers: number
  created_at: string
  updated_at: string
}

export interface CreateUserData {
  username: string
  email: string
  password: string
  full_name?: string
}

export interface LoginData {
  email: string
  password: string
}

// Hash password
export const hashPassword = async (password: string): Promise<string> => {
  const saltRounds = 12
  return bcrypt.hash(password, saltRounds)
}

// Verify password
export const verifyPassword = async (
  password: string,
  hashedPassword: string,
): Promise<boolean> => {
  return bcrypt.compare(password, hashedPassword)
}

// Validate email format
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Validate password strength
export const isValidPassword = (password: string): { isValid: boolean; message?: string } => {
  if (password.length < 8) {
    return { isValid: false, message: 'Mật khẩu phải có ít nhất 8 ký tự' }
  }

  if (!/(?=.*[a-z])/.test(password)) {
    return { isValid: false, message: 'Mật khẩu phải có ít nhất 1 chữ thường' }
  }

  if (!/(?=.*[A-Z])/.test(password)) {
    return { isValid: false, message: 'Mật khẩu phải có ít nhất 1 chữ hoa' }
  }

  if (!/(?=.*\d)/.test(password)) {
    return { isValid: false, message: 'Mật khẩu phải có ít nhất 1 số' }
  }

  return { isValid: true }
}

// Validate username
export const isValidUsername = (username: string): { isValid: boolean; message?: string } => {
  if (username.length < 3) {
    return { isValid: false, message: 'Tên người dùng phải có ít nhất 3 ký tự' }
  }

  if (username.length > 20) {
    return { isValid: false, message: 'Tên người dùng không được quá 20 ký tự' }
  }

  if (!/^[a-zA-Z0-9_]+$/.test(username)) {
    return { isValid: false, message: 'Tên người dùng chỉ được chứa chữ, số và dấu gạch dưới' }
  }

  return { isValid: true }
}

// Check if user exists
export const userExists = (
  email: string,
  username: string,
): { exists: boolean; field?: string } => {
  const userByEmail = statements.getUserByEmail.get(email)
  if (userByEmail) {
    return { exists: true, field: 'email' }
  }

  const userByUsername = statements.getUserByUsername.get(username)
  if (userByUsername) {
    return { exists: true, field: 'username' }
  }

  return { exists: false }
}

// Remove sensitive data from user object
export const sanitizeUser = (user: any): User => {
  const { password_hash, ...sanitizedUser } = user
  return sanitizedUser
}

// Calculate user level based on XP
export const calculateLevel = (xp: number): number => {
  // Level = sqrt(XP / 100) + 1
  return Math.floor(Math.sqrt(xp / 100)) + 1
}

// Calculate XP needed for next level
export const xpForNextLevel = (currentLevel: number): number => {
  return Math.pow(currentLevel, 2) * 100
}

// Calculate XP gained based on question difficulty and accuracy
export const calculateXP = (
  difficulty: string,
  isCorrect: boolean,
  timeTaken: number,
  maxTime: number = 30,
): number => {
  if (!isCorrect) return 0

  const basePoints = {
    easy: 10,
    medium: 20,
    hard: 30,
  }

  const base = basePoints[difficulty as keyof typeof basePoints] || 10

  // Time bonus (faster answers get more points)
  const timeBonus = Math.max(0, ((maxTime - timeTaken) / maxTime) * 0.5)

  return Math.round(base * (1 + timeBonus))
}
