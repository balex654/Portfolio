-- Q1
select t.retweet_count, t.textbody, t.screen_name, u.category, u.sub_category from tweet t, userAccount u where 
	t.screen_name = u.screen_name 
	and t.year = 2016 and t.month = 1
	order by t.retweet_count desc limit 10;

-- Q3
select distinct h.hname, count(distinct u.state) as num_states, group_concat(distinct u.state) as states
	from tweet t, hashtag h, userAccount u where 
	h.h_tid = t.tid and t.screen_name = u.screen_name and u.state != "na" and SUBSTRING(t.posted, 1, 4) = 2016
	group by h.hname order by num_states desc limit 10;
    
-- Q6
select x.screen_name, x.state from (select distinct u.screen_name, u.state, u.numFollowers from userAccount u, hashtag h, tweet t where 
	h.h_tid = t.tid and t.screen_name = u.screen_name and h.hname in ("HappyNewYear","NewYear","NewYears","NewYearsDay")) x
	order by x.numFollowers desc limit 10;

-- Q9
SELECT DISTINCT u.screen_name, u.category, u.numFollowers
	FROM userAccount u 
	WHERE u.sub_category = 'GOP'
	ORDER BY u.numFollowers DESC
	LIMIT 10;

-- Q10
select distinct h.hname, u.state from hashtag h, userAccount u, tweet t where
	h.h_tid = t.tid and t.screen_name = u.screen_name and u.state in ("Ohio", "Alaska", "Alabama")
	and t.month = 1 and t.year = 2016 order by h.hname asc;

-- Q11
select t.textbody, h.hname, u.screen_name, u.sub_category from tweet t, hashtag h, userAccount u
	where h.h_tid = t.tid and t.screen_name = u.screen_name and u.state = 'Ohio' and h.hname = 'Ohio'
	and (u.sub_category = "GOP" or u.sub_category = "democrat") and t.month = 1 AND t.year = 2016 limit 10;
    
-- Q15
SELECT u.screen_name, u.ofstate, GROUP_CONCAT(url.url) Listof_urls
FROM user u, tweets t, url
WHERE u.screen_name = t.posting_user AND url.tid = t.tid AND MONTH(t.posted) = '01' AND YEAR(t.posted) = '2016'AND sub_category = 'GOP'
GROUP BY u.screen_name, u.ofstate limit 100;

-- Q18
select user.screen_name, user.ofstate, group_concat(distinct tweets.posting_user order by tweets.posting_user asc separator ',') as postingUsers 
from user
 join mentioned on user.screen_name= mentioned.screen_name
 join tweets on tweets.tid= mentioned.tid 
 join user as u on u.screen_name = tweets.posting_user
where u.sub_category= "GOP" 
and month(tweets.posted)='01' 
and year(tweets.posted) = '2016' 
group by user.screen_name, user.ofstate
order by count(tweets.posting_user) desc limit 10;

-- Q23
SELECT DISTINCT h.hastagname, COUNT(h.hastagname) AS cnt
FROM hashtag h
INNER JOIN tweets t ON h.tid = t.tid
INNER JOIN user u ON t.posting_user = u.screen_name
WHERE u.sub_category = 'GOP' and YEAR(t.posted)  = '2016' AND MONTH(t.posted) IN ('01','02','03')
GROUP BY h.hastagname
ORDER BY cnt DESC
LIMIT 10;
