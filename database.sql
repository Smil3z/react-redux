-- CREATE DATABASE "fs-redux-books"
CREATE TABLE books(
  "id" SERIAL PRIMARY KEY,
  "title" VARCHAR (250) NOT NULL,
  "author" VARCHAR (100) NOT NULL,
  "published" DATE
);

INSERT INTO "books" ("title", "author", "published") 
VALUES 
('Another Brooklyn', 'Jacqueline Woodson', '8-9-2016'),
('The Girl on the Train', 'Paula Hawkins', '1-13-2015'),
('Blue', 'Danielle Steel', '1-19-2016'),
('Sour Heart', 'Jenny Zhang', '8-1-2017'),
('Brotherhood In Death', 'J. D. Robb', NULL),
('Morning Star', 'Pierce Brown', NULL),
('Cometh the hour', 'Jeffrey Archer', NULL),
('Me Before You', 'Jojo Moyes', '1-5-2012'),
('The Gangster', 'Clive Cussler and Justin Scott', '3-1-2016'),
('Fire Touched', 'Patricia Briggs', '3-8-2016'),
('Fool me once', 'Harlan Coben', '3-22-2016'),
('One with you', 'Sylvia Day', NULL),
('The Last Mile', 'David Baldacci', NULL),
('Extreme Prey', 'John Sandford', NULL),
('End of Watch', 'Stephen King', '6-7-2016'),
('The Kite Runner', 'Khaled Hosseini', '5-1-2004'),
('The Black Widow', 'Daniel Silva', NULL),
('The Stone Sky', 'N. K. Jemisin', '8-15-2017'),
('Insidious', 'Catherine Coulter', NULL),
('A Great Reckoning', 'Louise Penny', NULL),
('What It Means When a Man Falls from the Sky', ' Lesley Nneka Arimah', '4-4-2017'),
('The Girl Who Smiled Beads: A Story of War and What Comes After', 'Clemantine Wamariya', '4-24-2018'),
('The Wrong Side of Goodbye', 'Michael Connelly', NULL),
('Night School', 'Lee Child', '11-7-2017'),
('Turbo Twenty-three', 'Janet Evanovich', '11-15-2015'),
('The Whistler', 'John Grisham', '11-25-2016'),
('Island of Glass', 'Nora Roberts', '12-6-2016');
