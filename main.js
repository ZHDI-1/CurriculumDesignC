let switchCtn = document.querySelector("#switch-cnt");
let switchC1 = document.querySelector("#switch-c1");
let switchC2 = document.querySelector("#switch-c2");
let switchCircle = document.querySelectorAll(".switch__circle");
let switchBtn = document.querySelectorAll(".switch-btn");
let aContainer = document.querySelector("#a-container");
let bContainer = document.querySelector("#b-container");
let siButtons = document.querySelector(".submit-si");
let suButtons = document.querySelector(".submit-su");


let arr = new Array();

//获取json文件 将user和passwd解析
$.getJSON("./user.json", function (data) {
    $.each(data, function (infoIndex, info) {
        let userInfo = {
            userId: "",
            passwd: "",
            priority: 10
        };
        userInfo.userId = info.userId;
        userInfo.passwd = info.passwd;
        userInfo.priority = info.priority;
        arr.push(userInfo);
    })
})

let siEvent = (e) => {
    let flg = 0;
    let user = document.getElementsByTagName('input')[2].value;
    let passwd = document.getElementsByTagName('input')[3].value;
    for (let i = 0, lenth = arr.length ; i < lenth; i++) {
        if(arr[i].userId == user && arr[i].passwd == passwd){
            window.location.href = `./src/login.php?username=${user}&passwd=${passwd}`;
            alert("登录成功");
            flg = 1;
        }
    }
    if(flg == 0)
        alert("重新输入账号/密码");
};

let suEvent = (e) => {
    alert("注册成功");
};
let changeForm = (e) => {
    switchCtn.classList.add("is-gx");
    setTimeout(function () {
        switchCtn.classList.remove("is-gx");
    }, 1500);

    switchCtn.classList.toggle("is-txr");
    switchCircle[0].classList.toggle("is-txr");
    switchCircle[1].classList.toggle("is-txr");

    switchC1.classList.toggle("is-hidden");
    switchC2.classList.toggle("is-hidden");
    aContainer.classList.toggle("is-txl");
    bContainer.classList.toggle("is-txl");
    bContainer.classList.toggle("is-z200");
};

let mainF = (e) => {
    //for (var i = 0; i < allButtons.length; i++)
    //    allButtons[i].addEventListener("click", getButtons);
    siButtons.addEventListener("click",siEvent);
    suButtons.addEventListener("click",suEvent);
    for (var i = 0; i < switchBtn.length; i++)
        switchBtn[i].addEventListener("click", changeForm);
};

window.addEventListener("load", mainF);
