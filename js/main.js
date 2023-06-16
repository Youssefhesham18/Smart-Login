let signupname =document.querySelector('#name')
let signupemail =document.querySelector('#email')
let signuppassword =document.querySelector('#password')
let signinemail =document.querySelector('#loginemail')
let signinPassword =document.querySelector('#loginpassword')
let signarr = []

let username = localStorage.getItem('username')
if (username) {
    document.querySelector('#username').innerHTML = "Welcome " + username
}

if (localStorage.getItem('users') == null) {
    signarr = []
} else {
    signarr = JSON.parse(localStorage.getItem('users'))
}

function emptycheck() {
  if (signupname.value == "" || signupemail.value == "" || signuppassword.value == "") {
      return false
  } else {
      return true
  }
}

function emailcheck() {
  for (let i = 0; i < signarr.length; i++) {
      if (signarr[i].email.toLowerCase() == signupemail.value.toLowerCase()) {
          return false
      }
  }
}

function signUp() {
  if (emptycheck() == false) {
      document.querySelector('#exist').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
      return false
  }

  
  var signUp = {
    name: signupname.value,
    email: signupemail.value,
    password: signuppassword.value,
}
if (signarr.length == 0) {
    signarr.push(signUp)
    localStorage.setItem('users', JSON.stringify(signarr))
    document.querySelector('#exist').innerHTML = '<span class="text-success m-3">Success</span>'
    return true
}



if (emailcheck() == false) {
    document.querySelector('#exist').innerHTML = '<span class="text-danger m-3">email already exists</span>'

} else {
    signarr.push(signUp)
    localStorage.setItem('users', JSON.stringify(signarr))
    document.querySelector('#exist').innerHTML = '<span class="text-success m-3">Success</span>'

}
}





function loginempty() {
  if (signinPassword.value == "" || signinemail.value == "") {
      return false
  } else {
      return true
  }
}

function login() {
  if (loginempty() == false) {
      document.querySelector('#incorrect').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
      return false
  }


  var email = signinemail.value
  var password = signinPassword.value
  for (let i = 0; i < signarr.length; i++) {
      if (signarr[i].email.toLowerCase() == email.toLowerCase() && signarr[i].password.toLowerCase() == password.toLowerCase()) 
      {
          localStorage.setItem('username', signarr[i].name)
          window.location.href = "home.html";
      } 
      else {
          document.querySelector('#incorrect').innerHTML = '<span class="p-2 text-danger">incorrect email or password</span>'
      }
  }

}

function logout() {
  localStorage.removeItem('username')
}
 



