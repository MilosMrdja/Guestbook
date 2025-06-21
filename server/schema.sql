CREATE DATABASE IF NOT EXISTS guestbook_db;
USE guestbook_db;

DROP TABLE IF EXISTS messages;

CREATE TABLE messages(
    id integer PRIMARY KEY AUTO_INCREMENT,
    userName VARCHAR(30) NOT NULL,
    content VARCHAR(80) NOT NULL,
    created DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

DELETE FROM messages;

INSERT INTO messages (userName, content) VALUES
('Ana', 'Great job!'),
('Milos', 'Hello from Belgrade!'),
('Jovana', 'Great idea, congrats!'),
('Marko', 'Go on.'),
('Ivana', 'I really like it.'),
('Petar', 'Finally something usefull.'),
('Luka', 'Excellent design!'),
('Tamara', 'Testing message, it works.'),
('Nikola', 'Empty message'),