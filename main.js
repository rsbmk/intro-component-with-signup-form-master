/*EXPRESIONS*/
const expreName = /^[a-zA-Z]+$/;
const expreEmail = /\w+\@\w+\.[a-z]+/;

/*CONSTANTS */
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const pass = document.getElementById("Password");
const button = document.getElementById("btn").addEventListener("click", () => {
  var ale;
  /* Validation to the Fisrt Name */
  if (!expreName.test(fname.value)) {
    document.getElementById("warningFname").classList.add("active");
    document.getElementById("iconFname").classList.add("active");
    document.getElementById("fname").classList.add("active");
    ale = false;
  } else {
    document.getElementById("warningFname").classList.remove("active");
    document.getElementById("iconFname").classList.remove("active");
    document.getElementById("fname").classList.remove("active");
    ale = true;
  }

  /*Validation to the last name */
  if (!expreName.test(fname.value)) {
    document.getElementById("warningLname").classList.add("active");
    document.getElementById("iconLname").classList.add("active");
    document.getElementById("lname").classList.add("active");
    ale = false;
  } else {
    document.getElementById("warningLname").classList.remove("active");
    document.getElementById("iconLname").classList.remove("active");
    document.getElementById("lname").classList.remove("active");
    ale = true;
  }

  /*Validation to the Email */
  if (!expreEmail.test(email.value)) {
    document.getElementById("warningEmail").classList.add("active");
    document.getElementById("iconEmail").classList.add("active");
    document.getElementById("email").classList.add("active");
    ale = false;
  } else {
    document.getElementById("warningEmail").classList.remove("active");
    document.getElementById("iconEmail").classList.remove("active");
    document.getElementById("email").classList.remove("active");
    ale = true;
  }

  /*Validation password cannot empty */
  if (pass.value == "") {
    document.getElementById("warningPassword").classList.add("active");
    document.getElementById("iconPassword").classList.add("active");
    document.getElementById("Password").classList.add("active");
    ale = false;
  } else {
    document.getElementById("warningPassword").classList.remove("active");
    document.getElementById("iconPassword").classList.remove("active");
    document.getElementById("Password").classList.remove("active");
    ale = true;
  }
  if (ale) alert("All Right");
});
