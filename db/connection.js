import mongoose from "mongoose"
const connection = async ()=>{
    return await mongoose.connect("mongodb+srv://ziad:00241300@cluster0.bxnbg.mongodb.net/NETFLIX")
    .then(()=>console.log('connected......'))
    .catch(err=>console.log('fail to connect'))
}
export default connection