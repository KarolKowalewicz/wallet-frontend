import { lazy } from "react";
import { Route, Routes, Navigate } from "react-router";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import HomePage from "./pages/HomePage/HomePage";
import Register from "./pages/Register/Register";

// const Home = lazy(() => import("./path/to/home/component"));
// const Diagram = lazy(() => import("./path/to/diagram/component"));
const Login = lazy(() => import("./pages/Login"));
// const Register = lazy(() => import("./pages/Register/Register"));

function App() {
  const isUserLoggedIn = false;
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          index
          element={
            isUserLoggedIn ? (
              <div>
                <p>Home page component...</p>;
                <HomePage />
              </div>
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
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
// function App() {
//   const isUserLoggedIn = false;
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
//       <Route path="/login" element={
//             isUserLoggedIn ? (
//               <p>Login page component...</p>
//             ) : (
//               <Navigate to="/login" />
//             )} />
//       <Route path="/register" element={<p>Register component...</p>} />
//     </Routes>
//   );
// }

// export default App;
