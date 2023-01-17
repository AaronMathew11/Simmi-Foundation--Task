import React from "react";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import "../css/Profile.css";

function Profile() {
  return (
    <div className='profile'>
      {/* sidebar-- links contact hobbies etc */}

      {/* exp */}
      {/* scores */}
      <Header />
      <div className='body'>
        <Sidebar />
        <Experience />
      </div>
    </div>
  );
}

export default Profile;
