drop database if exists `project`;
create database `project`;
use project;

drop table if exists userAccount;
create table userAccount(
screen_name varchar(40),
uname varchar(40),
sub_category char(40),
category char(40),
state char(15),
numFollowing int,
numFollowers int,
primary key(screen_name));

drop table if exists tweet;
create table tweet(
tid varchar(20),
textbody varchar(200),
retweet_count int,
posted varchar(20),
screen_name varchar(40) not null,
primary key(tid),
foreign key(screen_name) references userAccount(screen_name) on delete cascade);

drop table if exists hashtag;
create table hashtag(
h_tid varchar(20) not null,
hname varchar(100),
primary key(hname, h_tid),
foreign key(h_tid) references tweet(tid));

drop table if exists url;
create table url(
url_tid varchar(20) not null,
url_name varchar(500),
primary key(url_name, url_tid),
foreign key(url_tid) references tweet(tid));

drop table if exists mentioned;
create table mentioned(
tid varchar(20),
screen_name varchar(40),
primary key(tid, screen_name),
foreign key(tid) references tweet(tid));
-- foreign key(screen_name) references userAccount(screen_name));

set @enable_dth = 1;
set @enable_dtu = 1;
set @enable_dt = 1;

drop trigger if exists delete_tweet_hashtag;
delimiter $$
create trigger `delete_tweet_hashtag` after delete on `hashtag` for each row begin
	if @enable_dth = 1 then
		set @enable_dtu = 0;
        set @enable_dt = 0;
		delete from mentioned where old.h_tid = tid;
		delete from url where old.h_tid = url_tid;
		delete from tweet where old.h_tid = tid;
        set @enable_dtu = 1;
		set @enable_dt = 1;
	end if;
end $$
delimiter ;

drop trigger if exists delete_tweet_url;
delimiter $$
create trigger `delete_tweet_url` after delete on `url` for each row begin
	if @enable_dtu = 1 then
		set @enable_dth = 0;
        set @enable_dt = 0;
		delete from mentioned where old.url_tid = tid;
		delete from hashtag where old.url_tid = h_tid;
		delete from tweet where old.url_tid = tid;
		set @enable_dt = 1;
		set @enable_dth = 1;
    end if;
end $$
delimiter ;

drop trigger if exists delete_tweet;
delimiter $$
create trigger `delete_tweet` before delete on `tweet` for each row begin
	if @enable_dt = 1 then
		set @enable_dtu = 0;
        set @enable_dth = 0;
		delete from mentioned where old.tid = tid;
		delete from hashtag where old.tid = h_tid;
		delete from url where old.tid = url_tid;
		set @enable_dth = 1;
		set @enable_dtu = 1;
    end if;
end $$
delimiter ;

drop trigger if exists delete_user;
delimiter $$
create trigger `delete_user` before delete on `userAccount` for each row begin
	delete from tweet where old.screen_name = screen_name;
end $$
delimiter ;
        





	