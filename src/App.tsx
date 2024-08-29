import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserDashboard from "./pages/internal-page/user-dashboard";
import Profile from "./pages/internal-page/profile";
import Dashboard from "./components/Dashboard/Dashboard";
import AirtimeToCash from "./pages/internal-page/airtime-to-cash";
import TransactionHistory from "./pages/internal-page/transaction-history";
import HelpAndSupport from "./pages/internal-page/help-and-support";
import { AuthLayout } from "./pages/auth/auth-layout";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import { AuthProvider } from "./context/authContext";
import { User } from "./protect/user";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <div>
            <Routes>
              <Route element={<AuthLayout />}>
                <Route path="/login" element={<Login />} />
                <Route path="/sign-up" element={<Signup />} />
              </Route>

              <Route element={<User />}>
                <Route path="/dashboard" element={<UserDashboard />}>
                  <Route index element={<Dashboard />} />
                  <Route path="/dashboard/profile" element={<Profile />} />
                  <Route
                    path="/dashboard/airtime-to-cash"
                    element={<AirtimeToCash />}
                  />
                  <Route
                    path="/dashboard/transaction-history"
                    element={<TransactionHistory />}
                  />
                  <Route path="/dashboard/help" element={<HelpAndSupport />} />
                </Route>
              </Route>
            </Routes>
          </div>
        </Router>{" "}
      </AuthProvider>
    </>
  );
}

export default App;
