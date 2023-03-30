import DashboardNavbar from "../../../../components/Dashboard/DashboardNavbar";
import DashboardListingArea from "../../../../components/Dashboard/DashboardListingArea";
import NavbarTwo from "../../../../components/_App/Navbar";

const Index = () => {
  return (
    <>
      <DashboardNavbar />

      <div className="main-content d-flex flex-column">
        <NavbarTwo />

        <DashboardListingArea />
      </div>
    </>
  );
};

export default Index;
