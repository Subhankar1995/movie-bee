import { Outlet } from "react-router-dom";
import { Header } from "../components";

const RootLayout = () => {
  return (
    <>
      <Header></Header>
      <Outlet />
    </>
  );
};

export default RootLayout;
