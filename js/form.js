//const name = document.getElementById('name').value;
//const message = document.getElementById('message').value;
let saveFile = () => {
    	
    // Get the data from each element on the form.
    const name1 = document.getElementById('name');
    const message1 = document.getElementById('message');

    console.log(name);
    
    // This variable stores all the data.
    let data = 
            'let m5 = "' + message1.value + '";';
        
    // the \r\n is for new line or line breaks, so that each data can be written in a new line in the text file

    // Convert the text to BLOB.
    const textToBLOB = new Blob([data], { type: 'text/plain' });
    const sFileName = 'formData.txt';	   // The file to save the data.

    let newLink = document.createElement("a");
    newLink.download = sFileName;
    // newLink.append = sFileName;

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    }
    else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }

    newLink.click(); 
}
