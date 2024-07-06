// // import React, { useState } from 'react'
// // import { useNavigate } from 'react-router-dom';

// // const Signup = (props) => {
// //     const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })
// //     let navigate = useNavigate();
// //     const handleSubmit = async (e) => {
// //         e.preventDefault();
// //         const { name, email, password } = credentials;
// //         const response = await fetch("http://localhost:5000/api/auth/signup", {

// //             method: 'POST',
// //             headers: {
// //                 'Content-Type': 'application/json'
// //             },
// //             body: JSON.stringify({ name, email, password })
// //         });
// //         const json = await response.json()
// //         console.log(json);
// //         if (json.success) {
// //             // Save the auth token and redirect
// //             localStorage.setItem('token', json.authtoken);

// //             navigate("/");
// //             props.showAlert("Account Created Successfully","success")
// //         }
// //         else {
// //            props.showAlert("Invalid Credentials","danger")
// //         }
// //     }

// //     const onChange = (e) => {
// //         setCredentials({ ...credentials, [e.target.name]: e.target.value })
// //     }

// //     return (

// //         <div className="container mt-3">
// //             <h2 className='my-2'>Create an account to use Mynotebook</h2>
// //             <form onSubmit={handleSubmit}>
// //                 <div className="mb-3">
// //                     <label htmlFor="name" className="form-label">Name</label>
// //                     <input type="text" className="form-control" id="name" name="name" onChange={onChange} aria-describedby="emailHelp" />

// //                 </div>
// //                 <div className="mb-3">
// //                     <label htmlFor="email" className="form-label">Email address</label>
// //                     <input type="email" className="form-control" id="email" name="email" onChange={onChange} aria-describedby="emailHelp" />
// //                     <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
// //                 </div>
// //                 <div className="mb-3">
// //                     <label htmlFor="password" className="form-label">Password</label>
// //                     <input type="password" className="form-control" id="password" name="password" onChange={onChange} minLength={5} required />
// //                 </div>
// //                 <div className="mb-3">
// //                     <label htmlFor="cpassword" className="form-label">Confirm Password</label>
// //                     <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={onChange} minLength={5} required />
// //                 </div>

// //                 <button type="submit" className="btn btn-primary">Submit</button>
// //             </form>
// //         </div>
// //     )
// // }

// // export default Signup
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Signup = ({ showAlert }) => {
//   const [credentials, setCredentials] = useState({ name: "", email: "", password: "", mobile: "" });
//   let navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { name, email, password, mobile } = credentials;
//     try {
//       const response = await fetch("http://localhost:5000/api/auth/signup", {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ name, email, password, mobile })
//       });

//       const json = await response.json();

//       if (response.ok) {
//         localStorage.setItem('token', json.token);
//         navigate("/");
//         showAlert("Account Created Successfully", "success");
//       } else {
//         showAlert(json.error || "Invalid Credentials", "danger");
//       }
//     } catch (error) {
//       showAlert("Server error", "danger");
//     }
//   };

//   const onChange = (e) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="container mt-3">
//       <h2 className='my-2'>Create an account</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label htmlFor="name" className="form-label">Name</label>
//           <input type="text" className="form-control" id="name" name="name" onChange={onChange} required />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="email" className="form-label">Email address</label>
//           <input type="email" className="form-control" id="email" name="email" onChange={onChange} required />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="password" className="form-label">Password</label>
//           <input type="password" className="form-control" id="password" name="password" onChange={onChange} minLength={5} required />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="mobile" className="form-label">Mobile</label>
//           <input type="text" className="form-control" id="mobile" name="mobile" onChange={onChange} required />
//         </div>
//         <button type="submit" className="btn btn-primary">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Signup;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';

const Signup = ({ showAlert }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      showAlert('Passwords do not match', 'danger');
      return;
    }

    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
        navigate('/login');
        showAlert('Account created successfully', 'success');
      } else {
        const errorData = await response.json();
        showAlert(errorData.message, 'danger');
      }
    } catch (error) {
      showAlert('An error occurred while signing up', 'danger');
    }
  };

  return (
    <Container className="mt-5">
      <h3>Sign Up</h3>
      <Form onSubmit={handleSignUp}>
      <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

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

        <Form.Group controlId="formConfirmPassword" className="mb-3">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
    </Container>
  );
};

export default Signup;
