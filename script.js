

//init
qrcode.makeCode("Hey there :)");


function generateQR(){
    let qrcode = new QRCode(document.querySelector(".qrcode"));
    if(document.querySelector("input").value==="" || document.querySelector("input").value===" ")
        alert("Input cannot be empty");
    else{
        qrcode.makeCode(document.querySelector("input").value);
    }
}
function reset(){
    document.querySelector("input").value = ""; // Clear the input field
    document.querySelector(".qrcode").innerHTML = ""; // Clear the QR code
}