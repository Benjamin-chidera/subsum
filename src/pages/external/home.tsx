import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className=" flex justify-center items-center h-screen">
      <Link to={"/login"} className=" font-semibold text-3xl capitalize">
        Welcome, please click to login
      </Link>
    </main>
  );
};

export default Home;
