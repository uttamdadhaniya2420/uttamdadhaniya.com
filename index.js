document.getElementById('Download_resume').addEventListener('click', function() {
    // URL of the Word file
    let fileUrl = 'MasterPage Css/assets/img/MyResume.pdf';
    
    // Create a temporary anchor element
    let link = document.createElement('a');
    link.href = fileUrl;
    
    // Set the download attribute with a filename
    link.download = 'UttamDadhaniya.pdf';
    
    // Append the link to the body (necessary for Firefox)
    document.body.appendChild(link);
    
    // Programmatically click the link to trigger the download
    link.click();
    
    // Remove the link from the document
    document.body.removeChild(link);
});
