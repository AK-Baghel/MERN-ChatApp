import express from "express"
import dotenv from "dotenv"
import { chats } from "./data/data.js";

const app = express();
dotenv.config();

app.get("/", (req, res) => {
    res.send(chats)
})

app.get("/api/:id", (req, res) => {
    const list = chats.find((c) => c._id === req.params.id)
    res.send(list);
})
// app.get("api/chat",)

app.listen(process.env.PORT, () => {
    console.log("server is running on port 8080..");
})