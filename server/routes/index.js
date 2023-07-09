const { Router } = require("express");
const asyncHandler = require("../utils/async-handler");
const hashPassword = require("../utils/hash-password");

const router = Router();

router.get("/", (req, res) => {
  if (req.user) {
    res.redirect("/posts");
    return;
  }
  res.redirect("/login");
});

rotuer.get("/login", (req, res, next) => {
  res.render("user/Login");
});

router.post(
  "/register",
  asyncHandler(async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = hashPassword(password);
    const user = await User.create({
      username,
      password: hashedPassword,
    });

    res.redirect("/");
  })
);

router.get("/logout", (req, res, next) => {
  req.logout();
  res.redirect("/");
});

router.get("/exit", (req, res, next) => {
  res.send("ok");
  process.nextTick(() => {
    console.log("서버를 종료합니다.");
    process.exit();
  });
});

module.exports = router;

module.exports = router;
