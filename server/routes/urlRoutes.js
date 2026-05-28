const express = require("express");
const { nanoid } = require("nanoid");
const Url = require("../models/url");

const router = express.Router();

router.post("/shorten", async (req, res) => {
  try {
    const { originalUrl } = req.body;

    const shortCode = nanoid(6);

    const newUrl = new Url({
      originalUrl,
      shortCode,
    });

    await newUrl.save();

    res.json({
    shortUrl: `https://cleanlink.onrender.com/${shortCode}`    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
});
router.get("/:shortCode", async (req, res) => {
  try {
    const { shortCode } = req.params;

    const url = await Url.findOne({ shortCode });

    if (url) {
      return res.redirect(url.originalUrl);
    }

    res.status(404).json({
      message: "URL not found",
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
});

module.exports = router;