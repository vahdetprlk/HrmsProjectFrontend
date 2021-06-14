import React from "react";
import { Button, Dropdown, Menu, Item } from "semantic-ui-react";

export default function Login() {
  return (
    <div>
      <Menu.Item>
        <Button primary>
          <Dropdown text="Giriş Yap">
            <Dropdown.Menu>
              <Dropdown.Item>Giriş Yap</Dropdown.Item>
              <Dropdown.Item>Yeni Üyelik Oluştur</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Button>
      </Menu.Item>
    </div>
  );
}
