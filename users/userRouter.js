const express = require('express');
const users = require('./userDb')
const router = express.Router();


router.post('/', validateUser,(req, res) => {

});

router.post('/:id/posts',[validatePost, validateUserId],(req, res) => {

});

router.get('/', (req, res) => {

});

router.get('/:id', validateUserId,(req, res) => {

});

router.get('/:id/posts', validateUserId,(req, res) => {

});

router.delete('/:id',validateUserId, (req, res) => {

});

router.put('/:id', validateUserId,(req, res) => {

});

//custom middleware

function validateUserId(req, res, next) {
 const {id} = req.params
 users.getById(id)
 .then(user => {
  if (user){
   req.user = user
   next()
  }
  else{
   res.status(400).json({
    message: " invalid user id"
   })
  }
 })
 .catch(error => {
  res.status(500).json({
   message: 'error processing request'
  })
 })
};

function validateUser(req, res, next) {
  const data = req.body
  if(data && Object.keys(data).length === 0){
   res.status(400).json({
    message: 'missing user data'
   })
  }
  else if(!data.name){
   res.status(400).json({
    message: 'missing required name field'
   })
  }
  else{
   next()
  }
};

function validatePost(req, res, next) {
 const data = req.body
 if(data && Object.keys(data).length ===0){
  res.status(400).json({message: 'missing post data'})
 }
 else if (!data.text) {
  res.status(400).json({
   message: "missing required text field"
  })
 }
 else{
  next()
 }
};


module.exports = router;
