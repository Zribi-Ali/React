const Cours = require("../models/Cours");
const Classe = require("../models/Classe");
const User = require("../models/User");

exports.Postcours = async (req, res) => {
      try {
            let cll =await Classe.findOne({
                  _id:req.body.classe
            })
            let USER =await User.findOne({
                  _id:req.body.user
            })
           
         
            const Newcours = new Cours({ ...req.body });
            if (req.files.length > 0) {
                req.files.map((file) => {
                    Newcours.content =
                    "http://192.168.93.26:8888/cour/" + file.originalname;
                });
              } 
              Newcours.user=USER._id
              Newcours.classe=cll._id
          let resultat=   await Newcours.save();
               cll.cours.push(resultat._id);

              await cll.save();

            res.status(200).send({ response:Cours, msg:"cours ajouter avec suucces" });
            
            return;
      } catch (error) {
            console.log(error)
           res.status(400).send({ message: "can not save it" });
          
          
      }
};

