-- For our project, we used the import wizard to import the data. See the "Insert Data PDF for instructions".
use project;

SET FOREIGN_KEY_CHECKS = 0;

load data infile 'C:\ProgramData\MySQL\MySQLServer8.0\Uploads\mentioned.txt'
into table mentioned
FIELDS TERMINATED BY ';' OPTIONALLY ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(tid,screen_name);

LOAD DATA INFILE 'C:\ProgramData\MySQL\MySQLServer8.0\Uploads\user.csv'
INTO TABLE useraccount
FIELDS TERMINATED BY ';' OPTIONALLY ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(screen_name, name, subcategory, category, ofstate, numFollowers, numFollowing);

LOAD DATA INFILE 'C:\ProgramData\MySQL\MySQLServer8.0\Uploads\tweets.csv'
INTO TABLE tweet
FIELDS TERMINATED BY ';' OPTIONALLY ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(tid,textbody,retweet_count,@col4,@col5,posting_user)
set day_posted= day(str_to_date(@col5, '%Y-%m-%d %H:%i:%s')), 
month_posted= month(str_to_date(@col5, '%Y-%m-%d %H:%i:%s')), 
year_posted= year(str_to_date(@col5, '%Y-%m-%d %H:%i:%s'));

LOAD DATA INFILE 'C:\ProgramData\MySQL\MySQLServer8.0\Uploads\urlused.csv'
INTO TABLE url
FIELDS TERMINATED BY ';' OPTIONALLY ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(tid,url);

LOAD DATA INFILE 'C:\ProgramData\MySQL\MySQLServer8.0\Uploads\tagged.csv'
INTO TABLE hashtag
FIELDS TERMINATED BY ';' OPTIONALLY ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(tid,hashtag_name);

SET FOREIGN_KEY_CHECKS = 1;