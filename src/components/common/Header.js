/*
 * Copyright (c) 2018. https://ashishsantikari.info
 */

import React, {PropTypes} from 'react';
import {IndexLink, Link} from 'react-router';
import LoadingDots from "./LoadingDot";

const Header = ({loading}) => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/courses" activeClassName="active">Courses</Link>
      {" | "}
      <Link to="/about" activeClassName="active">About</Link>
      {loading && <LoadingDots dots={20} interval={100}/>}
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
