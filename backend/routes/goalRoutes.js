const express = require('express')
const router = express.Router()
const {getGoals,setGoal,updateGoal,deleteGoal} = require('../controllers/goalController')

//Create
router.post('/',setGoal)

//Read
router.get('/',getGoals)

// router.get('/',(req,res)=>{
//     res.status(200).json({message:'Get Goals'})
//     // res.send('Get Goals')
// })

//Update
router.put('/:id',updateGoal)

//Delete
router.get('/:id ',deleteGoal)


module.exports= router