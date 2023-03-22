window.onload = function() {
    if(Kernal.isLogin()) {
        initUserInfo();
    }

    // 设置监听器，点击搜索按钮后，执行对应函数
    document.getElementById('search-btn').addEventListener('click', function() {
        search();
    });

    window.onkeydown = function(event){
        event = event || window.event;
        if(event.keyCode == 13)
        search();
    }
        
    



    // TODO: 在此为 top-right 元素设置监听器
     document.getElementById('top-right').addEventListener('click',function(){
        clickLogin();
     });

}

function search() {
    // TODO: 搜索触发后的行为

    var a =document.getElementsByTagName('input')[0].value;
    if(a == '')
        window.alert("请输入搜索内容");
    else{
        //window.alert(a);
        window.open("https://www.baidu.com/s?wd="+a);
    }
        
    console.log('');
}

function clickLogin() {
    if(!Kernal.isLogin()) {
        login();
    }
    else {
        logout();
    }
}

function initUserInfo() {
    // TODO: 修改页面显示错误的 bug
    let username = Kernal.getUserName();
    let content = `<div id="user">
                        <span id="user-img">
                            <img src="img/user.jpg" />
                        </span>
                        <span id="name">1234</span>
                    </div>`;
    document.getElementById('top-right').innerHTML = content;
    document.getElementById('name').textContent = username;
}

// ============================================================ 你不需要去关注的代码

function login() {
    Kernal.login();
    location.reload();
}

function logout() {
    Kernal.logout();
    location.reload();
}