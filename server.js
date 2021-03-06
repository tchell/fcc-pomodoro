const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(__dirname + '/client/build/'));

    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
