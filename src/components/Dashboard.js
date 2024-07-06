// // import React, { useEffect, useState } from 'react';
// // import { Container, Typography, List, ListItem, Button } from '@mui/material';
// // import { useNavigate } from 'react-router-dom';
// // import axios from 'axios';

// // const Dashboard = () => {
// //   const [quizzes, setQuizzes] = useState([]);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const fetchQuizzes = async () => {
// //       try {
// //         const res = await axios.get('/api/quiz', {
// //           headers: {
// //             Authorization: `Bearer ${localStorage.getItem('token')}`,
// //           },
// //         });
// //         setQuizzes(res.data);
// //       } catch (error) {
// //         console.error(error);
// //       }
// //     };
// //     fetchQuizzes();
// //   }, []);

// //   return (
// //     <Container>
// //       <Typography variant="h4">Dashboard</Typography>
// //       <Button onClick={() => navigate('/create-quiz')} variant="contained" color="primary">
// //         Create New Quiz
// //       </Button>
// //       <List>
// //         {quizzes.map((quiz) => (
// //           <ListItem key={quiz._id}>
// //             {quiz.title}
// //             <Button onClick={() => navigate(`/take-quiz/${quiz._id}`)}>Take Quiz</Button>
// //           </ListItem>
// //         ))}
// //       </List>
// //     </Container>
// //   );
// // };

// // export default Dashboard;
// // src/components/Dashboard.js
// import React, { useEffect, useState } from 'react';
// import api from '../services/api';
// import { Container } from 'react-bootstrap';

// function Dashboard() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const response = await api.get('/api/auth/me');
//         setUser(response.data);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchUser();
//   }, []);

//   if (!user) {
//     return <Container className="mt-5">Loading...</Container>;
//   }

//   return (
//     <Container className="mt-5">
//       <h3>Welcome, {user.email}</h3>
//       {/* Add more user-specific information here */}
//     </Container>
//   );
// }

// export default Dashboard;


import React, { useEffect, useState } from 'react';
import { Container, ListGroup, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [quizzes, setQuizzes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await fetch('/api/quiz/', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        const data = await response.json();
        setQuizzes(data);
      } catch (error) {
        console.error('Error fetching quizzes:', error);
      }
    };

    fetchQuizzes();
  }, []);

  const handleDelete = async (quizId) => {
    try {
      const response = await fetch(`/api/quiz/${quizId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (response.ok) {
        setQuizzes(quizzes.filter((quiz) => quiz._id !== quizId));
      } else {
        console.error('Error deleting quiz:', response);
      }
    } catch (error) {
      console.error('Error deleting quiz:', error);
    }
  };

  return (
    <Container className="mt-5">
      <h3>My Quizzes</h3>
      <ListGroup>
        {quizzes.map((quiz) => (
          <ListGroup.Item key={quiz._id} className="d-flex justify-content-between align-items-center">
            <div>
              <h5>{quiz.title}</h5>
              <p>{quiz.description}</p>
            </div>
            <div>
              <Button variant="info" className="me-2" onClick={() => navigate(`/take-quiz/${quiz._id}`)}>
                View
              </Button>
              <Button variant="danger" onClick={() => handleDelete(quiz._id)}>
                Delete
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default Dashboard;
