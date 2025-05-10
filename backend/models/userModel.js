import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    // Define a product schema with a cartData field that defaults to an empty object and prevents empty objects from being removed
    cartData: { type: Object, default: {} },
  },
  { minimize: false } // Prevents removing empty objects
);

const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;
