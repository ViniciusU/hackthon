const Questions = require('../model/questions')
const Squats = require('../model/Squats')
const Database = require("../db/config");

module.exports = {   

    index(req,res){

      return res.render('index');
                  
     },
     register(req,res){
      return res.render('telaRegister');

     },
     questions(req,res){
      return res.render('telaQuestions');

     },
     admin(req,res){
        
      return res.render('telaAdmin');
     },
    async  createQuestion(req, res){
      await Questions.create({
        name: req.body.name,
        answer: req.body.answer
      });     
      return res.redirect('/')

     },
     async deleteQuestion(req,res){
      const questionId = req.params.id

      await Questions.delete(questionId)
      
      return res.redirect('/')

     },
    async createSquat(req, res){


        let squatId;
        let isSquat = true



        while (isSquat) {
            //gera o numero do id do squat
            for(var i =0; i<6;i++){
                i == 0? squatId = Math.floor(Math.random()*10).toString() :squatId+= Math.floor(Math.random()*10).toString()
    
            }
        //verifica se esse numero já existe
        const db = await Database();
        const squatsExistIds = await db.all(`SELECT id FROM squats`)
        await db.close();

        isSquat =   squatsExistIds.some(squatsExistIds => squatsExistIds === squatId )

        

      if(!isSquat){
       
        await Squats.create({
          name: req.body.name,
          avatar: req.body.avatar,
          squatId: squatId
        }); 

          }//end while 

      }

        
      return res.redirect('/')
     },
     async  deleteSquat(req,res){

      const squatId = req.params.id

      await Squats.delete(squatId)
      
      return res.redirect('/')


     }
     
 
   
 }