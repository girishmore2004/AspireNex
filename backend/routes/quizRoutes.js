// // const express = require('express');
// // const { createQuiz, getQuizzes, getQuizById, takeQuiz, loginQuiz } = require('../controllers/quizController');
// // const auth = require('../middleware/authMiddleware');

// // const router = express.Router();

// // router.post('/create', auth, createQuiz);
// // router.get('/', getQuizzes);
// // router.get('/:id', getQuizById);
// // router.post('/take/:id', takeQuiz);
// // router.post('/login', auth, loginQuiz);

// // module.exports = router;
// const express = require('express');
// const multer = require('multer');
// const path = require('path');
// const { createQuiz, getQuizzes, getQuizById, takeQuiz, loginQuiz, uploadImage } = require('../controllers/quizController');
// const auth = require('../middleware/authMiddleware');

// const router = express.Router();

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/');
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//   }
// });

// const upload = multer({ storage });

// router.post('/create', auth, createQuiz);
// router.get('/', getQuizzes);
// router.get('/:id', getQuizById);
// router.post('/take/:id', takeQuiz);
// router.post('/login', auth, loginQuiz);
// router.post('/upload', auth, upload.single('image'), uploadImage); // New route for image upload

// module.exports = router;
const express = require('express');
const multer = require('multer');
const path = require('path');
const {
  createQuiz,
  getQuizzes,
  getQuizById,
  takeQuiz,
  uploadImage,
} = require('../controllers/quizController');
const auth = require('../middleware/authMiddleware');

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

router.post('/create', auth, createQuiz);
router.get('/', getQuizzes);
router.get('/:id', getQuizById);
router.post('/take/:id', takeQuiz);
router.post('/upload', auth, upload.single('image'), uploadImage);

module.exports = router;
