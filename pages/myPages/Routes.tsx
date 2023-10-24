import { useAddress } from "@thirdweb-dev/react";
import { BrowserRouter, Route, Routes as R } from "react-router-dom";
import { HomePage } from "./HomePage";
import LoginPage from "./LoginPage";
import {router} from "next/client";
// import CreateClubPage from "../../pages/CreateClubPage";
// import AllClubPage from "../../pages/AllClubPage";
// import MyClubPage from "../../pages/MyClubPage";
import DashboardPage from "./DashboardPage";

const ROUTES = {
  LOGIN: "/login",
  SIGN_UP: "/signup",
  PROFILE: "/profile",
  HOME_PAGE: "/",
  DASHBOARD_PAGE: "/dashboard",
  My_CLUB_PAGE: "/myclub",
  ALL_CLUB_PAGE: "/allclubs",
  CREATE_CLUB_PAGE: "/createclub",
  NOT_FOUND: "*",
};

const Routes = () => {
  const address = useAddress();

  return (
    <BrowserRouter>
      {address && <HomePage />}
      <R>
        {!address ? (
          <Route path={ROUTES.LOGIN} element={<LoginPage />} />
        ) : (
          <>
            <Route path={ROUTES.DASHBOARD_PAGE} element={<DashboardPage />} />
            {/* <Route
              path={ROUTES.CREATE_CLUB_PAGE}
              element={<CreateClubPage />}
            />
            <Route path={ROUTES.ALL_CLUB_PAGE} element={<AllClubPage />} />
            <Route path={ROUTES.My_CLUB_PAGE} element={<MyClubPage />} /> */}
          </>
        )}
        <Route path={ROUTES.NOT_FOUND} element={<LoginPage />} />
      </R>
    </BrowserRouter>
  );
};

export default Routes;
