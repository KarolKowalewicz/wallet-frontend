import styles from "./SideBar.module.scss";
import React from "react";
import Media from "react-media";
import { useLocation } from "react-router";
import Balance from "../Balance/Balance";
import Loader from "../Lodaer/Loader";
import NavBar from "../NavBar/NavBar";
import Exchange from "../Exchange/Exchange";
import transactionsApiSlice from "../../redux/slices/api/transactions/transactionsApiSlice";

const SideBar = () => {
  const location = useLocation();
  const { data, isLoading } = transactionsApiSlice.useGetTransactionsQuery();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarFlex}>
        <NavBar />
        {location.pathname === "/exchange" ? null : (
          <Balance balance={data?.statistics?.balance} isLoading={isLoading} />
        )}
      </div>
      <Media query="(min-width: 768px)">
        {(matches) => (matches ? <Exchange /> : null)}
      </Media>
    </div>
  );
};

export default SideBar;
