const mongoose = require('mongoose')
const Schema = mongoose.Schema

class Avatar {
    constructor(head, chest, lHand, rHand, legs) {
      this.head = head;
      this.chest = chest;
      this.lHand = lHand;
      this.rHand = rHand;
      this.legs = legs;
    }
  }

  
class Answer {
    constructor(questionID, choice, betAmount) {
      this.questionID = questionID;
      this.choice = choice;
      this.betAmount = betAmount;
    }
  }

const User = new Schema(
    {
        username: { type: String, required: true },
        yeets: {type: Number, required: true},
        items: {type: [mongoose.SchemaTypes.ObjectId]},
        titles: {type: [String], required: true },
        avatar: {type: Avatar},
        answers: {type: [Answer]},
    },
    { timestamps: true },
)

User.methods.createAvatar = function() {
    this.avatar = new Avatar(null,null,null,null,null)
}

User.methods.updateAvatar = function(head=null, chest=null, lHand=null, rHand=null, legs=null) {
    if(head!=null)this.avatar.head = head;
    if(chest!=null)this.avatar.chest = chest;
    if(lHand!=null)this.avatar.lHand = lHand;
    if(rHand!=null)this.avatar.rHand = rHand;
    if(legs!=null)this.avatar.legs = legs;
}

User.methods.addAnswer = function(questionID, choice, betAmount)
{
    let answ = new Answer(questionID, choice, betAmount)
    this.answers.push(answ)
}

module.exports = mongoose.model('users', User)