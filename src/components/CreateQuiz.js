// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Container, Form, Button, ListGroup } from 'react-bootstrap';

// const CreateQuiz = () => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [questions, setQuestions] = useState([]);
//   const [questionText, setQuestionText] = useState('');
//   const [options, setOptions] = useState(['', '', '', '']);
//   const [correctAnswer, setCorrectAnswer] = useState('');
//   const [quizPassword, setQuizPassword] = useState('');
//   const navigate = useNavigate();

//   const generatePassword = () => {
//     const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     let password = '';
//     for (let i = 0; i < 8; i++) {
//       const randomIndex = Math.floor(Math.random() * charset.length);
//       password += charset[randomIndex];
//     }
//     setQuizPassword(password);
//   };

//   const addQuestion = () => {
//     const newQuestion = {
//       questionText,
//       options,
//       correctAnswer,
//     };
//     setQuestions([...questions, newQuestion]);
//     setQuestionText('');
//     setOptions(['', '', '', '']);
//     setCorrectAnswer('');
//   };

//   const saveQuiz = async () => {
//     const quiz = {
//       title,
//       description,
//       questions,
//       password: quizPassword,
//     };
//     try {
//       const response = await fetch('/api/quiz/create', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${localStorage.getItem('token')}`,
//         },
//         body: JSON.stringify(quiz),
//       });

//       if (response.ok) {
//         navigate('/dashboard');
//       } else {
//         const errorData = await response.json();
//         console.error('Error saving quiz:', errorData);
//       }
//     } catch (error) {
//       console.error('Error saving quiz:', error);
//     }
//   };

//   return (
//     <Container className="mt-5">
//       <div className="d-flex justify-content-between align-items-center">
//         <h3>Create Quiz</h3>
//         <div>
//           <strong>Quiz Password:</strong> {quizPassword || 'Not generated'}
//         </div>
//       </div>
//       <Button variant="secondary" onClick={generatePassword} className="mb-3">
//         Generate Quiz Password
//       </Button>
//       <Form>
//         <Form.Group controlId="formTitle" className="mb-3">
//           <Form.Label>Title</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Enter title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//           />
//         </Form.Group>

//         <Form.Group controlId="formDescription" className="mb-3">
//           <Form.Label>Description</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Enter description"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           />
//         </Form.Group>

//         <h5>Add Questions</h5>
//         <Form.Group controlId="formQuestionText" className="mb-3">
//           <Form.Label>Question Text</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Enter question text"
//             value={questionText}
//             onChange={(e) => setQuestionText(e.target.value)}
//           />
//         </Form.Group>

//         {options.map((option, index) => (
//           <Form.Group key={index} controlId={`formOption${index}`} className="mb-3">
//             <Form.Label>Option {index + 1}</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder={`Enter option ${index + 1}`}
//               value={option}
//               onChange={(e) =>
//                 setOptions(options.map((opt, idx) => (idx === index ? e.target.value : opt)))
//               }
//             />
//           </Form.Group>
//         ))}

//         <Form.Group controlId="formCorrectAnswer" className="mb-3">
//           <Form.Label>Correct Answer</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Enter correct answer"
//             value={correctAnswer}
//             onChange={(e) => setCorrectAnswer(e.target.value)}
//           />
//         </Form.Group>

//         <Button variant="primary" onClick={addQuestion} className="me-2">
//           Add Question
//         </Button>
//         <Button variant="success" onClick={saveQuiz}>
//           Save Quiz
//         </Button>
//       </Form>

//       <ListGroup className="mt-4">
//         {questions.map((q, index) => (
//           <ListGroup.Item key={index} className="mb-3">
//             <div>
//               <strong>Question {index + 1}:</strong> {q.questionText}
//             </div>
//             <ul>
//               {q.options.map((option, idx) => (
//                 <li key={idx}>{option}</li>
//               ))}
//             </ul>
//             <div>
//               <strong>Correct Answer:</strong> {q.correctAnswer}
//             </div>
//           </ListGroup.Item>
//         ))}
//       </ListGroup>
//     </Container>
//   );
// };

// export default CreateQuiz;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Container, Form, Button, ListGroup, Image } from 'react-bootstrap';
// import axios from 'axios';

// const CreateQuiz = () => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [questions, setQuestions] = useState([]);
//   const [questionText, setQuestionText] = useState('');
//   const [options, setOptions] = useState(['', '', '', '']);
//   const [correctAnswer, setCorrectAnswer] = useState('');
//   const [quizPassword, setQuizPassword] = useState('');
//   const [questionImage, setQuestionImage] = useState(null);
//   const [optionImages, setOptionImages] = useState([null, null, null, null]);
//   const navigate = useNavigate();

//   const generatePassword = () => {
//     const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     let password = '';
//     for (let i = 0; i < 8; i++) {
//       const randomIndex = Math.floor(Math.random() * charset.length);
//       password += charset[randomIndex];
//     }
//     setQuizPassword(password);
//   };

//   const handleImageUpload = async (imageFile, index, type) => {
//     const formData = new FormData();
//     formData.append('image', imageFile);

//     try {
//       const response = await axios.post('/api/quiz/upload', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//           Authorization: `Bearer ${localStorage.getItem('token')}`,
//         },
//       });
//       const imagePath = response.data.filePath;

//       if (type === 'question') {
//         setQuestionImage(imagePath);
//       } else {
//         setOptionImages(prevImages => {
//           const newImages = [...prevImages];
//           newImages[index] = imagePath;
//           return newImages;
//         });
//       }
//     } catch (error) {
//       console.error('Error uploading image:', error);
//     }
//   };

//   const addQuestion = () => {
//     const newQuestion = {
//       questionText,
//       options,
//       correctAnswer,
//       questionImage,
//       optionImages,
//     };
//     setQuestions([...questions, newQuestion]);
//     setQuestionText('');
//     setOptions(['', '', '', '']);
//     setCorrectAnswer('');
//     setQuestionImage(null);
//     setOptionImages([null, null, null, null]);
//   };

//   const saveQuiz = async () => {
//     const quiz = {
//       title,
//       description,
//       questions,
//       password: quizPassword,
//     };

//     try {
//       const response = await fetch('http://localhost:5000/api/quiz/create', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${localStorage.getItem('token')}`,
//         },
//         body: JSON.stringify(quiz),
//       });

//       if (response.ok) {
//         navigate('/dashboard');
//       } else {
//         const errorData = await response.json();
//         console.error('Error saving quiz:', errorData);
//       }
//     } catch (error) {
//       console.error('Error saving quiz:', error);
//     }
//   };

//   return (
//     <Container className="mt-5">
//       <div className="d-flex justify-content-between align-items-center">
//         <h3>Create Quiz</h3>
//         <div>
//           <strong>Quiz Password:</strong> {quizPassword || 'Not generated'}
//         </div>
//       </div>
//       <Button variant="secondary" onClick={generatePassword} className="mb-3">
//         Generate Quiz Password
//       </Button>
//       <Form>
//         <Form.Group controlId="formTitle" className="mb-3">
//           <Form.Label>Title</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Enter title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//           />
//         </Form.Group>

//         <Form.Group controlId="formDescription" className="mb-3">
//           <Form.Label>Description</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Enter description"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           />
//         </Form.Group>

//         <h5>Add Questions</h5>
//         <Form.Group controlId="formQuestionText" className="mb-3">
//           <Form.Label>Question Text</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Enter question text"
//             value={questionText}
//             onChange={(e) => setQuestionText(e.target.value)}
//           />
//         </Form.Group>

//         {questionImage && (
//           <div className="mb-3 position-relative">
//             <Image src={questionImage} rounded />
//             <Button
//               variant="secondary"
//               className="position-absolute top-0 end-0 m-2"
//               onClick={() => setQuestionImage(null)}
//             >
//               Remove Image
//             </Button>
//           </div>
//         )}
//         <Form.Group controlId="formQuestionImage" className="mb-3">
//           <Form.Label>Upload Question Image</Form.Label>
//           <Form.Control
//             type="file"
//             onChange={(e) => handleImageUpload(e.target.files[0], null, 'question')}
//           />
//         </Form.Group>

//         {options.map((option, index) => (
//           <div key={index} className="mb-3">
//             <Form.Group controlId={`formOption${index}`}>
//               <Form.Label>Option {index + 1}</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder={`Enter option ${index + 1}`}
//                 value={option}
//                 onChange={(e) =>
//                   setOptions(options.map((opt, idx) => (idx === index ? e.target.value : opt)))
//                 }
//               />
//             </Form.Group>
//             {optionImages[index] && (
//               <div className="position-relative">
//                 <Image src={optionImages[index]} rounded />
//                 <Button
//                   variant="secondary"
//                   className="position-absolute top-0 end-0 m-2"
//                   onClick={() => setOptionImages(optionImages.map((img, idx) => (idx === index ? null : img)))}
//                 >
//                   Remove Image
//                 </Button>
//               </div>
//             )}
//             <Form.Group controlId={`formOptionImage${index}`} className="mb-3">
//               <Form.Label>Upload Option {index + 1} Image</Form.Label>
//               <Form.Control
//                 type="file"
//                 onChange={(e) => handleImageUpload(e.target.files[0], index, 'option')}
//               />
//             </Form.Group>
//           </div>
//         ))}

//         <Form.Group controlId="formCorrectAnswer" className="mb-3">
//           <Form.Label>Correct Answer</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Enter correct answer"
//             value={correctAnswer}
//             onChange={(e) => setCorrectAnswer(e.target.value)}
//           />
//         </Form.Group>

//         <Button variant="primary" onClick={addQuestion} className="me-2">
//           Add Question
//         </Button>
//         <Button variant="success" onClick={saveQuiz}>
//           Save Quiz
//         </Button>
//       </Form>

//       <ListGroup className="mt-4">
//         {questions.map((q, index) => (
//           <ListGroup.Item key={index} className="mb-3">
//             <div>
//               <strong>Question {index + 1}:</strong> {q.questionText}
//               {q.questionImage && <Image src={q.questionImage} rounded className="mt-2" />}
//             </div>
//             <ul>
//               {q.options.map((option, idx) => (
//                 <li key={idx}>
//                   {option}
//                   {q.optionImages[idx] && <Image src={q.optionImages[idx]} rounded className="ms-2" />}
//                 </li>
//               ))}
//             </ul>
//             <div>
//               <strong>Correct Answer:</strong> {q.correctAnswer}
//             </div>
//           </ListGroup.Item>
//         ))}
//       </ListGroup>
//     </Container>
//   );
// };

// export default CreateQuiz;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, ListGroup, Image } from 'react-bootstrap';

const CreateQuiz = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [questions, setQuestions] = useState([]);
  const [questionText, setQuestionText] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [quizPassword, setQuizPassword] = useState('');
  const [questionImage, setQuestionImage] = useState(null);
  const [optionImages, setOptionImages] = useState([null, null, null, null]);
  const navigate = useNavigate();

  const generatePassword = () => {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let password = '';
    for (let i = 0; i < 8; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    setQuizPassword(password);
  };

  const handleImageUpload = async (imageFile, index, type) => {
    const formData = new FormData();
    formData.append('image', imageFile);

    try {
      const response = await fetch('/api/quiz/upload', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: formData,
      });
      const data = await response.json();
      const imagePath = data.filePath;

      if (type === 'question') {
        setQuestionImage(imagePath);
      } else {
        setOptionImages((prevImages) => {
          const newImages = [...prevImages];
          newImages[index] = imagePath;
          return newImages;
        });
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const addQuestion = () => {
    const newQuestion = {
      questionText,
      options,
      correctAnswer,
      questionImage,
      optionImages,
    };
    setQuestions([...questions, newQuestion]);
    setQuestionText('');
    setOptions(['', '', '', '']);
    setCorrectAnswer('');
    setQuestionImage(null);
    setOptionImages([null, null, null, null]);
  };

  const saveQuiz = async () => {
    const quiz = {
      title,
      description,
      questions,
      password: quizPassword,
    };

    try {
      const response = await fetch('/api/quiz/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(quiz),
      });

      if (response.ok) {
        navigate('/dashboard');
      } else {
        console.error('Error saving quiz:', response);
      }
    } catch (error) {
      console.error('Error saving quiz:', error);
    }
  };

  return (
    <Container className="mt-5">
      <div className="d-flex justify-content-between align-items-center">
        <h3>Create Quiz</h3>
        <div>
          <strong>Quiz Password:</strong> {quizPassword || 'Not generated'}
        </div>
      </div>
      <Button variant="secondary" onClick={generatePassword} className="mb-3">
        Generate Quiz Password
      </Button>
      <Form>
        <Form.Group controlId="formTitle" className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formDescription" className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <h5>Add Questions</h5>
        <Form.Group controlId="formQuestionText" className="mb-3">
          <Form.Label>Question Text</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter question text"
            value={questionText}
            onChange={(e) => setQuestionText(e.target.value)}
          />
        </Form.Group>

        {questionImage && (
          <div className="mb-3 position-relative">
            <Image src={questionImage} rounded />
            <Button
              variant="secondary"
              className="position-absolute top-0 end-0 m-2"
              onClick={() => setQuestionImage(null)}
            >
              Remove Image
            </Button>
          </div>
        )}
        <Form.Group controlId="formQuestionImage" className="mb-3">
          <Form.Label>Upload Question Image</Form.Label>
          <Form.Control
            type="file"
            onChange={(e) => handleImageUpload(e.target.files[0], null, 'question')}
          />
        </Form.Group>

        {options.map((option, index) => (
          <div key={index} className="mb-3">
            <Form.Group controlId={`formOption${index}`}>
              <Form.Label>Option {index + 1}</Form.Label>
              <Form.Control
                type="text"
                placeholder={`Enter option ${index + 1}`}
                value={option}
                onChange={(e) =>
                  setOptions(options.map((opt, idx) => (idx === index ? e.target.value : opt)))
                }
              />
            </Form.Group>
            {optionImages[index] && (
              <div className="position-relative">
                <Image src={optionImages[index]} rounded />
                <Button
                  variant="secondary"
                  className="position-absolute top-0 end-0 m-2"
                  onClick={() => setOptionImages(optionImages.map((img, idx) => (idx === index ? null : img)))}
                >
                  Remove Image
                </Button>
              </div>
            )}
            <Form.Group controlId={`formOptionImage${index}`} className="mb-3">
              <Form.Label>Upload Option {index + 1} Image</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => handleImageUpload(e.target.files[0], index, 'option')}
              />
            </Form.Group>
          </div>
        ))}

        <Form.Group controlId="formCorrectAnswer" className="mb-3">
          <Form.Label>Correct Answer</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter correct answer"
            value={correctAnswer}
            onChange={(e) => setCorrectAnswer(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" onClick={addQuestion} className="me-2">
          Add Question
        </Button>
        <Button variant="success" onClick={saveQuiz}>
          Save Quiz
        </Button>
      </Form>

      <ListGroup className="mt-4">
        {questions.map((q, index) => (
          <ListGroup.Item key={index} className="mb-3">
            <div>
              <strong>Question {index + 1}:</strong> {q.questionText}
              {q.questionImage && <Image src={q.questionImage} thumbnail className="ms-2" />}
            </div>
            <ul>
              {q.options.map((option, idx) => (
                <li key={idx}>
                  {option} {q.optionImages[idx] && <Image src={q.optionImages[idx]} thumbnail />}
                </li>
              ))}
            </ul>
            <div>
              <strong>Correct Answer:</strong> {q.correctAnswer}
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default CreateQuiz;

