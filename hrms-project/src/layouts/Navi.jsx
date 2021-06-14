import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";
import Login from "./Login";

export default function Navi() {
  return (
    <div>
      <Menu fixed="top" inverted size="large">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            <Login />

            <Menu.Item>
              <Button primary>Eleman Arıyorum</Button>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
