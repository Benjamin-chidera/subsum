import { createContext, ReactNode, useContext } from "react";

type authProps = {
  handleGoogle: () => void;
};

const AuthContext = createContext<authProps | null>(null);

export const useGlobalAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const handleGoogle = () => {
    window.open(
      "https://subsum-server-nofz.onrender.com/auth/google/callback",
      "_self"
    );
  };

  return (
    <AuthContext.Provider value={{ handleGoogle }}>
      {children}
    </AuthContext.Provider>
  );
};
