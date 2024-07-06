// // // src/components/Navbar.js
// // import React, { useState, useEffect } from 'react';
// // import { Link } from 'react-router-dom';
// // import { Navbar, Nav, Container } from 'react-bootstrap';

// // function Navigation() {
// //   const [isAuthenticated, setIsAuthenticated] = useState(false);

// //   useEffect(() => {
// //     const token = localStorage.getItem('token');
// //     setIsAuthenticated(!!token); // Check if token exists
// //   }, []);

// //   const handleLogout = () => {
// //     localStorage.removeItem('token');
// //     setIsAuthenticated(false);
// //   };

// //   return (
// //     <Navbar bg="light" expand="lg">
// //       <Container>
// //         <Navbar.Brand as={Link} to="/">Quiz Platform</Navbar.Brand>
// //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
// //         <Navbar.Collapse id="basic-navbar-nav">
// //           <Nav className="me-auto">
// //             <Nav.Link as={Link} to="/">Home</Nav.Link>
// //             {isAuthenticated && (
// //               <>
// //                 <Nav.Link as={Link} to="/create-quiz">Create Quiz</Nav.Link>
// //                 <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
// //                 <Nav.Link as={Link} to="/quizzes">Quizzes</Nav.Link>
// //               </>
// //             )}
// //           </Nav>
// //           <Nav>
// //             {isAuthenticated ? (
// //               <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
// //             ) : (
// //               <>
// //                 <Nav.Link as={Link} to="/login">Login</Nav.Link>
// //                 <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
// //               </>
// //             )}
// //           </Nav>
// //         </Navbar.Collapse>
// //       </Container>
// //     </Navbar>
// //   );
// // }

// // export default Navigation;
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { Navbar, Nav, Container } from 'react-bootstrap';

// function Navigation() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     setIsAuthenticated(!!token);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     setIsAuthenticated(false);
//   };

//   return (
//     <Navbar bg="light" expand="lg">
//       <Container>
//         <Navbar.Brand as={Link} to="/">Quiz Platform</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link as={Link} to="/">Home</Nav.Link>
//             {isAuthenticated && (
//               <>
//                 <Nav.Link as={Link} to="/create-quiz">Create Quiz</Nav.Link>
//                 <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
//                 <Nav.Link as={Link} to="/quizzes">Quizzes</Nav.Link>
//               </>
//             )}
//           </Nav>
//           <Nav>
//             {isAuthenticated ? (
//               <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
//             ) : (
//               <>
//                 <Nav.Link as={Link} to="/login">Login</Nav.Link>
//                 <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
//               </>
//             )}
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default Navigation;

import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Quiz Platform
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/create-quiz">
              Create Quiz
            </Nav.Link>
            <Nav.Link as={Link} to="/dashboard">
              Dashboard
            </Nav.Link>
            <Nav.Link as={Link} to="/quizzes">
              All Quizzes
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/signup">
              Sign Up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
