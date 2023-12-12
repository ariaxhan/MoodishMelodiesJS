import Authenticate from "./Authenticate";

function SendBookData(bookData) {
    fetch('http://localhost:3001/analyze-book', { // Replace with your server URL if different
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ bookData }),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.log('bookData:', bookData)
            console.error(JSON.stringify({ bookData }));
            console.error('Error:', error);
        });
}

export default SendBookData;