// // import React, { useState } from 'react'
// // import { useNavigate } from 'react-router-dom';


// // const Login = (props) => {
// //     const [credentials, setCredentials] = useState({ email: "", password: "" })
// //     let navigate = useNavigate();

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();
// //         const response = await fetch("http://localhost:5000/api/auth/login", {
// //             method: 'POST',
// //             headers: {
// //                 'Content-Type': 'application/json'
// //             },
// //             body: JSON.stringify({ email: credentials.email, password: credentials.password })
// //         });
// //         const json = await response.json()
// //         console.log(json);
// //         if (json.success) {
// //             // Save the auth token and redirect
// //             localStorage.setItem('token', json.authtoken);
// //             navigate("/");
// //             props.showAlert("Logged in Successfully", "success")


// //         }
// //         else {
// //             props.showAlert("Invalid details","danger")
// //         }
// //     }

// //     const onChange = (e) => {
// //         setCredentials({ ...credentials, [e.target.name]: e.target.value })
// //     }

// //     return (
// //         <div className='mt-3'>
// //             <h2 className='my-2'>Login to Continue to Mynotebook</h2>
// //             <form onSubmit={handleSubmit}>
// //                 <div className="mb-3">
// //                     <label htmlFor="email" className="form-label">Email address</label>
// //                     <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
// //                     <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
// //                 </div>
// //                 <div className="mb-3">
// //                     <label htmlFor="password" className="form-label">Password</label>
// //                     <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" />
// //                 </div>

// //                 <button type="submit" className="btn btn-primary">Submit</button>
// //             </form>
// //         </div>
// //     )
// // }

// // export default Login
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Login = (props) => {
//   const [credentials, setCredentials] = useState({ email: "", password: "" });
//   let navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await fetch("http://localhost:5000/api/auth/login", {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ email: credentials.email, password: credentials.password })
//     });
//     const json = await response.json();
//     if (json.token) {
//       localStorage.setItem('token', json.token);
//       navigate("/");
//       props.showAlert("Logged in Successfully", "success");
//     } else {
//       props.showAlert("Invalid details", "danger");
//     }
//   }

//   const onChange = (e) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value });
//   }

//   return (
//     <div className='mt-3'>
//       <h2 className='my-2'>Login to Continue</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label htmlFor="email" className="form-label">Email address</label>
//           <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="password" className="form-label">Password</label>
//           <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" />
//         </div>
//         <button type="submit" className="btn btn-primary">Submit</button>
//       </form>
//     </div>
//   )
// }

// export default Login;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';

const Login = ({ showAlert }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        navigate('/');
        showAlert('Logged in successfully', 'success');
      } else {
        const errorData = await response.json();
        showAlert(errorData.message, 'danger');
      }
    } catch (error) {
      showAlert('An error occurred while logging in', 'danger');
    }
  };

  return (
    <Container className="mt-5">
      <h3>Login</h3>
      <Form onSubmit={handleLogin}>
        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formPassword" className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
