import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-[100vh]">
      <main className="min-h-screen bg-gray-200 lg:px-[20px] lg:py-[70px] py-16 px-2">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
