const express = require('express');
const app = express();
const port = 3000;

app.get('/api/data', (req, res) => {
    const data = {
        message: 'Hello, this is your GET API endpoint!'
    };
    res.json(data); 
    
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
