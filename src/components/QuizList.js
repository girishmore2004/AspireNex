// // // import React, { useEffect, useState } from 'react';
// // // import { Container, Typography, List, ListItem, Button } from '@mui/material';
// // // import axios from 'axios';
// // // import { useNavigate } from 'react-router-dom';

// // // const QuizList = () => {
// // //   const [quizzes, setQuizzes] = useState([]);
// // //   const navigate = useNavigate();

// // //   useEffect(() => {
// // //     const fetchQuizzes = async () => {
// // //       try {
// // //         const res = await axios.get('/api/quiz');
// // //         setQuizzes(res.data);
// // //       } catch (error) {
// // //         console.error(error);
// // //       }
// // //     };
// // //     fetchQuizzes();
// // //   }, []);

// // //   return (
// // //     <Container>
// // //       <Typography variant="h4">Available Quizzes</Typography>
// // //       <List>
// // //         {quizzes.map((quiz) => (
// // //           <ListItem key={quiz._id}>
// // //             {quiz.title}
// // //             <Button onClick={() => navigate(`/take-quiz/${quiz._id}`)}>Take Quiz</Button>
// // //           </ListItem>
// // //         ))}
// // //       </List>
// // //     </Container>
// // //   );
// // // };

// // // export default QuizList;
// // import React, { useEffect, useState } from 'react';
// // import { Container, ListGroup, Button } from 'react-bootstrap';
// // import axios from 'axios';
// // import { useNavigate } from 'react-router-dom';

// // const QuizList = () => {
// //   const [quizzes, setQuizzes] = useState([]);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const fetchQuizzes = async () => {
// //       try {
// //         const res = await axios.get('/api/quiz');
// //         setQuizzes(res.data);
// //       } catch (error) {
// //         console.error(error);
// //       }
// //     };
// //     fetchQuizzes();
// //   }, []);

// //   return (
// //     <Container>
// //       <h3>All Quizzes</h3>
// //       <ListGroup>
// //         {quizzes.map((quiz, index) => (
// //           <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
// //             <div>
// //               <h5>{quiz.title}</h5>
// //               <p>{quiz.description}</p>
// //             </div>
// //             <Button onClick={() => navigate(`/quiz-login`)}>Take Quiz</Button>
// //           </ListGroup.Item>
// //         ))}
// //       </ListGroup>
// //     </Container>
// //   );
// // };

// // export default QuizList;

// import React, { useEffect, useState } from 'react';
// import { Container, ListGroup, Button } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';

// const QuizList = () => {
//   const [quizzes, setQuizzes] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchQuizzes = async () => {
//       try {
//         const response = await fetch('/api/quiz');
//         const data = await response.json();
//         setQuizzes(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchQuizzes();
//   }, []);

//   return (
//     <Container>
//       <h3>All Quizzes</h3>
//       <ListGroup>
//         {quizzes.map((quiz, index) => (
//           <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
//             <div>
//               <h5>{quiz.title}</h5>
//               <p>{quiz.description}</p>
//             </div>
//             <Button onClick={() => navigate(`/quiz-login/${quiz._id}`)}>Take Quiz</Button>
//           </ListGroup.Item>
//         ))}
//       </ListGroup>
//     </Container>
//   );
// };

// export default QuizList;


import React, { useEffect, useState } from 'react';
import { Container, ListGroup, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const QuizList = () => {
  const [quizzes, setQuizzes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await fetch('/api/quiz/');
        const data = await response.json();
        setQuizzes(data);
      } catch (error) {
        console.error('Error fetching quizzes:', error);
      }
    };

    fetchQuizzes();
  }, []);

  return (
    <Container className="mt-5">
      <h3>All Quizzes</h3>
      <ListGroup>
        {quizzes.map((quiz) => (
          <ListGroup.Item key={quiz._id} className="d-flex justify-content-between align-items-center">
            <div>
              <h5>{quiz.title}</h5>
              <p>{quiz.description}</p>
            </div>
            <Button variant="primary" onClick={() => navigate(`/quiz-login/${quiz._id}`)}>
              Take Quiz
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default QuizList;
