
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

--Create database named "holiday_app_database"
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "admin" BOOLEAN default false
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


INSERT INTO "posts" ("user_id", "title", "image_path", "description")
VALUES ('5', 'Inflatable Santa', 'https://images-na.ssl-images-amazon.com/images/I/718XP2nASQL._AC_SX425_.jpg', 'Its a big jolly ol saint nick, perfect for your yard!'),
('6', 'Pennywise Comes out of well', 'https://partycity6.scene7.com/is/image/PartyCity/square-halloween-decorations-pennywise-190821?wid=300&qlt=80&fmt=pjpeg&cache=on', 'this thing is 2spooky4me!'),
('7', 'Front Yard light up Reindeer', 'https://i.pinimg.com/originals/63/0a/1c/630a1c3c2f35c34698489320df8318ee.jpg', 'A majestic decoration, sure to make your neighbors jealous!'),
('8', 'Play Station 4', 'https://media.playstation.com/is/image/SCEA/playstation-4-slim-vertical-product-shot-01-us-07sep16?$native_t$', 'Great for games and netflix');