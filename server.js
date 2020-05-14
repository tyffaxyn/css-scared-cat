const Bundler = require("parcel-bundler");
const express = require("express");

const init = async () => {
    const port = 3300;
    const app = express();
    const bundler = new Bundler("./index.html");

    app.use(bundler.middleware());

    await app.listen(port);
    console.log(`Server running on ${port}`);
}

init().catch(error => console.log(error));