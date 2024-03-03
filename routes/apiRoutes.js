const express = require("express")
const router = express.Router()
const User = require("../models/User")


router.post("/api/users", async (req, res) => {

})

router.get("/users", async (req, res) => {
    console.log("hello")
})

module.exports = router
