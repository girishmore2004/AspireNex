// // src/components/Auth.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Form, Button, Container } from 'react-bootstrap';
// import axios from 'axios';

// function Auth() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isSignup, setIsSignup] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const endpoint = isSignup ? '/api/auth/signup' : '/api/auth/login';
//     try {
//       const response = await axios.post(endpoint, { email, password });
//       localStorage.setItem('token', response.data.token);
//       navigate('/dashboard');
//     } catch (err) {
//       console.error(err);
//       alert('Error logging in or signing up');
//     }
//   };

//   return (
//     <Container className="mt-5">
//       <h3>{isSignup ? 'Sign Up' : 'Login'}</h3>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group controlId="formBasicEmail">
//           <Form.Label>Email address</Form.Label>
//           <Form.Control
//             type="email"
//             placeholder="Enter email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </Form.Group>

//         <Form.Group controlId="formBasicPassword" className="mt-3">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </Form.Group>

//         <Button variant="primary" type="submit" className="mt-3">
//           {isSignup ? 'Sign Up' : 'Login'}
//         </Button>
//       </Form>
//       <Button variant="link" onClick={() => setIsSignup(!isSignup)} className="mt-3">
//         {isSignup ? 'Already have an account? Login' : 'Don’t have an account? Sign Up'}
//       </Button>
//     </Container>
//   );
// }

// export default Auth;
// src/components/Auth.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';

function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isSignup ? '/api/auth/signup' : '/api/auth/login';
    try {
      const response = await axios.post(endpoint, { email, password });
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard');
    } catch (err) {
      console.error(err);
      alert('Error logging in or signing up');
    }
  };

  return (
    <Container className="mt-5">
      <h3>{isSignup ? 'Sign Up' : 'Login'}</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword" className="mt-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          {isSignup ? 'Sign Up' : 'Login'}
        </Button>
      </Form>
      <Button variant="link" onClick={() => setIsSignup(!isSignup)} className="mt-3">
        {isSignup ? 'Already have an account? Login' : 'Don’t have an account? Sign Up'}
      </Button>
    </Container>
  );
}

export default Auth;
