
delete_affair_button.onclick = function login() {
    let affair = document.getElementById('delete_affair').value;
    let time = document.getElementById('delete_time').value;
    for (j = 0, len = arr.length; j < len; j++) {
        if (arr[j].affair == affair && arr[j].time == time) {
            //比较成功 进行跳转 本js文件生命周期结束
            alert("删除成功！");
            flag = 1;
            window.location.replace(`./src/deleteAffair.php?time=${time}&affair=${affair}`);
        }
    }
    if (flag == 0) {
        alert("事务/时间 不匹配 或 没有此条目");
    }
}