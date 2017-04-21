<?php
	$id = isset($_GET['channel_id']) ? $_GET['channel_id'] : 6;
	$page = isset($_GET['page']) ? $_GET['page'] : 1;
	
	$content = file_get_contents('news.json');
	
	$newslist = $content->newsList;
	
//	echo $newslist;
	echo $content;
?>