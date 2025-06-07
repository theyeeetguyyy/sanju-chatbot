import express from "express"

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("Welcome to Sanjeevika");
})

async function callGenerateAPI(inputText) {
    const response = await fetch('http://localhost:5000/generate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: inputText })
    });

    const data = await response.json();
    console.log("Response from Python:", data.result);
}

// Example usage
callGenerateAPI("i have strong headache");


app.listen(port, () => {
    console.log("listening on port 3000");
});
