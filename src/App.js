
import Header from "./components/Header/Header";
import { RegisterForm } from "./components/RegisterForm/RegisterForm";

import LoginForm from "./components/LoginForm/LoginForm";
import NavBar from "./components/NavBar/NavBar"

function App() {
  return (
    <div>
      <p>tu będzie dopiero meksyk.x.x.x</p>
      <Header></Header>
      <RegisterForm />

      <LoginForm></LoginForm>
      <NavBar />  
    </div>
  );
}

export default App;

// import { Route, Routes, Navigate } from "react-router";
// import SharedLayout from "./components/SharedLayout/SharedLayout";

// function App() {
//   const isUserLoggedIn = true;
//   return (
//     <Routes>
//       <Route path="/" element={<SharedLayout />}>
//         <Route
//           index
//           element={
//             isUserLoggedIn ? (
//               <p>Home page component...</p>
//             ) : (
//               <Navigate to="/login" />
//             )
//           }
//         />
//         <Route
//           path="diagram"
//           element={
//             isUserLoggedIn ? (
//               <p>Diagram page component...</p>
//             ) : (
//               <Navigate to="/login" />
//             )
//           }
//         />
//       </Route>
//       <Route path="/login" element={<p>Login component...</p>} />
//       <Route path="/register" element={<p>Register component...</p>} />
//     </Routes>
//   );
// }


// export default App;