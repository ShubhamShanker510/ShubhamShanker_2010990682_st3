function onSubmit(){
    var uName = document.getElementById("fname").value;
    var faName = document.getElementById("fatherName").value;
    var mNumber = document.getElementById("mobileno").value;
    var eMail = document.getElementById("eMAil").value;
    localStorage.setItem("User_Name", uName);
    localStorage.setItem("Father_Name", faName);
    localStorage.setItem("Mobile_Number", mNumber);
    localStorage.setItem("Email", eMail);
    window.open("index.html","_self")
}