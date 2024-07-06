// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { Container, Typography } from '@mui/material';
// import axios from 'axios';

// const QuizResult = () => {
//   const { id } = useParams();
//   const [result, setResult] = useState(null);

//   useEffect(() => {
//     const fetchResult = async () => {
//       try {
//         const res = await axios.get(`/api/quiz/result/${id}`);
//         setResult(res.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchResult();
//   }, [id]);

//   return (
//     <Container>
//       {result && (
//         <>
//           <Typography variant="h4">Quiz Result</Typography>
//           <Typography variant="h5">Score: {result.score}</Typography>
//           <Typography variant="body1">Feedback: {result.feedback}</Typography>
//         </>
//       )}
//     </Container>
//   );
// };

// export default QuizResult;

import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, ListGroup } from 'react-bootstrap';

const QuizResult = () => {
  const location = useLocation();
  const { result } = location.state || { result: { score: 0, total: 0, correctAnswers: [] } };

  return (
    <Container className="mt-5">
      <h3>Quiz Result</h3>
      <p>
        Score: {result.score} / {result.total}
      </p>
      <ListGroup>
        {result.correctAnswers.map((answer, index) => (
          <ListGroup.Item key={index}>
            <div>
              <strong>Question {index + 1}:</strong> {answer.question}
            </div>
            <div>
              <strong>Correct Answer:</strong> {answer.correct}
            </div>
            <div>
              <strong>Your Answer:</strong> {answer.yourAnswer}
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default QuizResult;
