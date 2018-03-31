const express = require("express");
const app = express();

app.get('*', (req, res) => {
    res.write("hey there");
    res.end();
});

const port  = process.env.port || 3000;
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
})