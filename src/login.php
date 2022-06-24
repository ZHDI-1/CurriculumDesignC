<?php
    $param = $_SERVER['QUERY_STRING'];
    parse_str($param);
    
    $path = "../log.txt" ;
    $split = "-";
    $flag = "l";
    $json = $flag.$split.$username.$split.$passwd;
    file_put_contents($path, $json);
    header("Location: http://localhost/main.html?".$username);

?>
