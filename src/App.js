import { lazy } from "react";
import { Route, Routes, Navigate } from "react-router";
import SharedLayout from "./components/SharedLayout/SharedLayout";

// const Home = lazy(() => import("./path/to/home/component"));
// const Diagram = lazy(() => import("./path/to/diagram/component"));
const Login = lazy(() => import("./pages/Login"));
// const Register = lazy(() => import("./path/to/home/component"));

function App() {
  const isUserLoggedIn = true;
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          index
          element={
            isUserLoggedIn ? (
              <p>Home page component...</p>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="diagram"
          element={
            isUserLoggedIn ? (
              <p>Diagram page component...</p>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Route>
      <Route path="/login" element={
        <Login />
      } />
      <Route path="/register" element={<p>Register component...</p>} />
    </Routes>
  );
}

export default App;
// import Header from "./components/Header/Header";
// import { RegisterForm } from "./components/RegisterForm/RegisterForm";

// import LoginForm from "./components/LoginForm/LoginForm";


// function App() {
//   return (
//     <div>
//         <Header></Header>
//         <RegisterForm />
//         <LoginForm>
//         </LoginForm>

//     </div>
//   );
// }

// export default App;

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