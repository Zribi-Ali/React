const mongoose = require("mongoose");

const ClasseSchema = new mongoose.Schema(
  {
    nom: {
      type: String,
    },
    cours: [
      {
          type: mongoose.Schema.Types.ObjectId,
          ref: "cours",
      }
    ],
    formation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "formation",
    },
    etudiant:[ {
        
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    }],
    proffeseur: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("classe", ClasseSchema);
