import express from "express";
import cookieParser from "cookie-parser";

const app = express();

const PORT = 3000;

app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("Hello World!");
    });
    app.get("/setcookies", (req, res) => {
        res.cookie("name", "value", { 
            maxAge: 900000, httpOnly: true, secure: true,
            sameSite: "strict", path: "/"

         });

        res.send("Hello World 3!");
        });

app.listen(PORT);

console.log(`Server is running on port ${PORT}`);