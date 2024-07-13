CREATE TABLE IF NOT EXISTS "Cart" (
	"id" serial PRIMARY KEY NOT NULL,
	"product_name" text NOT NULL,
	"product_price" integer NOT NULL,
	"product_quantity" text NOT NULL,
	CONSTRAINT "Cart_product_quantity_unique" UNIQUE("product_quantity")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "posts_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"content" text NOT NULL,
	"user_id" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "posts_table" ADD CONSTRAINT "posts_table_user_id_Cart_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."Cart"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
