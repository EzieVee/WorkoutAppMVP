const Workout = require("../models/Workout");
const User = require("../models/User");
const cloudinary = require("../middleware/cloudinary");

module.exports = {
  createWorkout: async (req, res) => {
    try {
      const result = await cloudinary.uploader.upload(req.file.path);
      const workoutUser = await User.findById(req.user.id)
      
      await Workout.create({
        name: req.body.name,
        type: req.body.type,
        image: result.secure_url,
        cloudinaryId: result.public_id,
        videoReference: req.body.videoReference,
        walkthrough: req.body.walkthrough,
        comment: req.body.comment,
        likes: 0,
        post: req.params.id,
        createdBy: workoutUser.userName,
        createdById: req.user.id
      });
      console.log("Workout has been added!");
      res.redirect("/post/"+req.params.id);
    } catch (err) {
      console.log(err);
    }
  },
  showWorkout: async (req, res) => {
    try {
      // 
      const workout = await Workout.find();
      console.log(workout)
      res.render("post.ejs", { workout });
    } catch (err) {
      console.log(err);
    }
  }
};
