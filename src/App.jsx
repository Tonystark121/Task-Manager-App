import React from "react";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import { Routes, Route, Navigate, useLocation, Outlet } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Trash from "./pages/trash";
import Task from "./pages/task";
import TaskDetails from "./pages/taskdetails";
import Users from "./pages/users";
import Team from "./pages/team";
import {Toaster} from "sonner";

function Layout() {
  const user = "";
  const location = useLocation();
  return user ? (
    <div className="w-full h-screen flex flex-col md:flex-row">
      <div className="w-1/5 h-screen bg-white sticky top-0 hidden md:block">
        {/* <Sidebar /> */}
      </div>
        {/* <MobileSidebar /> */}

        <div className="flex-1 overflow-y-auto">
          {/* <Navbar /> */}
          <div className="p-4 2xl:px-10">
            <Outlet />
          </div>
        </div>
    </div>
  ) : (
    <Navigate to={"/login-page"} state={{ from: location }} replace />
  );
}

function App() {
  return (
    <>
      <main className="w-full min-h-screen bg-[#f3f4f6]">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Navigate to={"/dashboard"} />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/task" element={<Task />} />
            <Route path="/team" element={<Team />} />
            <Route path="/completed/:Status" element={<Task />} />
            <Route path="/in-progress/:status" element={<Task />} />
            <Route path="/todo/:status" element={<Task />} />
            <Route path="/users" element={<Users />} />
            <Route path="/trahsed" element={<Trash />} />
            <Route path="/task/:details" element={<TaskDetails />} />
          </Route>
          <Route path="/login-page" element={<Login />} />
          <Route path="/signup-page" element={<SignUp />} />
        </Routes>

        <Toaster richColors />
      </main>
    </>
  );
}

export default App;
