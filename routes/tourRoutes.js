const express = require("express");
const router = express.Router();
const tourController = require("./../controllers/tourController");
const authController = require("./../controllers/authController");

router
  .route("/")
  .get(tourController.getAllTours)
  .post(authController.protect, tourController.createTour);

router
  .route("/:id")
  .get(authController.protect, tourController.getTour)
  .patch(authController.protect, tourController.updateTour)
  .delete(authController.protect, tourController.deleteTour);

module.exports = router;
