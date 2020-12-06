const router = require('express').Router();
const { 
  addComment,
  removeComment,
  addReply,
  removeReply
} = require('../../controllers/comment-controller');

// add comment - /api/comments/<pizzaId>
router.route('/:pizzaId').post(addComment);

// remove comment & add reply - /api/comments/<pizzaId>/<commentId>
router
  .route('/:pizzaId/:commentId')
  .put(addReply)
  .delete(removeComment)

// remove reply - /api/comments/<pizzaId>/<commentId>/<replyId>
router.route('/:pizzaId/:commentId/:replyId').delete(removeReply);


module.exports = router;