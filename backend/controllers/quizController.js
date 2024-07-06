// const Quiz = require('../models/Quiz');
// const path = require('path');
// const fs = require('fs');

// // Other controller functions...

// exports.uploadImage = async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({ message: 'No file uploaded' });
//     }

//     const filePath = `/uploads/${req.file.filename}`;
//     res.status(200).json({ filePath });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// };

// exports.createQuiz = async (req, res) => {
//   const { title, description, questions, password } = req.body;
//   const newQuiz = new Quiz({ title, description, questions, password, createdBy: req.userId });
//   try {
//     await newQuiz.save();
//     res.status(201).json(newQuiz);
//   } catch (error) {
//     res.status(500).json({ message: 'Something went wrong' });
//   }
// };

// exports.getQuizzes = async (req, res) => {
//   try {
//     const quizzes = await Quiz.find();
//     res.status(200).json(quizzes);
//   } catch (error) {
//     res.status(500).json({ message: 'Something went wrong' });
//   }
// };

// exports.getQuizById = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const quiz = await Quiz.findById(id);
//     res.status(200).json(quiz);
//   } catch (error) {
//     res.status(500).json({ message: 'Something went wrong' });
//   }
// };

// exports.takeQuiz = async (req, res) => {
//   const { id } = req.params;
//   const { answers } = req.body;
//   try {
//     const quiz = await Quiz.findById(id);
//     let score = 0;
//     quiz.questions.forEach((question, index) => {
//       if (question.correctAnswer === answers[index]) {
//         score += 1;
//       }
//     });
//     res.status(200).json({ score });
//   } catch (error) {
//     res.status(500).json({ message: 'Something went wrong' });
//   }
// };

// exports.loginQuiz = async (req, res) => {
//   const { quizId, password } = req.body;
//   try {
//     const quiz = await Quiz.findById(quizId);
//     if (quiz.password === password) {
//       const studentName = req.user.name;
//       res.json({ studentName });
//     } else {
//       res.status(401).json({ error: 'Invalid password' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: 'Server error' });
//   }
// };
// // const Quiz = require('../models/Quiz');

// exports.createQuiz = async (req, res) => {
//   const { title, description, questions, password } = req.body;
//   const newQuiz = new Quiz({ title, description, questions, password, createdBy: req.userId });
//   try {
//     await newQuiz.save();
//     res.status(201).json(newQuiz);
//   } catch (error) {
//     res.status(500).json({ message: 'Something went wrong' });
//   }
// };

// exports.getQuizzes = async (req, res) => {
//   try {
//     const quizzes = await Quiz.find();
//     res.status(200).json(quizzes);
//   } catch (error) {
//     res.status(500).json({ message: 'Something went wrong' });
//   }
// };

// exports.getQuizById = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const quiz = await Quiz.findById(id);
//     res.status(200).json(quiz);
//   } catch (error) {
//     res.status(500).json({ message: 'Something went wrong' });
//   }
// };

// exports.takeQuiz = async (req, res) => {
//   const { id } = req.params;
//   const { answers } = req.body;
//   try {
//     const quiz = await Quiz.findById(id);
//     let score = 0;
//     quiz.questions.forEach((question, index) => {
//       if (question.correctAnswer === answers[index]) {
//         score += 1;
//       }
//     });
//     res.status(200).json({ score });
//   } catch (error) {
//     res.status(500).json({ message: 'Something went wrong' });
//   }
// };

// exports.loginQuiz = async (req, res) => {
//   const { quizId, password } = req.body;
//   try {
//     const quiz = await Quiz.findById(quizId);
//     if (quiz.password === password) {
//       const studentName = req.user.name;
//       res.json({ studentName });
//     } else {
//       res.status(401).json({ error: 'Invalid password' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: 'Server error' });
//   }
// };
const Quiz = require('../models/Quiz');

exports.createQuiz = async (req, res) => {
  const { title, description, questions, password } = req.body;
  const newQuiz = new Quiz({ title, description, questions, password, createdBy: req.userId });
  try {
    await newQuiz.save();
    res.status(201).json(newQuiz);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

exports.getQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.status(200).json(quizzes);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

exports.getQuizById = async (req, res) => {
  const { id } = req.params;
  try {
    const quiz = await Quiz.findById(id);
    res.status(200).json(quiz);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

exports.takeQuiz = async (req, res) => {
  const { id } = req.params;
  const { answers } = req.body;
  try {
    const quiz = await Quiz.findById(id);
    let score = 0;
    quiz.questions.forEach((question, index) => {
      if (question.correctAnswer === answers[index]) {
        score += 1;
      }
    });
    res.status(200).json({ score });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

exports.uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const filePath = `/uploads/${req.file.filename}`;
    res.status(200).json({ filePath });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
