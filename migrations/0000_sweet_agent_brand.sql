CREATE TABLE IF NOT EXISTS "users_post" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"content" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user_tab" (
	"id" serial PRIMARY KEY NOT NULL,
	"github_id" integer NOT NULL,
	"username" text NOT NULL,
	CONSTRAINT "user_tab_github_id_unique" UNIQUE("github_id")
);
