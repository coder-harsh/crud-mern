import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    fathername: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    }
}, {
    timestamps: true
})
const UserModels = mongoose.model('user', userSchema)
export default UserModels