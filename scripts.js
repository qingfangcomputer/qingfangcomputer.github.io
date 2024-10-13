document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('usernameField').value;
    var password = document.getElementById('passwordField').value;

    if(username === 'admin' && password === 'cyc132017') {
        window.location.href = 'https://github.com/qingfangcomputer/qingfangcomputer.github.io';
    } else {
        document.getElementById('error-message').innerText = "账号或密码错误，请重新输入！";
        document.getElementById('error-message').style.display = 'block';
    }
});