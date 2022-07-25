function abc() {
  const password = document.getElementById("exampleInputPassword1").value;
  const uname = document.getElementById("floatingInput").value;
  const email = document.getElementById("exampleInputEmail1").value;
  const consent = document.getElementById("exampleCheck1").value;
  if (uname.length == 0 || email.length == 0 || password.length == 0) {
    alert("Feilds can't be empty");
    return;
  }
  if(uname.length >3){
    alert("")   
  }
}
