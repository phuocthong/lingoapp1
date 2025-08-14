import { Elysia, t } from 'elysia'
import bcrypt from 'bcryptjs'
import { db } from '../db/index.js'
import { users } from '../db/schema.js'
import { eq } from 'drizzle-orm'

const userRoutes = new Elysia({ prefix: '/user' })
  .get(
    '/profile',
    async ({ user }) => {
      try {
        return {
          success: true,
          user,
        }
      } catch (error) {
        console.error('Profile fetch error:', error)
        return { success: false, message: 'Failed to fetch profile' }
      }
    },
    {
      detail: {
        tags: ['users'],
        summary: 'Get user profile',
        description: 'Get current user profile information',
      },
    },
  )

  .put(
    '/profile',
    async ({ body, user, set }) => {
      try {
        const { name, avatar, phone, bio, isPublicProfile, allowFriendRequests, username, email } = body

        // Check if username/email are being changed and if they're unique
        if (username && username !== user.username) {
          const existingUser = await db.select().from(users).where(eq(users.username, username)).get()
          if (existingUser && existingUser.id !== user.id) {
            set.status = 400
            return { success: false, message: 'Username already exists' }
          }
        }

        if (email && email !== user.email) {
          const existingUser = await db.select().from(users).where(eq(users.email, email)).get()
          if (existingUser && existingUser.id !== user.id) {
            set.status = 400
            return { success: false, message: 'Email already exists' }
          }
        }

        // Prepare update data
        const updateData = {
          updatedAt: new Date(),
        }

        if (name !== undefined) updateData.name = name
        if (avatar !== undefined) updateData.avatar = avatar
        if (phone !== undefined) updateData.phone = phone
        if (bio !== undefined) updateData.bio = bio
        if (isPublicProfile !== undefined) updateData.isPublicProfile = isPublicProfile
        if (allowFriendRequests !== undefined) updateData.allowFriendRequests = allowFriendRequests
        if (username !== undefined) updateData.username = username
        if (email !== undefined) updateData.email = email

        const updatedUser = await db
          .update(users)
          .set(updateData)
          .where(eq(users.id, user.id))
          .returning()
          .get()

        return {
          success: true,
          message: 'Profile updated successfully',
          user: {
            id: updatedUser.id,
            username: updatedUser.username,
            email: updatedUser.email,
            name: updatedUser.name,
            avatar: updatedUser.avatar,
            phone: updatedUser.phone,
            bio: updatedUser.bio,
            isPublicProfile: updatedUser.isPublicProfile,
            allowFriendRequests: updatedUser.allowFriendRequests,
            level: updatedUser.level,
            xp: updatedUser.xp,
            streak: updatedUser.streak,
          },
        }
      } catch (error) {
        console.error('Profile update error:', error)
        set.status = 500
        return { success: false, message: 'Failed to update profile' }
      }
    },
    {
      body: t.Object({
        name: t.Optional(t.String()),
        avatar: t.Optional(t.String()),
        phone: t.Optional(t.String()),
        bio: t.Optional(t.String()),
        isPublicProfile: t.Optional(t.Boolean()),
        allowFriendRequests: t.Optional(t.Boolean()),
        username: t.Optional(t.String()),
        email: t.Optional(t.String()),
      }),
      detail: {
        tags: ['users'],
        summary: 'Update user profile',
        description: 'Update comprehensive user profile information including avatar',
      },
    },
  )

  .put(
    '/password',
    async ({ body, user, set }) => {
      try {
        const { currentPassword, newPassword } = body

        // Get current user with password
        const currentUser = await db.select().from(users).where(eq(users.id, user.id)).get()

        if (!currentUser) {
          set.status = 404
          return { success: false, message: 'User not found' }
        }

        // Verify current password
        const isCurrentPasswordValid = await bcrypt.compare(currentPassword, currentUser.password)
        if (!isCurrentPasswordValid) {
          set.status = 400
          return { success: false, message: 'Current password is incorrect' }
        }

        // Hash new password
        const hashedNewPassword = await bcrypt.hash(newPassword, 10)

        // Update password
        await db
          .update(users)
          .set({
            password: hashedNewPassword,
            updatedAt: new Date(),
          })
          .where(eq(users.id, user.id))

        return {
          success: true,
          message: 'Password updated successfully',
        }
      } catch (error) {
        console.error('Password update error:', error)
        set.status = 500
        return { success: false, message: 'Failed to update password' }
      }
    },
    {
      body: t.Object({
        currentPassword: t.String(),
        newPassword: t.String({ minLength: 6 }),
      }),
      detail: {
        tags: ['users'],
        summary: 'Change user password',
        description: 'Change user password with current password verification',
      },
    },
  )

  .get(
    '/stats',
    async ({ user }) => {
      try {
        // In a real app, you'd calculate these from user progress data
        const stats = {
          totalQuestions: 150,
          correctAnswers: 125,
          accuracy: 83.3,
          averageTime: 12.5,
          bestStreak: user.streak,
          currentStreak: user.streak,
          level: user.level,
          xp: user.xp,
          nextLevelXp: user.level * 1000 + 500,
          gamesPlayed: 25,
          gamesWon: 18,
          winRate: 72.0,
        }

        return {
          success: true,
          stats,
        }
      } catch (error) {
        console.error('Stats fetch error:', error)
        return { success: false, message: 'Failed to fetch stats' }
      }
    },
    {
      detail: {
        tags: ['users'],
        summary: 'Get user statistics',
        description: 'Get comprehensive user statistics and progress',
      },
    },
  )

export default userRoutes
