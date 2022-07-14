// Import
const router = require('express').Router();
const { Comment } = require('../models');


// POST CREATE
router.post('/comment', async (req, res) => {
    try {
        // const loggedIn = !!req.session.logged_in;
        // if (!loggedIn) {
        //     return res.status(401).json(loggedIn);
        // }

        // const checkProduct = await Carts.findAll({
        //     where: {
        //         user_id: req.session.user_id,
        //         product_id: req.body.productId,
        //     },
        // });

        // if (!!checkProduct) {
        const newComment = await Comment.create({
            comment_content: req.body.comment_content,
            comment_post_date: req.body.comment_post_date,
            user_id: req.session.user_id,
            blog_id: req.body.blog_id,
        });
        if (!newComment) {
            res.status(404).json('No Comment found with that id');
            return
        }
        res.status(200).json({ message: 'Comment has been updated' })
    } catch (err) {
        res.status(500).json('Something went wrong', err)
    }
});

module.exports = router;