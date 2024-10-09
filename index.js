function LoginClick() {
    window.location.replace('SignInPage.html');
  }

document.getElementById('Download_resume').addEventListener('click', function() {
    // URL of the Word file
    let fileUrl = 'MasterPage Css/assets/img/Resume.docx';
    
    // Create a temporary anchor element
    let link = document.createElement('a');
    link.href = fileUrl;
    
    // Set the download attribute with a filename
    link.download = 'UttamDadhaniya.docx';
    
    // Append the link to the body (necessary for Firefox)
    document.body.appendChild(link);
    
    // Programmatically click the link to trigger the download
    link.click();
    
    // Remove the link from the document
    document.body.removeChild(link);
});

function loginclick(){
    let UserName = document.getElementById("txt_UserName").value;
    let Password = document.getElementById("txt_Password").value;
    if(UserName == ""){
        document.getElementById("txt_UserName").style.borderColor = "#dc3545";
        document.getElementById("error_Username").style.display = "block";
    }
    else{
        document.getElementById("txt_UserName").style.borderColor = "";
        document.getElementById("error_Username").style.display = "none";
    }
    if(Password == ""){
        document.getElementById("txt_Password").style.borderColor = "#dc3545";
        document.getElementById("error_Password").style.display = "block";
    }
    else{
        document.getElementById("txt_Password").style.borderColor = "";
        document.getElementById("error_Username").style.display = "none";
    }
}