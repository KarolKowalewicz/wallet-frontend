import { Suspense } from "react";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
import Header from "../Header/Header";

const SharedLayout = () => {
  const activePage = ({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : "";

  return (
    <>
      <Header />
      <main>
        <nav>
          {/* <ul>
            <NavLink className={activePage} to="/home">
              Home
            </NavLink>
            <NavLink className={activePage} to="/diagram">
              Statistics
            </NavLink>
          </ul> */}
        </nav>
        <Suspense fallback={<p>Loading component...</p>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
