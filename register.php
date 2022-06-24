<?php
    $name = $_GET['userId'];//用户名
    $pwd = $_GET['passwd'];//密码
    $json_string = file_get_contents('user.json');
    $data = json_decode($json_string, true);
    //var_dump($json_string); 
    array_push($data,array("userId"=>$name,"passwd"=>$pwd,"priority"=>10));
 
    $json = json_encode($data);
    //var_dump($data);
    file_put_contents('user.json', $json);


    $path = "./log.txt" ;
    $split = "-";
    $flag = "r";
    $json = $flag.$split.$name.$split.$pwd;
    file_put_contents($path, $json);
    header("Location: ./index.html")

?>