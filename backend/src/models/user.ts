import { InferSchemaType, Schema, model } from "mongoose";

const userSchema = new Schema({
    username: { type: String, required: true, unique: true},
    email: { type: String, required: true, unique: true, select: false}, //select false means value will not be returned by default
    password: { type: String, required: true, select: false},
});

type User = InferSchemaType<typeof userSchema>;

export default model<User>("User", userSchema);