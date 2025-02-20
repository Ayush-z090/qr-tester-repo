let scanField = document.querySelector("#reader");
let html5QrCode;

const qrCodeSuccessCallback_E = (decodedText, decodedResult) => {
    /* handle success */
    alert("decoded test")
    //         fetch("https://your-server.com/api/store-scan", { // Replace with your backend
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ 
//                 scannedCode: decodedText, 
//                 user: userData // Send user info along with the scan
//             })
//         })
//         .then(response => response.json())
//         .then(data => {
//             alert("Data stored successfully!");
//         })
//         .catch(error => {
//             alert("Error sending data: " + error);
//         });

};

const qrCodeSuccessCallback_M = (decodedText, decodedResult) => {
    /* handle success */
    alert("decoded test")
};

function CreateQRScanElemnt(elemnt,succsesCallback){
    scanField.style.display="block"
    if (html5QrCode) html5QrCode.resume()
    html5QrCode = new Html5Qrcode(elemnt);
    const config = { fps: 10, qrbox: { width: 250, height: 250 } };
    html5QrCode.start({ facingMode: "environment" }, config, succsesCallback);
    document.addEventListener("click",(eve)=>{
        
        if(eve.target.matches(".stopScan") ){
            if(eve.target.innerText==="Stop Scan")
            {
                html5QrCode.pause();
                eve.target.innerText="resume scan"
            }
            else{
                html5QrCode.resume()
                eve.target.innerText="stop scan"
            }
        }
        
    })
}

function elemntCreate(tag,className,text){
    let bit=document.createElement(tag)
    bit.className = className
    bit.innerText = text
    return bit
}

let currentHrs = new Date().getHours()

document.addEventListener("click",(eve)=>{

    if(eve.target.matches("#M-Present") && currentHrs>=10){
            CreateQRScanElemnt("reader",qrCodeSuccessCallback_M)
            scanField.appendChild(elemntCreate("button","stopScan","stop scan"))

    }

    if(eve.target.matches("#E-Present") && currentHrs>=14 ){
        
        CreateQRScanElemnt("reader",qrCodeSuccessCallback_E)
        scanField.appendChild(elemntCreate("button","stopScan","stop scan"))

    }
})