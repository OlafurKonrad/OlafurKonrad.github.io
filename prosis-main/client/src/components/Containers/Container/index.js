import React from 'react';
import PropTypes from 'prop-types';
import "./styles.css";

const Container = ({ children, type, id }) => (
    <div className={`${type}Container`} id={id}>
        { children }
    </div>
);

Container.propTypes = {
    type: PropTypes.string.isRequired,
    id: PropTypes.string,
};

export default Container;
