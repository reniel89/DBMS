import express from 'express';
const app = express();
app.get('/', (req, res) => {
    res.send("server is ready");
});

const port = process.nextTick.PORT || 3000;
app.listen(port, () => {
    console.log("server at http://localhost${port}");
})