<?php
    $time = $_GET['time'];//时间
    $affair = $_GET['affair'];//事件

    echo $time;
    echo $affair;
    $url = parse_url($_SERVER['HTTP_REFERER']);
    $user = $url[query];
    $flag = 0;
    $path = "../jsonFile/{$user}.json" ;
    $json_string = file_get_contents($path);
    //echo $path;
    $data = json_decode($json_string, true);
    //var_dump($data); 
    
    for ($i=0; $i<count($data); $i++){
        //echo $data[$i]['affair'];
        if($data[$i]['affair'] == $affair && $data[$i]['time'] == $time){
            echo "delete ".$data[$i]['affair'];
            $pos = $i;
            array_splice($data,$i,1);
            //var_dump($data);
            $flag = 1;
            break;
        }
    }
    //var_dump($data);
    if(flag == 0){
        echo "<script>alert('删除失败！事件时间不匹配 或没有此事件！')</script>";
    }
    $json = json_encode($data);

    file_put_contents($path, $json);


    $path = "../log.txt" ;
    $split = "-";
    $flag = "d";
    $json = $flag.$split.$time.$split.$affair;
    file_put_contents($path, $json);
    header("Location: http://localhost/main.html?".$user);

?>