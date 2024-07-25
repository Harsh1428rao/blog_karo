const express = require('express');

const router = express.Router();

const commentController = require('../controllers/commentController');
const verifyJWT = require('../middleware/verifyJWT');
const verifyJWTOptional = require('../middleware/verifyJWTOptional');


router.post('/:slug/comments', verifyJWT, commentController.addCommentsToArticle);

router.get('/:slug/comments', verifyJWTOptional, commentController.getCommentsFromArticle);


router.delete('/:slug/comments/:id', verifyJWT, commentController.deleteComment);



module.exports = router;