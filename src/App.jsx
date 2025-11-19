import React, { useState, useEffect } from "react";
import Estimator from "./components/Estimator";
import Login from "./components/Login";

export default function App() {
  var [loggedIn, setLoggedIn] = useState(false);
  var [user, setUser] = useState(null);

  useEffect(function () {
    try {
      var flag = window.localStorage.getItem("estimatorLoggedIn");
      var email = window.localStorage.getItem("estimatorUserEmail");
      if (flag === "1" && email) {
        setLoggedIn(true);
        setUser({ email: email });
      }
    } catch (e) {}
  }, []);

  function handleLogin(userInfo) {
    setLoggedIn(true);
    setUser(userInfo);
  }

  function handleLogout() {
    try {
      window.localStorage.removeItem("estimatorLoggedIn");
    } catch (e) {}
    setLoggedIn(false);
    setUser(null);
  }

  if (!loggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* top bar with logout */}
      <div className="w-full bg-slate-900 text-slate-50 py-2 px-4 flex items-center justify-between text-xs">
        <div className="font-semibold">Wardrobe Estimator</div>
        <div className="flex items-center gap-3">
          {user && (
            <span className="text-slate-300">
              Logged in as {user.email}
            </span>
          )}
          <button
            type="button"
            onClick={handleLogout}
            className="rounded-md border border-slate-500 px-2 py-1 text-[11px] hover:bg-slate-800"
          >
            Logout
          </button>
        </div>
      </div>

      {/* actual estimator app */}
      <Estimator />
    </div>
  );
}

