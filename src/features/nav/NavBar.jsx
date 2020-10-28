import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Button, Container, Menu } from "semantic-ui-react";
import SignenOutMenu from "./SignedOutMenu";
import SignedInMenu from "./SignedInMenu";

export default function NavBar({ setFormOpen }) {
  const history = useHistory();
  const [authenticated, setAuthenticated] = useState(false);

  const handleSignOut = () => {
    setAuthenticated(false);
    history.push("/");
  };
  return (
    <Menu inverted fixed='top'>
      <Container>
        <Menu.Item exact as={NavLink} to='/' header>
          <img src='/assets/logo.png' alt='logo' style={{ marginRight: 15 }} />
          Re-vents
        </Menu.Item>
        <Menu.Item as={NavLink} to='/events' name='Events' />
        {authenticated && (
          <Menu.Item header as={NavLink} to='/createEvent'>
            <Button positive inverted content='Create Event' />
          </Menu.Item>
        )}
        {authenticated ? (
          <SignedInMenu signOut={handleSignOut} />
        ) : (
          <SignenOutMenu setAuthenticated={setAuthenticated} />
        )}
      </Container>
    </Menu>
  );
}
