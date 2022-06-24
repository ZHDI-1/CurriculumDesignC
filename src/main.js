var url = top.window.location.href;
var u = url.split("?");
let flag = 0;
//保存当前用户名
var user = u[1];

//文件地址
var jsonPath = `../jsonFile/${user}.json`

let arr = new Array()
//获取json
$.getJSON(jsonPath, function (data) {
    $.each(data, function (infoIndex, info) {
        let userAffair = {
            time: "",
            affair: ""
        };
        userAffair.time = info.time;
        userAffair.affair = info.affair;
        arr.push(userAffair);
    })


    //打印json并插入html
    for (j = 0, len = arr.length; j < len; j++) {
        // alert(arr[j].affair);
        let div = document.createElement('div');
        div.innerHTML = `time :${arr[j].time} affair:${arr[j].affair}`;
        document.body.append(div);
    }
})





