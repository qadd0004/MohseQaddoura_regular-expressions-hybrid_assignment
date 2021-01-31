function init(ev) {
  let form = document.getElementById("regForm");
  form.addEventListener("submit", validateForm);
  //add individual listeners
  let name = document.getElementById("fullname");
  name.addEventListener("change", validateName);

  let email = document.getElementById("email");
  email.addEventListener("change", validateEmail);

  let address = document.getElementById("address");
  address.addEventListener("change", validateAddress);

  let city = document.getElementById("city");
  city.addEventListener("change", validateCity);

  let prov = document.getElementById("prov");
  prov.addEventListener("change", validateProvTer);

  let post = document.getElementById("post");
  post.addEventListener("change", validatePostalCode);
}

function validateForm(ev) {
  //validate the whole form
  if (
    !(
      validateName(ev) &&
      validateEmail(ev) &&
      validateAddress(ev) &&
      validateCity(ev) &&
      validateProvTer(ev) &&
      validatePostalCode(ev)
    )
  ) {
    ev.preventDefault();
    alert("Check all your entries and resubmit");
  } else {
    alert("Your data has been submitted successfuly!");
  }
}

function validateName(ev) {
  //validate the full name input with a regular expression
  let err = document.querySelector("#fullname + .error");
  let name = document.querySelector("#fullname").value;
  let regex = /^[a-z\s]+$/gi;

  if (name !== "" && regex.test(name)) {
    err.textContent = "";
    return true;
  } else {
    err.textContent =
      "Pease enter a valid name which contains letters or a space only";
    return false;
  }
}

function validateEmail(ev) {
  let err = document.querySelector("#email + .error");
  let emailVal = document.querySelector("#email").value;
  let regex = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/gi;

  if (emailVal !== "" && regex.test(emailVal)) {
    err.textContent = "";
    return true;
  } else {
    err.textContent = "Please enter a valid email";
    return false;
  }
}

function validateAddress(ev) {
  let err = document.querySelector("#address + .error");
  let address = document.querySelector("#address").value;
  let regex = /^[a-z0-9\s\-,\.]+$/gi;

  if (address !== "" && regex.test(address)) {
    err.textContent = "";
    return true;
  } else {
    err.textContent = "Please enter a valid address";
    return false;
  }
}

function validateCity(ev) {
  let err = document.querySelector("#city + .error");
  let city = document.querySelector("#city").value;
  let regex = /^[a-z\s]+$/gi;

  if (city !== "" && regex.test(city)) {
    err.textContent = "";
    return true;
  } else {
    err.textContent = "Pease enter a valid city name";
    return false;
  }
}

function validateProvTer(ev) {
  let err = document.querySelector("#prov + .error");
  let optionsVal = document.querySelector("#prov");

  if (optionsVal.options[optionsVal.selectedIndex]) {
    //console.log(optionsVal.options[optionsVal.selectedIndex]);
    err.textContent = "";
    return true;
  } else {
    err.textContent = "Please select a province or a Territory";
    return false;
  }
}

function validatePostalCode(ev) {
  let err = document.querySelector("#post + .error");
  let postCode = document.querySelector("#post").value;

  //Canadian post code format 'ANA NAN', where 'A' represents an alphabetic character and 'N' represents a numeric value
  let regex = /^[A-Z]\d[A-Z]\s\d[A-Z]\d$/gi;

  if (postCode !== "" && regex.test(postCode)) {
    err.textContent = "";
    return true;
  } else {
    err.textContent = "Pease enter a valid postal code";
    return false;
  }
}

document.addEventListener("DOMContentLoaded", init);
