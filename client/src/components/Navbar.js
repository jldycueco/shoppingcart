import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react';

const Navbar = ({ history }) => {
  const [state, setState] = useState({
    activeItem: 'home',
  });

  const handleItemClick = (e, { name }) => {
    setState({
      ...state,
      activeItem: name,
    });
    if (name === 'home') {
      history.push('/');
    } else {
      history.push(`/${name}`);
    }
  };

  return (
    <>
      <Menu pointing secondary className="navmenu">
        <Menu.Item
          name="home"
          active={state.activeItem === 'home'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="cart"
          active={state.activeItem === 'cart'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="order"
          active={state.activeItem === 'order'}
          onClick={handleItemClick}
        />
      </Menu>
    </>
  );
};

export default Navbar;
