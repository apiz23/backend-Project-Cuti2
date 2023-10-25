const express = require("express");
const router = express.Router();

router.get("/", async (req, res, next) => {
	const soloLevelingChapters = [];

	for (let i = 1; i <= 10; i++) {
		soloLevelingChapters.push({
			chapter: i,
			url: `https://solo-leveling.com/chapter-${i}`,
		});
	}

	return res.status(200).json({
		title: "Solo Leveling",
		chapters: soloLevelingChapters,
	});
});

module.exports = router;
