import PropTypes from 'prop-types';
import React from 'react';

const Header = React.memo(function Header(props){
    return (
        <div>
            This header title is {props.title}
        </div>
    );
});


Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
