import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/actions/authActions";
import { ListItem, ListItemIcon, ListItemText, Link } from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AccountIcon from "@material-ui/icons/AccountBox";
import SettingsIcon from "@material-ui/icons/Settings";

function MenuItem(props) {
  const [connected, setConnected] = useState(false);
  useEffect(() => {
    if (props.auth.isAuthenticated) {
      setConnected({ connected: true });
    } else {
      setConnected({ connected: false });
    }
  }, [props.auth]);

  const onLogoutClick = e => {
    e.preventDefault();
    props.logoutUser();
  };

  return (
    <div>
      <Link color="inherit" to="/profil">
        <ListItem button key={"account"}>
          <ListItemIcon>
            <AccountIcon />
          </ListItemIcon>
          <ListItemText primary={"Victor Malfait"} />
        </ListItem>
      </Link>
      <Link color="inherit" href="/dashboard">
        <ListItem button key={"Dashboard"}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary={"Dashboard"} />
        </ListItem>
      </Link>
      {connected ? (
        <Link color="inherit" onClick={onLogoutClick}>
          <ListItem button key={"Logout"}>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary={"Logout"} />
          </ListItem>
        </Link>
      ) : (
        <ListItem button key={"Login"} component="a" href="/login">
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary={"Login"} />
        </ListItem>
      )}
    </div>
  );
}

MenuItem.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(MenuItem);
