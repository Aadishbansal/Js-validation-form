function abc() {
  const uname = document.getElementById("floatingInput").value;
  const email = document.getElementById("exampleInputEmail1").value;
  const password = document.getElementById("exampleInputPassword1").value;
  const consent = document.getElementById("exampleCheck1");
  let success = true;
  console.log(password);
  if (uname.length < 3) {
    document.getElementById("validateExampleInput").innerHTML =
      " User name can't be less than 3 characters";
    success = false;
  }
  if (!email.includes("@") || !email.includes(".com")) {
    document.getElementById("validateExampleEmail").innerHTML =
      "Invalid email address";
    //   console.log("invalid email address");
    success = false;
  }
  if (password.length < 7) {
    document.getElementById("validateExamplePassword").innerHTML =
      "Please provide a stronger password";
    success = false;
  }

  if (!consent.checked) {
    document.getElementById("validateExampleConsent").innerHTML =
      "Please accept the terms and conditions";
    // console.log("please accept the terms and conditions");
    success = false;
  }
  if (success) {
    alert("Regeistered successfully!");
    document.getElementById("validateExampleInput").innerHTML = "";
    document.getElementById("validateExampleEmail").innerHTML = "";
    document.getElementById("validateExamplePassword").innerHTML = "";
    document.getElementById("validateExampleConsent").innerHTML = "";
  } else {
    alert("Regeistered failed!");
  }
}
