const router = require("express").Router();
const evenementController = require("../../controllers/event/evenement");
const cors = require("cors");
const { check, Log, notReqAuthentication } = require("../../middleware/auth");

// auth

router.use(cors());
router.post("/register", evenementController.signUp);
router.get("/", evenementController.getAllevenements);
router.get("/:id", evenementController.evenementInfo);
router.put("/:id", evenementController.updateevenement);
router.delete("/:id", evenementController.deleteevenement);
router.put(
  "/likeevenementModel/:evenementModelId",
  Log,
  evenementController.likeevenementModel
);
router.put(
  "/dislikeevenementModel/:evenementModelId",
  Log,
  evenementController.dislikeevenementModel
);
router.get("/upcomingEvent/ev", evenementController.upcomingEvent);
router.get("/stats/ev", evenementController.stats);
router.get("/search/:search", evenementController.searchEvent);
router.post("/reserver/ev", Log, evenementController.reservePlace);

module.exports = router;
