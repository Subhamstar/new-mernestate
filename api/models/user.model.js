import mongoose from "mongoose";

const userSchema=new  mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    avatar:{
        type:String,
        default:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2Fcutecatfunny%2F&psig=AOvVaw3YWIbXcsY0fpd1hjTxWhEP&ust=1741082392780000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPjosMnT7YsDFQAAAAAdAAAAABAE"
    },
},{
    timestamps:true
});

const User=mongoose.model('User',userSchema);
export default User;