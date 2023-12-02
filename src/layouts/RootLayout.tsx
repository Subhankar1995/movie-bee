import { Outlet } from "react-router-dom";
import { Header } from "../components";

const RootLayout = () => {
  return (
    <div className="p-0 m-0 dark:bg-gray-900 min-h-screen">
      <Header></Header>
      <Outlet />
    </div>
  );
};

export default RootLayout;
