-- Add missing columns to users table
ALTER TABLE users ADD COLUMN phone TEXT;
ALTER TABLE users ADD COLUMN bio TEXT;
ALTER TABLE users ADD COLUMN is_public_profile INTEGER DEFAULT 1;
ALTER TABLE users ADD COLUMN allow_friend_requests INTEGER DEFAULT 1;
