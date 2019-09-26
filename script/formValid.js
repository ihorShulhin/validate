var form = document.getElementById('formValid');
var accountAutoriz = document.getElementById('accountAutoriz');

document.getElementById('list').children[0].addEventListener('click', function() {
    hideBlock(accountAutoriz);
    form.style.display = 'none';
});

document.getElementById('list').children[1].addEventListener('click', function() {
    hideBlock(formValid);
    accountAutoriz.style.display = 'none';
});

function hideBlock(block) {
    if (block.style.display == 'block') {
        block.style.display = 'none';
    } else {
        block.style.display = 'block';
    }
}

var usernameInput = document.getElementById('username');
var passwordInput = document.getElementById('password');
var repasswordInput = document.getElementById('repassword');

function FormValidate(username, password, rePassword) {
    this.username = username;
    this.password = password;
    this.rePassword = rePassword;
    var self = this;

    this.formUserName = function() {
        if (self.username != '' && self.username.length >= 5) {
            document.getElementById('errorUser').innerHTML = 'correct username';
            document.getElementById('errorUser').style.color = 'lime';
        } else {
            document.getElementById('errorUser').innerHTML = 'incorrect username';
            document.getElementById('errorUser').style.color = 'red';
        }
    }
    this.formPassword = function() {
        if (self.password != '') {
            document.getElementById('errorPass').innerHTML = 'correct password';
            document.getElementById('errorPass').style.color = 'lime';
        } else {
            document.getElementById('errorPass').innerHTML = 'incorrect password';
            document.getElementById('errorPass').style.color = 'red';
        }
    }
    this.formRePassword = function() {
        if (self.rePassword != '' && self.rePassword == self.password) {
            document.getElementById('errorRePass').innerHTML = 'correct re-password';
            document.getElementById('errorRePass').style.color = 'lime';
        } else {
            document.getElementById('errorRePass').innerHTML = 'incorrect re-password';
            document.getElementById('errorRePass').style.color = 'red';
        }
    }
    this.keyup = function() {
        usernameInput.addEventListener('keyup', self.formUserName);
        passwordInput.addEventListener('keyup', self.formPassword);
        repasswordInput.addEventListener('keyup', self.formRePassword);
    }
}


var loginAccount = document.getElementById('loginAccount');
var passwordAccount = document.getElementById('passwordAccount');

function EnterAccount(loginEnter, passwordEnter) {
    FormValidate.call(this);
    this.loginEnter = loginEnter;
    this.passwordEnter = passwordEnter;
    var self = this;

    this.loginAccount = function() {
        if (self.loginEnter != '' && self.loginEnter == usernameInput.value) {
            document.getElementById('errorLogin').innerHTML = 'correct login';
            document.getElementById('errorLogin').style.color = 'lime';
        } else {
            document.getElementById('errorLogin').innerHTML = 'incorrect login';
            document.getElementById('errorLogin').style.color = 'red';
        }
    }
    this.passwordAccount = function() {
        if (this.passwordEnter == passwordInput.value && this.passwordEnter == repasswordInput.value && this.passwordEnter != '') {
            document.getElementById('errorPassword').innerHTML = 'correct password';
            document.getElementById('errorPassword').style.color = 'lime';
        } else {
            document.getElementById('errorPassword').innerHTML = 'incorrect login';
            document.getElementById('errorPassword').style.color = 'red';
        }
    }
    this.sendForm = function() {
        if (self.loginEnter != '' && self.loginEnter == usernameInput.value && this.passwordEnter == passwordInput.value && this.passwordEnter == repasswordInput.value) {
            document.location.href = "Congratulation.html"

            loginAccount.value = '';
            passwordAccount.value = '';
            usernameInput.value = '';
            passwordInput.value = '';
            repasswordInput.value = '';
        }
    }

}

document.getElementById('registration').addEventListener('click', function() {
    var formValidate = new FormValidate(usernameInput.value, passwordInput.value, repasswordInput.value);

    formValidate.keyup();
    formValidate.formUserName();
    formValidate.formPassword();
    formValidate.formRePassword();
    formValidate.keyup();

    if (usernameInput.value != '' && usernameInput.value.length >= 5 && passwordInput.value && repasswordInput.value != '' && passwordInput.value == repasswordInput.value) {
        hideBlock(formValid);
        accountAutoriz.style.display = 'block';
    }
});

document.getElementById('entrance').addEventListener('click', function() {
    var enterAccount = new EnterAccount(loginAccount.value, passwordAccount.value);

    enterAccount.loginAccount();
    enterAccount.passwordAccount();
    enterAccount.sendForm();

});
