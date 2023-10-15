import styles from "./SharedLayout.module.scss";
import { Suspense } from "react";
import { Outlet } from "react-router";
import Header from "../Header/Header";
import SideBar from "../Sidebar/SideBar";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <SideBar />
        <Suspense fallback={<p>Loading component...</p>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
