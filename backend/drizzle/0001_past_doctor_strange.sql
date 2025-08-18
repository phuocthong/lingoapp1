ALTER TABLE users ADD `phone` text;--> statement-breakpoint
ALTER TABLE users ADD `bio` text;--> statement-breakpoint
ALTER TABLE users ADD `is_public_profile` integer DEFAULT true;--> statement-breakpoint
ALTER TABLE users ADD `allow_friend_requests` integer DEFAULT true;