import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Pay from "../UserDashBoard/Pay/Pay";
import Myorders from "../UserDashBoard/Myorders/Myorders";
import MyReview from "../UserDashBoard/MyReview/MyReview";
import AddProducts from "../AdminDashBoard/AddProducts/AddProducts";
import MakeAdmin from "../AdminDashBoard/MakeAdmin/MakeAdmin";
import ManageProducts from "../AdminDashBoard/ManageProducts/ManageProducts";
import ManageOrder from "../AdminDashBoard/ManageOrder/ManageOrder";
import ManageReview from "../AdminDashBoard/ManageReview/ManageReview";
import AdminRoute from "../AdminRoute/AdminRoute";
import useAuth from "../../Hooks/useAuth";
import imgProfile from "../../../img/profileimg.png";

const drawerWidth = 210;

function Dashbord(props) {
  const { user, isAdmin, setIsAdmin } = useAuth();

  let { path, url } = useRouteMatch();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  /*   const [dash , setDash] =React.useState(false);
 const history = useHistory();
  console.log(dash)
  console.log(user)
 const HandleDashboard = () => {
   setDash(!dash)
   setIsAdmin(!isAdmin);
   history.push('/dashboard')
 } */

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <div className="py-3" style={{ backgroundColor: "#001a1a" }}>
      {isAdmin && user.email && (
        <div>
          <div className="text-center text-secondary">
            <img
              style={{ height: "35px", width: "35px" }}
              className="rounded-circle  mx-auto mb-1"
              src={user.photoURL || imgProfile}
              alt=""
            />
            <p style={{ margin: "0" }}>{user.displayName} (Admin)</p>
            <p style={{ fontSize: "15px" }}>{user?.email}</p>
          </div>

          <hr className="text-white" />
          <Link
            to={`${url}`}
            className="fs-6 text-warning text-decoration-none d-flex align-items-center ms-3 mt-3"
          >
            <i
              className="fas fa-th-list fs-3 me-3"
              style={{ color: "#EC5D07" }}
            ></i>
            Manage All Orders
          </Link>

          <Link
            to={`${url}/addproduct`}
            className="fs-6 text-warning mt-3  text-decoration-none d-flex align-items-center ms-3"
          >
            <i className="fas fa-plus-square fs-3 me-3 text-success "></i>
            Add A Product
          </Link>
          <Link
            to={`${url}/makeadmin`}
            className="fs-6 text-decoration-none my-3 text-warning d-flex align-items-center ms-3"
          >
            <i className="fas fa-user-shield  fs-3 me-3 text-danger"></i>
            Make Admin
          </Link>

          <Link
            to={`${url}/manageproducts`}
            className="fs-6 text-warning text-decoration-none d-flex align-items-center ms-3"
          >
            <i className="fas fa-swatchbook fs-3 me-3 text-info"></i>
            Manage Products
          </Link>

          <Link
            to={`${url}/managereview`}
            className="fs-6 text-warning text-decoration-none d-flex align-items-center ms-3 mt-3"
          >
            <i className="fas fa-tools fs-3 me-3 text-primary"></i>
            Manage Reviews
          </Link>

          <Link
            className="text-decoration-none fs-6 ms-3 mt-3 text-success d-inline-block "
            to="/home"
          >
            <i className="fas fa-angle-double-left"></i> Back to Home{" "}
          </Link>
        </div>
      )}

      {!isAdmin && user.email && (
        <div>
          <div className="text-center text-secondary">
            <img
              style={{ height: "35px", width: "35px" }}
              className="rounded-circle  mx-auto mb-1"
              src={user.photoURL || imgProfile}
              alt=""
            />
            <p style={{ margin: "0" }}>{user.displayName} (User)</p>
            <p style={{ fontSize: "15px" }}>{user?.email}</p>
          </div>
          <hr className="text-white" />

          <Link
            to={`${url}`}
            className="fs-6 text-warning  text-decoration-none d-flex align-items-center ms-3"
          >
            <i className="fas  fa-shopping-cart fs-3 me-3 text-success "></i>
            My Orders
          </Link>

          <Link
            to={`${url}/pay`}
            className="fs-6 text-decoration-none my-3 text-warning d-flex align-items-center ms-3"
          >
            <i className="fas fa-comment-dollar  fs-3 me-3 text-danger"></i>
            Pay
          </Link>

          <Link
            to={`${url}/myreview`}
            className="fs-6 text-warning text-decoration-none d-flex align-items-center ms-3"
          >
            <i className="fas fa-star-half-alt fs-3 me-3 text-info"></i>
            Give review
          </Link>

          <Link
            className="text-decoration-none fs-6 ms-3 mt-3 d-inline-block"
            to="/home"
          >
            <i className="fas fa-angle-double-left"></i> Back to Home{" "}
          </Link>
        </div>
      )}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: " #003333",
          color: "#e6ffcc",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {isAdmin && user.email ? "Admin DashBoard " : "DashBoard"}
          </Typography>
          {/*  {
            isAdmin && user.email &&<button className='btn btn-success ms-4' onClick={HandleDashboard}> Go to user DashBoard </button> 
          }

          {
            dash && user.email ?  <button
            onClick={HandleDashboard}
            className='btn btn-primary ms-4'> Go to Amin DashBoard </button> : ''
          } */}
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          mt: 2,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        {!isAdmin && user.email && (
          <div>
            <Switch>
              <Route exact path={`${path}`}>
                <Myorders></Myorders>
              </Route>

              <Route path={`${path}/pay`}>
                <Pay></Pay>
              </Route>

              <Route path={`${path}/myreview`}>
                <MyReview></MyReview>
              </Route>
            </Switch>
          </div>
        )}

        {/* Admin Dash board */}

        {isAdmin && user.email && (
          <div>
            <Switch>
              <AdminRoute exact path={`${path}`}>
                <ManageOrder></ManageOrder>
              </AdminRoute>

              <AdminRoute path={`${path}/addproduct`}>
                <AddProducts></AddProducts>
              </AdminRoute>

              <AdminRoute path={`${path}/makeadmin`}>
                <MakeAdmin></MakeAdmin>
              </AdminRoute>

              <AdminRoute path={`${path}/manageproducts`}>
                <ManageProducts></ManageProducts>
              </AdminRoute>

              <AdminRoute path={`${path}/managereview`}>
                <ManageReview></ManageReview>
              </AdminRoute>
            </Switch>
          </div>
        )}
      </Box>
    </Box>
  );
}

Dashbord.propTypes = {
  window: PropTypes.func,
};

export default Dashbord;
