import React from "react";
import { Outlet } from "react-router-dom";
import { SideBar } from "../../components/Auth/SideBar";

export const AuthLayout = () => {
  return (
    <main className="flex gap-10">
      <section>
        <SideBar />
      </section>
      <section className=" flex-1">
        <Outlet />
      </section>
    </main>
  );
};
