const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
    {
        email: { type: String, required: true},
        username: { type: String, required: true},
        yeets: {type: Number, required: true},
        items: {type: [mongoose.SchemaTypes.ObjectId]},
        titles: {type: [String]},
        avatar: {
            head:{type: mongoose.SchemaTypes.ObjectId},
            chest:{type: mongoose.SchemaTypes.ObjectId},
            lHand:{type: mongoose.SchemaTypes.ObjectId},
            rHand:{type: mongoose.SchemaTypes.ObjectId},
            legs:{type: mongoose.SchemaTypes.ObjectId},
        },
        answers: {type: [{
            questionID:{type: mongoose.SchemaTypes.ObjectId},
            choice:{type: Number},
            betAmount:{type: Number}
        }]}
    }
)

User.methods.updateAvatar = function(head=null, chest=null, lHand=null, rHand=null, legs=null) {
    if(head!=null)this.avatar.head = head;
    if(chest!=null)this.avatar.chest = chest;
    if(lHand!=null)this.avatar.lHand = lHand;
    if(rHand!=null)this.avatar.rHand = rHand;
    if(legs!=null)this.avatar.legs = legs;
}

User.methods.addAnswer = function(QuestionID, Choice, BetAmount)
{
    this.answers.push({ questionID:QuestionID, choice:Choice, betAmount:BetAmount})
}

module.exports = mongoose.model('users', User)