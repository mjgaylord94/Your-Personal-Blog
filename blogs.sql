create database blogs;

use blogs;

create table authors (
	id int not null auto_increment primary key,
    name varchar(100) not null,
    email varchar(100) not null,
    _created datetime default current_timestamp
);

create table blogs (
	id int not null auto_increment primary key,
    title varchar(100) not null,
    content varchar(1000) not null,
    authorid int not null,
    _created datetime default current_timestamp,
    foreign key (authorid) references authors(id)
);

create table tags (
 id int not null auto_increment primary key,
 name varchar(100) not null,
 _created datetime default current_timestamp
);

create table blogtags (
	blogid int not null primary key,
    tagid int not null,
    foreign key (blogid) references blogs(id),
    foreign key (tagid) references tags(id)
);

DELIMITER //

CREATE PROCEDURE spBlogTags
(blogid int)
BEGIN
SELECT
	b.blogid,
	t.name
	FROM blogtags b
	JOIN tags t on b.tagid = t.id;
END//

DELIMITER ;

INSERT INTO authors (name, email) VALUES
("Steven Universe", "steven@crystalgems.com"),
("Pearl", "pearl@crystalgems.com"),
("Amethyst", "amethyst@crystalgems.com"),
("Garnet", "garnet@crystalgems.com"),
("Rose Quartz", "rose@crystalgems.com");

INSERT INTO blogs (title, content, authorid) VALUES
("Giant Woman",
"All I wanna do is see you turn into a giant woman,
A giant woman!
All I wanna be is someone who gets to see a giant woman.
All I wanna do is help you turn into a giant woman,
A giant woman!
All I wanna be is someone who gets to see a giant woman.
Oh I know it'll be great and I just can't wait to see the person you are together.
If you give it a chance you can do a huge dance because you are a giant woman.
You might even like being together and if you don't it won't be forever.
But if it were me, I'd really wanna be a giant woman,
a giant woman!
All I wanna do is see you turn into a giant woman~.",
1),
("It's Over Isn't It",
"I was fine with the men
Who would come into her life now and again.
I was fine 'cause I knew
That they didn't really matter until you.
I was fine when you came
And we fought like it was all some silly game
Over her, who she'd choose.
After all those years, I never thought I'd lose.
It's over, isn't it? Isn't it? Isn't it over?
It's over, isn't it? Isn't it? Isn't it over?
You won, and she chose you, and she loved you, and she's gone.
It's over, isn't it? Why can't I move on?",
2),
("Tower of Mistakes",
"Maybe you're better off with her
I think she's better for you
I forgot how great it felt to be us
Guess I got carried away
I had to use you to make me feel strong
But I don't care about that now
I see a tower built out of my mistakes
And it all comes crashing down
Is there something I can doo-oo
Is there something I can doo-oo-oo
Is there something I can doo-oo
Can I make it up to you?",
3),
("Stronger Than You",
"This is Garnet.
Back together.
And I'm never going down at the hands of the likes of you because I'm so much better.
And every part of me is saying 'Go get her'.
The two of us ain't gonna follow your rules.
Come at me without any of your fancy tools.
Let's go, just me and you.
Let's go, just one on two.",
4),
("Still Not Giving Up",
"Hey there have you heard about the infamous Gem war
Well it all started long before I was born
Thousands of years of fighting to protect the human race
It's been pretty tough keeping up the pace
I sure have made my fair share of mistakes
I didn't know that Rose Quartz was such a big deal
There are some wounds that even healing powers can't heal
Oh, I feel like I've messed up
This magical destiny really kicked me in the butt
We've had some good times and some pretty bad luck
But we're still in this together
And we're still not giving up
We're still not giving up
I'm still not giving up
Da da da da da
Da da da da da da
Da da da da da da
Da da...",
1);

INSERT INTO tags (name) VALUES
("Season 1"),
("Season 2"),
("Season 3"),
("Season 4"),
("Season 5"),
("Steven Universe: The Movie"),
("Steven Universe Future");

INSERT INTO blogtags (blogid, tagid) VALUES
(1, 1),
(2, 3),
(3, 2),
(4, 1),
(5, 4);

CREATE USER
	'bloguser'@'localhost'
IDENTIFIED BY 'blogblog';

GRANT ALL PRIVILEGES
ON blogs.*
TO 'bloguser'@'localhost';

ALTER USER 'bloguser'@'localhost' IDENTIFIED WITH mysql_native_password BY 'blogblog';