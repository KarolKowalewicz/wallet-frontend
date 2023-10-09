import { lazy } from "react";
import { Route, Routes, Navigate } from "react-router";
import authApiSlice from "./redux/slices/api/auth/authApiSlice";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

import StatisticsPage from "./pages/StatisticsPage/StatisticsPage";


const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
// const Diagram = lazy(() => import("./path/to/diagram/component"));
// const Login = lazy(() => import("./pages/Login/Login"));
// const Register = lazy(() => import("./pages/Register/Register"));

function App() {
  // const isUserLoggedIn = false;

  //checking if user is logged in based on token saved in local storage
  const { data, isLoading } = authApiSlice.useCurrentQuery();
  // const isUserLoggedIn = !!data?.user?.token;
  const isUserLoggedIn = true;

  if (isLoading) {
    //TODO: display loading spinner instead of plain text
    return <p>Loading...</p>;
  }

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          index
          element={isUserLoggedIn ? <HomePage /> : <Navigate to="/login" />}
        />
        <Route
          path="diagram"
          element={
            data?.user?.token ? <Diagram /> : <Navigate to="/login" />
          }
        />
      </Route>
      <Route
        path="/login"
        element={!data?.user?.token ? <Login /> : <Navigate to="/" />}
      />
      <Route
        path="/register"
        element={!data?.user?.token ? <Register /> : <Navigate to="/" />}
      />
      <Route path="/statistic" element={<StatisticsPage />} />
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
