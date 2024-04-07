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
import { Toaster } from "sonner";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import { useDispatch, useSelector } from "react-redux";
import { useState, useRef,Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { IoClose } from "react-icons/io5";

function Layout() {
  const user = {
    name: "rajeev",
    id: 1,
    email: "rajeev@123",
    passwd: "1234",
  };
  const location = useLocation();
  return user ? (
    <div className="w-full h-screen flex flex-col md:flex-row">
      <div className="w-1/5 h-screen bg-white sticky top-0 hidden md:block">
        <Sidebar />
      </div>
      <MobileSidebar />

      <div className="flex-1 overflow-y-auto">
        <Navbar />
        <div className="p-4 2xl:px-10">
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    <Navigate to={"/login-page"} state={{ from: location }} replace />
  );
}

const MobileSidebar = () => {
  const { isSidebarOpen } = useSelector((state) => state.auth);
  const mobileMenuRef = useRef(null);
  const dispatch = useDispatch();

  const closeSidebar = () => {
    dispatch(setOpenSidebar(false));
  };

  return (
    <>
      <Transition
        show={isSidebarOpen}
        as={Fragment}
        enter="transition-opacity duration-700"
        enterFrom="opacity-x-10"
        enterTo="opacity-x-100"
        leave="transition-opacity duration-700"
        leaveFrom="opacity-x-100"
        leaveTo="opacity-x-0"
      >
        {(ref) => (
          <div
            ref={(node) => (mobileMenuRef.current = node)}
            className={clsx(
              "md:hidden w-full h-full bg-black/40 transition-all duration-700 transform ",
              isSidebarOpen ? "translate-x-0" : "translate-x-full"
            )}
            onClick={() => closeSidebar()}
          >
            <div className="bg-white w-3/4 h-full">
              <div className="w-full flex justify-end px-5 mt-5">
                <button
                  onClick={() => closeSidebar()}
                  className="flex justify-end items-end"
                >
                  <IoClose size={25} />
                </button>
              </div>

              <div className="-mt-10">
                <Sidebar />
              </div>
            </div>
          </div>
        )}
      </Transition>
    </>
  );
};

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
