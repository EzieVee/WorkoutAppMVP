const mongoose = require("mongoose");

const WorkoutSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    require: false,
  },
  cloudinaryId: {
    type: String,
    require: true,
  },
  videoReference: {
    type: String,
    required: false,
  },
  likes: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
  },
});

module.exports = mongoose.model("Workout", WorkoutSchema);