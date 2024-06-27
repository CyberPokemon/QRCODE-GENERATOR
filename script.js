const qrcodetext=document.getElementById('inputtext');
const sizes=document.getElementById('size');
const qrwindow=document.getElementById('qrbox');
const generatebtn=document.getElementById('genbtn');
const downloadbtn=document.getElementById('dwnbtn');

function generateQR()
{
    qrwindow.innerHTML="";
    new QRCode(qrwindow,{
        text:qrcodetext.value,
        height:size,
        width:size,
        colorLight:"#fff",
        colorDark:"#000"
    });
}

function inputCheck(){
    if(qrcodetext.value.length>0)
        {
            generateQR()
        }
        else
        {
            qrwindow.innerHTML="";
            alert("Please enter text or url to generate QR Code");
        }
}

let size = sizes.value;

generatebtn.addEventListener('click',(e)=>{
    e.preventDefault();
    inputCheck();
});

sizes.addEventListener('change',(e)=>{
    size=e.target.value;
});

downloadbtn.addEventListener('click', () => {
    let img = document.querySelector('.qrCodePic img');

    if (img !== null) {
        let imgAttr = img.getAttribute('src');
        if (imgAttr) {
            downloadbtn.setAttribute("href", imgAttr);
            downloadbtn.setAttribute("download", "QRCODE.png");
        } else {
            alert("Download not possible as the QR code image source is missing");
        }
    } else {
        alert("Download not possible as no QR code is generated");
        downloadbtn.removeAttribute("href");
    }
});
