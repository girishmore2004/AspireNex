// // // // import React, { useEffect, useState } from 'react';
// // // // import { useParams } from 'react-router-dom';
// // // // import { Container, Typography, Button, Radio, RadioGroup, FormControlLabel } from '@mui/material';
// // // // import axios from 'axios';

// // // // const TakeQuiz = () => {
// // // //   const { id } = useParams();
// // // //   const [quiz, setQuiz] = useState(null);
// // // //   const [answers, setAnswers] = useState({});
// // // //   const [score, setScore] = useState(null);

// // // //   useEffect(() => {
// // // //     const fetchQuiz = async () => {
// // // //       try {
// // // //         const res = await axios.get(`/api/quiz/${id}`);
// // // //         setQuiz(res.data);
// // // //       } catch (error) {
// // // //         console.error(error);
// // // //       }
// // // //     };
// // // //     fetchQuiz();
// // // //   }, [id]);

// // // //   const handleSubmit = async () => {
// // // //     try {
// // // //       const res = await axios.post(`/api/quiz/take/${id}`, { answers });
// // // //       setScore(res.data.score);
// // // //     } catch (error) {
// // // //       console.error(error);
// // // //     }
// // // //   };

// // // //   const handleAnswerChange = (questionIndex, answer) => {
// // // //     setAnswers({
// // // //       ...answers,
// // // //       [questionIndex]: answer,
// // // //     });
// // // //   };

// // // //   return (
// // // //     <Container>
// // // //       {quiz && (
// // // //         <>
// // // //           <Typography variant="h4">{quiz.title}</Typography>
// // // //           <Typography variant="h6">{quiz.description}</Typography>
// // // //           {quiz.questions.map((question, index) => (
// // // //             <div key={index}>
// // // //               <Typography variant="body1">{question.questionText}</Typography>
// // // //               <RadioGroup
// // // //                 value={answers[index] || ''}
// // // //                 onChange={(e) => handleAnswerChange(index, e.target.value)}
// // // //               >
// // // //                 {question.options.map((option, idx) => (
// // // //                   <FormControlLabel
// // // //                     key={idx}
// // // //                     value={option}
// // // //                     control={<Radio />}
// // // //                     label={option}
// // // //                   />
// // // //                 ))}
// // // //               </RadioGroup>
// // // //             </div>
// // // //           ))}
// // // //           <Button onClick={handleSubmit} variant="contained" color="primary">
// // // //             Submit
// // // //           </Button>
// // // //         </>
// // // //       )}
// // // //       {score !== null && <Typography variant="h5">Your Score: {score}</Typography>}
// // // //     </Container>
// // // //   );
// // // // };

// // // // export default TakeQuiz;
// // // import React, { useEffect, useState } from 'react';
// // // import { useParams } from 'react-router-dom';
// // // import { Container, Typography, Button, Radio, RadioGroup, FormControlLabel } from '@mui/material';
// // // import axios from 'axios';
// // // import QuizLogin from './QuizLogin';

// // // const TakeQuiz = () => {
// // //   const { id } = useParams();
// // //   const [quiz, setQuiz] = useState(null);
// // //   const [answers, setAnswers] = useState({});
// // //   const [score, setScore] = useState(null);
// // //   const [studentName, setStudentName] = useState('');
// // //   const [quizPasswordValid, setQuizPasswordValid] = useState(false);

// // //   useEffect(() => {
// // //     if (quizPasswordValid) {
// // //       const fetchQuiz = async () => {
// // //         try {
// // //           const res = await axios.get(`http://localhost:5000/api/quiz/${id}`);
// // //           setQuiz(res.data);
// // //         } catch (error) {
// // //           console.error(error);
// // //         }
// // //       };
// // //       fetchQuiz();
// // //     }
// // //   }, [id, quizPasswordValid]);

// // //   const handleSubmit = async () => {
// // //     try {
// // //       const res = await axios.post(`http://localhost:5000/api/quiz/take/${id}`, { answers });
// // //       setScore(res.data.score);
// // //     } catch (error) {
// // //       console.error(error);
// // //     }
// // //   };

// // //   const handleAnswerChange = (questionIndex, answer) => {
// // //     setAnswers({
// // //       ...answers,
// // //       [questionIndex]: answer,
// // //     });
// // //   };

// // //   if (!quizPasswordValid) {
// // //     return (
// // //       <QuizLogin
// // //         quizId={id}
// // //         setStudentName={setStudentName}
// // //         setQuizPasswordValid={setQuizPasswordValid}
// // //       />
// // //     );
// // //   }

// // //   return (
// // //     <Container>
// // //       {quiz && (
// // //         <>
// // //           <Typography variant="h4">{quiz.title}</Typography>
// // //           <Typography variant="h6">{quiz.description}</Typography>
// // //           <Typography variant="body1">Student: {studentName}</Typography>
// // //           {quiz.questions.map((question, index) => (
// // //             <div key={index}>
// // //               <Typography variant="body1">{question.questionText}</Typography>
// // //               <RadioGroup
// // //                 value={answers[index] || ''}
// // //                 onChange={(e) => handleAnswerChange(index, e.target.value)}
// // //               >
// // //                 {question.options.map((option, idx) => (
// // //                   <FormControlLabel
// // //                     key={idx}
// // //                     value={option}
// // //                     control={<Radio />}
// // //                     label={option}
// // //                   />
// // //                 ))}
// // //               </RadioGroup>
// // //             </div>
// // //           ))}
// // //           <Button onClick={handleSubmit} variant="contained" color="primary">
// // //             Submit
// // //           </Button>
// // //         </>
// // //       )}
// // //       {score !== null && <Typography variant="h5">Your Score: {score}</Typography>}
// // //     </Container>
// // //   );
// // // };

// // // export default TakeQuiz;

// // import React, { useEffect, useState } from 'react';
// // import { useParams } from 'react-router-dom';
// // import axios from 'axios';
// // import { Container, Form, Button, Alert } from 'react-bootstrap';
// // import QuizLogin from './QuizLogin';

// // const TakeQuiz = () => {
// //   const { id } = useParams();
// //   const [quiz, setQuiz] = useState(null);
// //   const [answers, setAnswers] = useState({});
// //   const [score, setScore] = useState(null);
// //   const [studentName, setStudentName] = useState('');
// //   const [quizPasswordValid, setQuizPasswordValid] = useState(false);

// //   useEffect(() => {
// //     if (quizPasswordValid) {
// //       const fetchQuiz = async () => {
// //         try {
// //           const res = await axios.get(`http://localhost:5000/api/quiz/${id}`);
// //           setQuiz(res.data);
// //         } catch (error) {
// //           console.error(error);
// //         }
// //       };
// //       fetchQuiz();
// //     }
// //   }, [id, quizPasswordValid]);

// //   const handleSubmit = async () => {
// //     try {
// //       const res = await axios.post(`http://localhost:5000/api/quiz/take/${id}`, { answers });
// //       setScore(res.data.score);
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };

// //   const handleAnswerChange = (questionIndex, answer) => {
// //     setAnswers({
// //       ...answers,
// //       [questionIndex]: answer,
// //     });
// //   };

// //   if (!quizPasswordValid) {
// //     return (
// //       <QuizLogin
// //         quizId={id}
// //         setStudentName={setStudentName}
// //         setQuizPasswordValid={setQuizPasswordValid}
// //       />
// //     );
// //   }

// //   return (
// //     <Container className="mt-5">
// //       {quiz && (
// //         <>
// //           <h4>{quiz.title}</h4>
// //           <h6>{quiz.description}</h6>
// //           <p>Student: {studentName}</p>
// //           {quiz.questions.map((question, index) => (
// //             <div key={index} className="mb-4">
// //               <p>{question.questionText}</p>
// //               <Form>
// //                 {question.options.map((option, idx) => (
// //                   <Form.Check
// //                     key={idx}
// //                     type="radio"
// //                     id={`question-${index}-option-${idx}`}
// //                     name={`question-${index}`}
// //                     value={option}
// //                     label={option}
// //                     checked={answers[index] === option}
// //                     onChange={() => handleAnswerChange(index, option)}
// //                   />
// //                 ))}
// //               </Form>
// //             </div>
// //           ))}
// //           <Button onClick={handleSubmit} variant="primary">
// //             Submit
// //           </Button>
// //         </>
// //       )}
// //       {score !== null && (
// //         <Alert variant="success" className="mt-3">
// //           Your Score: {score}
// //         </Alert>
// //       )}
// //     </Container>
// //   );
// // };

// // export default TakeQuiz;
// // import React, { useState, useEffect } from 'react';
// // import { useParams, useNavigate } from 'react-router-dom';
// // import { Container, Button, Form } from 'react-bootstrap';

// // const TakeQuiz = () => {
// //   const { id } = useParams();
// //   const [quiz, setQuiz] = useState(null);
// //   const [answers, setAnswers] = useState([]);
// //   const [currentQuestion, setCurrentQuestion] = useState(0);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const fetchQuiz = async () => {
// //       try {
// //         const response = await fetch(`/api/quiz/${id}`);
// //         const data = await response.json();
// //         setQuiz(data);
// //         setAnswers(new Array(data.questions.length).fill(null));
// //       } catch (error) {
// //         console.error('Error fetching quiz:', error);
// //       }
// //     };
// //     fetchQuiz();
// //   }, [id]);

// //   const handleAnswerChange = (index, value) => {
// //     setAnswers((prev) => {
// //       const newAnswers = [...prev];
// //       newAnswers[currentQuestion] = value;
// //       return newAnswers;
// //     });
// //   };

// //   const handleNextQuestion = () => {
// //     setCurrentQuestion((prev) => prev + 1);
// //   };

// //   const handlePrevQuestion = () => {
// //     setCurrentQuestion((prev) => prev - 1);
// //   };

// //   const handleSubmit = async () => {
// //     const submission = {
// //       quizId: id,
// //       answers,
// //     };

// //     try {
// //       const response = await fetch('/api/quiz/submit', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify(submission),
// //       });

// //       if (response.ok) {
// //         navigate(`/quiz/${id}/results`);
// //       } else {
// //         console.error('Submission failed:', response);
// //       }
// //     } catch (error) {
// //       console.error('Submission error:', error);
// //     }
// //   };

// //   if (!quiz) return <Container>Loading...</Container>;

// //   const question = quiz.questions[currentQuestion];

// //   return (
// //     <Container>
// //       <h3>{quiz.title}</h3>
// //       <div className="mb-4">
// //         <p>{question.questionText}</p>
// //         {question.questionImage && <img src={question.questionImage} alt="Question" />}
// //         {question.options.map((option, index) => (
// //           <Form.Check
// //             key={index}
// //             type="radio"
// //             name="option"
// //             label={option}
// //             checked={answers[currentQuestion] === option}
// //             onChange={() => handleAnswerChange(index, option)}
// //           />
// //         ))}
// //       </div>
// //       <div className="d-flex justify-content-between">
// //         <Button onClick={handlePrevQuestion} disabled={currentQuestion === 0}>
// //           Previous
// //         </Button>
// //         {currentQuestion < quiz.questions.length - 1 ? (
// //           <Button onClick={handleNextQuestion}>Next</Button>
// //         ) : (
// //           <Button onClick={handleSubmit}>Submit</Button>
// //         )}
// //       </div>
// //     </Container>
// //   );
// // };

// // export default TakeQuiz;


// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { Container, Button, Form } from 'react-bootstrap';

// const TakeQuiz = () => {
//   const { id } = useParams();
//   const [quiz, setQuiz] = useState(null);
//   const [answers, setAnswers] = useState([]);
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchQuiz = async () => {
//       try {
//         const response = await fetch(`/api/quiz/${id}`);
//         const data = await response.json();
//         setQuiz(data);
//         setAnswers(new Array(data.questions.length).fill(null));
//       } catch (error) {
//         console.error('Error fetching quiz:', error);
//       }
//     };
//     fetchQuiz();
//   }, [id]);

//   const handleAnswerChange = (index, value) => {
//     setAnswers((prev) => {
//       const newAnswers = [...prev];
//       newAnswers[currentQuestion] = value;
//       return newAnswers;
//     });
//   };

//   const handleNextQuestion = () => {
//     setCurrentQuestion((prev) => prev + 1);
//   };

//   const handlePrevQuestion = () => {
//     setCurrentQuestion((prev) => prev - 1);
//   };

//   const handleSubmit = async () => {
//     const submission = {
//       quizId: id,
//       answers,
//     };

//     try {
//       const response = await fetch(`/api/quiz/take/${id}`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(submission),
//       });

//       if (response.ok) {
//         navigate(`/quiz/${id}/results`);
//       } else {
//         console.error('Submission failed:', response);
//       }
//     } catch (error) {
//       console.error('Submission error:', error);
//     }
//   };

//   if (!quiz) return <Container>Loading...</Container>;

//   const question = quiz.questions[currentQuestion];

//   return (
//     <Container>
//       <h3>{quiz.title}</h3>
//       <div className="mb-4">
//         <p>{question.questionText}</p>
//         {question.questionImage && <img src={question.questionImage} alt="Question" />}
//         {question.options.map((option, index) => (
//           <Form.Check
//             key={index}
//             type="radio"
//             name="option"
//             label={option}
//             checked={answers[currentQuestion] === option}
//             onChange={() => handleAnswerChange(index, option)}
//           />
//         ))}
//       </div>
//       <div className="d-flex justify-content-between">
//         <Button onClick={handlePrevQuestion} disabled={currentQuestion === 0}>
//           Previous
//         </Button>
//         {currentQuestion < quiz.questions.length - 1 ? (
//           <Button onClick={handleNextQuestion}>Next</Button>
//         ) : (
//           <Button onClick={handleSubmit}>Submit</Button>
//         )}
//       </div>
//     </Container>
//   );
// };

// export default TakeQuiz;
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Button, Form, Image } from 'react-bootstrap';

const TakeQuiz = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const response = await fetch(`/api/quiz/${id}`);
        const data = await response.json();
        setQuiz(data);
        setAnswers(new Array(data.questions.length).fill(''));
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching quiz:', error);
      }
    };

    fetchQuiz();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/quiz/${id}/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ answers }),
      });

      if (response.ok) {
        const result = await response.json();
        navigate(`/result/${id}`, { state: { result } });
      } else {
        console.error('Error submitting quiz:', response);
      }
    } catch (error) {
      console.error('Error submitting quiz:', error);
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Container className="mt-5">
      <h3>{quiz.title}</h3>
      <p>{quiz.description}</p>
      <Form onSubmit={handleSubmit}>
        {quiz.questions.map((question, index) => (
          <div key={index} className="mb-4">
            <div className="mb-2">
              <strong>{question.questionText}</strong>
              {question.questionImage && <Image src={question.questionImage} rounded className="ms-2" />}
            </div>
            {question.options.map((option, idx) => (
              <Form.Check
                key={idx}
                type="radio"
                name={`question-${index}`}
                id={`question-${index}-option-${idx}`}
                label={option}
                value={option}
                checked={answers[index] === option}
                onChange={(e) =>
                  setAnswers(answers.map((answer, ansIdx) => (ansIdx === index ? e.target.value : answer)))
                }
              />
            ))}
          </div>
        ))}
        <Button variant="primary" type="submit">
          Submit Quiz
        </Button>
      </Form>
    </Container>
  );
};

export default TakeQuiz;
