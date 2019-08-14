const express = 'express';
const users = require('./userDb')
const router = express.Router();


router.post('/', (req, res) => {

});

router.post('/:id/posts', (req, res) => {

});

router.get('/', (req, res) => {

});

router.get('/:id', (req, res) => {

});

router.get('/:id/posts', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

router.put('/:id', (req, res) => {

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

};

function validatePost(req, res, next) {

};


module.exports = router;
