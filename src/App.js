// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import CreateQuiz from './components/CreateQuiz';
// import TakeQuiz from './components/TakeQuiz';
// import Dashboard from './components/Dashboard';
// import QuizList from './components/QuizList';
// import QuizResult from './components/QuizResult';
// import Home from './components/Home';
// import Navigation from './components/Navbar';
// import Login from './components/Login';
// import SignUp from './components/Signup';
// import ProtectedRoute from './components/ProtectedRoute';
// import Alert from './components/Alert'; // Assuming you have an Alert component
// import QuizLogin from './components/QuizLogin'

// function App() {
//   const [alert, setAlert] = useState(null);

//   const showAlert = (message, type) => {
//     setAlert({ message, type });
//     setTimeout(() => setAlert(null), 3000); // Alert disappears after 3 seconds
//   };

//   return (
//     <Router>
//       <Navigation />
//       <Alert alert={alert} />
//       <div className="container mt-4"> {/* Bootstrap container with margin top */}
//         <Routes>
//           <Route path="/" element={<Home />} />
//           {/* <Route path="/create-quiz" element={<ProtectedRoute element={CreateQuiz} />} />  */}
//           <Route path="/create-quiz" element={<CreateQuiz/>} /> 
//           <Route path="/take-quiz/:id" element={<ProtectedRoute element={TakeQuiz} />} />
//           <Route path="/quiz-login" element={<ProtectedRoute element={QuizLogin} />} />
//           <Route path="/dashboard" element={<ProtectedRoute element={Dashboard} />} />
//           <Route path="/quizzes" element={<ProtectedRoute element={QuizList} />} />
//           <Route path="/result/:id" element={<ProtectedRoute element={QuizResult} />} />
//           <Route path="/login" element={<Login showAlert={showAlert} />} />
//           <Route path="/signup" element={<SignUp showAlert={showAlert} />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateQuiz from './components/CreateQuiz';
import TakeQuiz from './components/TakeQuiz';
import Dashboard from './components/Dashboard';
import QuizList from './components/QuizList';
import QuizResult from './components/QuizResult';
import Home from './components/Home';
import Navigation from './components/Navbar';
import Login from './components/Login';
import SignUp from './components/Signup';
import Alert from './components/Alert'; // Assuming you have an Alert component
import QuizLogin from './components/QuizLogin';

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ message, type });
    setTimeout(() => setAlert(null), 3000); // Alert disappears after 3 seconds
  };

  return (
    <Router>
      <Navigation />
      <Alert alert={alert} />
      <div className="container mt-4"> {/* Bootstrap container with margin top */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-quiz" element={<CreateQuiz />} />
          <Route path="/take-quiz/:id" element={<TakeQuiz />} />
          <Route path="/quiz-login" element={<QuizLogin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/quizzes" element={<QuizList />} />
          <Route path="/result/:id" element={<QuizResult />} />
          <Route path="/login" element={<Login showAlert={showAlert} />} />
          <Route path="/signup" element={<SignUp showAlert={showAlert} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
