
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

"Create a new database named holiday_app_database"

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "posts" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INTEGER REFERENCES "user",
    "title" VARCHAR (100),
    "image_path" VARCHAR (1000),
    "description" VARCHAR (500)
);

CREATE TABLE "messages" (
    "id" SERIAL PRIMARY KEY,
    "message" VARCHAR (500),
    "posts_id" INTEGER REFERENCES "posts",
    "user_id" INTEGER REFERENCES "user"
);