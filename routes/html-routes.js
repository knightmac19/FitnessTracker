const router = require("express");
let path = require("path");


router.get("/", (req, res) => {
  res.sendFile(path.resolve("public/index.html"));
});


router.get("/stats", (req, res) => {
  res.sendFile(path.resolve("public/stats.html"));
});


router.get("/exercise", (req, res) => {
  res.sendFile(path.resolve("public/exercise.html"));
});

module.exports = router;