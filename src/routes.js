const express = require('express')
const routes = express.Router()
const Dashboard = require("./controllers/dashboardController")



routes.get('/', Dashboard.index)
routes.get('/register', Dashboard.register)
routes.get('/questions', Dashboard.questions)
routes.get('/admin', Dashboard.admin)

routes.post('/question/created/:id', Dashboard.createQuestion);
routes.post('/squat/created/:id', Dashboard.createSquat)
routes.post('/question/delete/:id', Dashboard.deleteQuestion)
routes.post('/squat/delete/:id', Dashboard.deleteSquat)



module.exports = routes;