// // // // import React, { useState } from 'react';
// // // // import { useNavigate } from 'react-router-dom';
// // // // import { Container, TextField, Button, Typography } from '@mui/material';
// // // // import axios from 'axios';

// // // // const QuizLogin = ({ quizId, setStudentName, setQuizPasswordValid }) => {
// // // //   const [password, setPassword] = useState('');
// // // //   const [error, setError] = useState(null);
// // // //   const navigate = useNavigate();

// // // //   const handleLogin = async () => {
// // // //     try {
// // // //       const res = await axios.post(`/api/quiz/login`, { quizId, password });
// // // //       setStudentName(res.data.studentName);
// // // //       setQuizPasswordValid(true);
// // // //       navigate(`/quiz/${quizId}`);
// // // //     } catch (err) {
// // // //       setError('Invalid password. Please try again.');
// // // //     }
// // // //   };

// // // //   return (
// // // //     <Container>
// // // //       <Typography variant="h4">Enter Quiz Password</Typography>
// // // //       <TextField
// // // //         label="Password"
// // // //         type="password"
// // // //         value={password}
// // // //         onChange={(e) => setPassword(e.target.value)}
// // // //         fullWidth
// // // //         margin="normal"
// // // //       />
// // // //       {error && <Typography color="error">{error}</Typography>}
// // // //       <Button onClick={handleLogin} variant="contained" color="primary">
// // // //         Submit
// // // //       </Button>
// // // //     </Container>
// // // //   );
// // // // };

// // // // export default QuizLogin;
// // // import React, { useState } from 'react';
// // // import { useNavigate } from 'react-router-dom';
// // // import { Container, Form, Button, Alert } from 'react-bootstrap';
// // // import axios from 'axios';

// // // const QuizLogin = ({ quizId, setStudentName, setQuizPasswordValid }) => {
// // //   const [password, setPassword] = useState('');
// // //   const [error, setError] = useState(null);
// // //   const navigate = useNavigate();

// // //   const handleLogin = async () => {
// // //     try {
// // //       const res = await axios.post(`/api/quiz/login`, { quizId, password });
// // //       setStudentName(res.data.studentName);
// // //       setQuizPasswordValid(true);
// // //       navigate(`/quiz/${quizId}`);
// // //     } catch (err) {
// // //       setError('Invalid password. Please try again.');
// // //     }
// // //   };

// // //   return (
// // //     <Container className="mt-5">
// // //       <h4>Enter Quiz Password</h4>
// // //       <Form>
// // //         <Form.Group className="mb-3" controlId="formPassword">
// // //           <Form.Label>Password</Form.Label>
// // //           <Form.Control
// // //             type="password"
// // //             value={password}
// // //             onChange={(e) => setPassword(e.target.value)}
// // //             placeholder="Enter password"
// // //           />
// // //         </Form.Group>
// // //         {error && <Alert variant="danger">{error}</Alert>}
// // //         <Button onClick={handleLogin} variant="primary">
// // //           Submit
// // //         </Button>
// // //       </Form>
// // //     </Container>
// // //   );
// // // };

// // // export default QuizLogin;
// // import React, { useState, useEffect } from 'react';
// // import { useParams, useNavigate } from 'react-router-dom';
// // import { Container, Form, Button, Alert } from 'react-bootstrap';

// // const QuizLogin = () => {
// //   const { id } = useParams();
// //   const [quiz, setQuiz] = useState(null);
// //   const [password, setPassword] = useState('');
// //   const [error, setError] = useState('');
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const fetchQuiz = async () => {
// //       try {
// //         const response = await fetch(`/api/quiz/${id}`);
// //         const data = await response.json();
// //         setQuiz(data);
// //       } catch (error) {
// //         console.error('Error fetching quiz:', error);
// //       }
// //     };
// //     fetchQuiz();
// //   }, [id]);

// //   const handleLogin = (e) => {
// //     e.preventDefault();
// //     if (quiz && password === quiz.password) {
// //       navigate(`/quiz/${id}/take`);
// //     } else {
// //       setError('Incorrect password. Please try again.');
// //     }
// //   };

// //   if (!quiz) return <Container>Loading...</Container>;

// //   return (
// //     <Container>
// //       <h3>{quiz.title}</h3>
// //       <p>{quiz.description}</p>
// //       <Form onSubmit={handleLogin}>
// //         <Form.Group controlId="formPassword">
// //           <Form.Label>Password</Form.Label>
// //           <Form.Control
// //             type="password"
// //             placeholder="Enter password"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //           />
// //         </Form.Group>
// //         {error && <Alert variant="danger">{error}</Alert>}
// //         <Button type="submit">Take Quiz</Button>
// //       </Form>
// //     </Container>
// //   );
// // };

// // export default QuizLogin;


// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { Container, Form, Button, Alert } from 'react-bootstrap';

// const QuizLogin = () => {
//   const { id } = useParams();
//   const [quiz, setQuiz] = useState(null);
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchQuiz = async () => {
//       try {
//         const response = await fetch(`/api/quiz/${id}`);
//         const data = await response.json();
//         setQuiz(data);
//       } catch (error) {
//         console.error('Error fetching quiz:', error);
//       }
//     };
//     fetchQuiz();
//   }, [id]);

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (quiz && password === quiz.password) {
//       navigate(`/quiz/${id}/take`);
//     } else {
//       setError('Incorrect password. Please try again.');
//     }
//   };

//   if (!quiz) return <Container>Loading...</Container>;

//   return (
//     <Container>
//       <h3>{quiz.title}</h3>
//       <p>{quiz.description}</p>
//       <Form onSubmit={handleLogin}>
//         <Form.Group controlId="formPassword">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             placeholder="Enter password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </Form.Group>
//         {error && <Alert variant="danger">{error}</Alert>}
//         <Button type="submit" onClick={() => navigate(`/take-quiz/${id}`)}>Take Quiz</Button>
//       </Form>
//     </Container>
//   );
// };

// export default QuizLogin;


import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';

const QuizLogin = () => {
  const { id } = useParams();
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/quiz/${id}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        navigate(`/take-quiz/${id}`);
      } else {
        console.error('Incorrect password');
      }
    } catch (error) {
      console.error('Error logging in to quiz:', error);
    }
  };

  return (
    <Container className="mt-5">
      <h3>Enter Quiz Password</h3>
      <Form onSubmit={handleLogin}>
        <Form.Group controlId="formQuizPassword" className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter quiz password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Enter Quiz
        </Button>
      </Form>
    </Container>
  );
};

export default QuizLogin;
