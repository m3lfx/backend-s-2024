const express = require('express');
const router = express.Router();
const { create, list, read, remove, update } = require('../controllers/post');

router.post('/post', create);
router.get('/posts', list);
router.get('/post/:slug', read);
router.delete('/post/:slug', remove);
router.put('/post/:slug', update);
module.exports = router;