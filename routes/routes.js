const express = require('express');
const router = express.Router();
const Video = require('../models/videos');

const handleErrors = (res, error) => {
    console.error(error);
    res.status(500).send('Server error');
};


router.get('/video', async (req, res) => {
    try {
        const videos = await Video.find({}, { url_image: 1 });
        res.status(200).json(videos);
    } catch (error) {
        handleErrors(res, error);
    }
});


router.get('/video/:id/products', async (req, res) => {
    try {
        const { id } = req.params;
        const video = await Video.findById(id, { url_video: 1, products: 1 });
        if (!video) {
            return res.status(404).json({ message: 'Video not found' });
        }
        res.status(200).json(video);
    } catch (error) {
        handleErrors(res, error);
    }
});

router.get('/video/:id/comments', async (req, res) => {
    try {
        const { id } = req.params;
        const video = await Video.findById(id, { comments: 1 });
        if (!video) {
            return res.status(404).json({ message: 'Video not found' });
        }
        res.status(200).json(video.comments);
    } catch (error) {
        handleErrors(res, error);
    }
});

router.post('/comment', async (req, res) => {
    const { username, comment, video_id } = req.body;
    const newComment = {
        username,
        comment,
        timestamp: Date.now(),
    };

    try {
        const video = await Video.findByIdAndUpdate(
            video_id,
            { $push: { comments: newComment } },
            { new: true }
        );

        if (!video) {
            return res.status(404).json({ message: 'Video not found' });
        }

        res.status(200).json({ message: 'Comment added successfully', video });
    } catch (error) {
        handleErrors(res, error);
    }
});

module.exports = router;
