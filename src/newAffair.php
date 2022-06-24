<?php
    $time = $_GET['time'];//时间
    $affair = $_GET['affair'];//事件
   
    $url = parse_url($_SERVER['HTTP_REFERER']);
    $user = $url[query];

    $path = "../jsonFile/{$user}.json" ;
    $json_string = file_get_contents($path);
    //echo $path;
    $data = json_decode($json_string, true);
    //var_dump($data); 
    array_push($data,array("time"=>$time,"affair"=>$affair));
   // var_dump($data);
    $json = json_encode($data);
  //  var_dump($json);
    file_put_contents($path, $json);


    $path = "../log.txt" ;
    $split = "-";
    $flag = "1";
    $json = $flag.$split.$time.$split.$affair;
    file_put_contents($path, $json);
    header("Location: http://localhost/main.html?".$user)
?>