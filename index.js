const express = require("express")
const app = express()

app.use(express.json())

app.post("/", (req,res) => {
    // post paste
})

app.get("/:key", (req,res) => {
    
})

app.listen()