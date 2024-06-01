import * as express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    console.log("made it here");
    res.status(200).json("oy bruv");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "" });
  }
});

export default router;
