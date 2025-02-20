// const userData = {
//     name: "John Doe",
//     email: "john@example.com",
//     userId: "12345" // Unique user ID
// };

// document.getElementById("scanBtn").addEventListener("click", () => {
    
//     document.getElementById("reader").style.background="white";

//     document.getElementById("reader__dashboard")
//     const scanner = new Html5QrcodeScanner("reader", { fps: 10, qrbox: 250 });

//     scanner.render((decodedText) => {   
//         alert("Scanned QR Code: " + decodedText);

//         // Send user data + scanned QR code to server
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

//         scanner.clear(); // Stop scanner after one scan
//         document.getElementById("reader").style.display ="none"

//     })

let scanField = document.querySelector("#reader");

const qrCodeSuccessCallback_E = (decodedText, decodedResult) => {
    /* handle success */
    alert("decoded test")
};

const qrCodeSuccessCallback_M = (decodedText, decodedResult) => {
    /* handle success */
    alert("decoded test")
};

function CreateQRScanElemnt(elemnt,succsesCallback){
    const html5QrCode = new Html5Qrcode(elemnt);
    const config = { fps: 10, qrbox: { width: 250, height: 250 } };
    html5QrCode.start({ facingMode: "environment" }, config, succsesCallback);
    document.addEventListener("click",(eve)=>{
        if(eve.target.matches(".stopScan")){
            html5QrCode.stop()
        }
    })
    // html5QrCode.stop()                
}

function elemntCreate(tag,className,text){
    let bit=document.createElement(tag)
    bit.className = className
    bit.innerText = text
    return bit
}

document.addEventListener("click",(eve)=>{

    if(eve.target.matches("#M-Present")){

            CreateQRScanElemnt("reader",qrCodeSuccessCallback_M)
            scanField.appendChild(elemntCreate("button","stopScan","stop scan"))

    }

    if(eve.target.matches("#E-Present")){
        
        CreateQRScanElemnt("reader",qrCodeSuccessCallback_E)
        scanField.appendChild(elemntCreate("button","stopScan","stop scan"))

    }
})
