import React, { useState, useEffect } from "react";

export default function Login(props) {
  var onLogin = props.onLogin;

  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");
  var [remember, setRemember] = useState(true);
  var [error, setError] = useState("");

  // optional: prefill last user
  useEffect(function () {
    try {
      var stored = window.localStorage.getItem("estimatorUserEmail");
      if (stored) {
        setEmail(stored);
      }
    } catch (e) {}
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    // ✏️ CHANGE THESE to whatever you like
    var validEmail = "sales@wardrobe.local";
    var validPassword = "wardrobe123";

    if (email === validEmail && password === validPassword) {
      if (remember) {
        try {
          window.localStorage.setItem("estimatorLoggedIn", "1");
          window.localStorage.setItem("estimatorUserEmail", email);
        } catch (err) {}
      }
      onLogin({ email: email });
    } else {
      setError("Invalid email or password.");
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl bg-white border border-slate-200 shadow-sm p-6 sm:p-8">
        <h1 className="text-2xl font-bold text-slate-900 text-center">
          Wardrobe Estimator
        </h1>
        <p className="mt-2 text-xs text-slate-500 text-center">
          Login to access the internal cost estimator.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={function (e) {
                setEmail(e.target.value);
              }}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={function (e) {
                setPassword(e.target.value);
              }}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="••••••••"
            />
          </div>

          <div className="flex items-center justify-between text-xs">
            <label className="inline-flex items-center gap-2 text-slate-700">
              <input
                type="checkbox"
                checked={remember}
                onChange={function (e) {
                  setRemember(e.target.checked);
                }}
                className="h-3 w-3 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
              />
              <span>Remember me on this device</span>
            </label>
          </div>

          {error && (
            <p className="text-xs text-rose-600 bg-rose-50 border border-rose-100 rounded-lg px-3 py-2">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full rounded-lg bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-[11px] text-slate-400 text-center">
          For internal use only. Do not share outside the organisation.
        </p>
      </div>
    </div>
  );
}

