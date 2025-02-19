const userData = {
    name: "John Doe",
    email: "john@example.com",
    userId: "12345" // Unique user ID
};

document.getElementById("scanBtn").addEventListener("click", () => {
    
    document.getElementById("reader").style.background="linear-gradient(rgba(255, 255, 255, 0.685) ,rgb(0, 0, 0))";

    document.getElementById("reader__dashboard")
    const scanner = new Html5QrcodeScanner("reader", { fps: 10, qrbox: 250 });

    scanner.render((decodedText) => {
        alert("Scanned QR Code: " + decodedText);

        // Send user data + scanned QR code to server
        fetch("https://your-server.com/api/store-scan", { // Replace with your backend
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
                scannedCode: decodedText, 
                user: userData // Send user info along with the scan
            })
        })
        .then(response => response.json())
        .then(data => {
            alert("Data stored successfully!");
        })
        .catch(error => {
            alert("Error sending data: " + error);
        });

        scanner.clear(); // Stop scanner after one scan
    });
});