import AdminNavbar from "../../components/AdminDashBoard/AdminNavbar";
import Dynamic from "./[slug]";

const Dashboard = ({}) => {
  return (
    <>
      <AdminNavbar value="" />
      <div className="main-content d-flex flex-column">
        {/* <Navbar /> */}
        <Dynamic />
        <div className="flex-grow-1"></div>
      </div>
    </>
  );
};

export default Dashboard;
