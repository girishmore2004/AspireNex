// // const mongoose = require('mongoose');

// // const questionSchema = new mongoose.Schema({
// //   questionText: { type: String, required: true },
// //   options: [{ type: String, required: true }],
// //   correctAnswer: { type: String, required: true },
// // });

// // const quizSchema = new mongoose.Schema({
// //   title: { type: String, required: true },
// //   description: { type: String, required: true },
// //   questions: [questionSchema],
// //   createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
// // });

// // module.exports = mongoose.model('Quiz', quizSchema);
// const mongoose = require('mongoose');

// const QuizSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   description: {
//     type: String,
//     required: true,
//   },
//   questions: [
//     {
//       questionText: { type: String, required: true },
//       options: [{ type: String, required: true }],
//       correctAnswer: { type: String, required: true },
//     },
//   ],
//   password: {
//     type: String,
//     required: true,
//   },
//   createdBy: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//   },
// });

// module.exports = mongoose.model('Quiz', QuizSchema);
const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  questionText: { type: String, required: true },
  options: [{ type: String, required: true }],
  correctAnswer: { type: String, required: true },
  questionImage: { type: String }, // New field for question image
  optionImages: [{ type: String }], // New field for option images
});

const QuizSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  questions: [QuestionSchema],
  password: {
    type: String,
    required: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

module.exports = mongoose.model('Quiz', QuizSchema);
