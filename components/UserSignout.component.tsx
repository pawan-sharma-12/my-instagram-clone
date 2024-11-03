// components/UserSignout.js
"use client";  // This makes sure it's a client component

import { signOut } from "next-auth/react";
import React from "react";

const UserSignout = () => {
  return (
   
    <form
    action={async () => {
      await signOut();
    }}
  >
    <button className="text-white bg-ig-red px-4 py-2 rounded-lg" type="submit" >Logout</button>
  </form>
  );
};

export default UserSignout;
