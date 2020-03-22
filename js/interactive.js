// form validation

document.getElementById("submit_button").onclick = validate;

function validate() {

  // email input
  if (!(isEmailValid(document.getElementById("email_input").value))) {
    document.getElementById("email_input").style.backgroundColor = "#ffd3d3";
    document.getElementById("em_in_label").innerHTML = "Please enter valid email address. <p>Example: address@site.com</p>";
    document.getElementById("em_in_label").style.color = "#b30000"
  } else {
    document.getElementById("email_input").style.backgroundColor = "#EDFDFB";
    document.getElementById("em_in_label").innerHTML = "Email - Great!";
    document.getElementById("em_in_label").style.color = "#000000"
  }

  // username input
  if (!(isValuePresent(document.getElementById("username_input").value))) {
    document.getElementById("username_input").style.backgroundColor = "#ffd3d3";
    document.getElementById("un_in_label").innerHTML = "Please enter valid username. <p>Example: YourName33</p>";
    document.getElementById("un_in_label").style.color = "#b30000"
  } else {
    document.getElementById("username_input").style.backgroundColor = "#EDFDFB";
    document.getElementById("un_in_label").innerHTML = "Username - Great!";
    document.getElementById("un_in_label").style.color = "#000000"
  }

  // dob input
  if(!(isValuePresent(document.getElementById("dob_input").value))) {
    document.getElementById("dob_input").style.backgroundColor = "#ffd3d3";
    document.getElementById("dob_in_label").innerHTML = "Please enter valid date of birth. <p>Example: 11/21/1999</p>";
    document.getElementById("dob_in_label").style.color = "#b30000"
  } else {
    document.getElementById("dob_input").style.backgroundColor = "#EDFDFB";
    document.getElementById("dob_in_label").innerHTML = "Date of Birth - Great!";
    document.getElementById("dob_in_label").style.color = "#000000"
  }
}


// input value validation

function isValuePresent(value) {
  if (value == "" || value == " ") {
    return false;
  } else {
    return true;
  }
}


// email validation

function isEmailValid(email){      
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (emailPattern.test(email)) {
    return true;
  } else {
    return false;
  }
}