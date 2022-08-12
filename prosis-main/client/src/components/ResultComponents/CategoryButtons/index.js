import React from "react";
import PropTypes from 'prop-types';
import { Button } from "antd";
import "./styles.css";

const CategoryButtons = ({ categories, onSelect, selectedCategoryID }) => (
    <div className="CategoryButtons">
        { categories.map((category) => (
            <Button 
                key={category.id} 
                className="CategoryButton" 
                id={selectedCategoryID === category.id ? "selected" : null} onClick={() => onSelect(category.id)}
            >
                {category.info.icon}
                {category.info.title}
            </Button>
        ))}
    </div>
    
);

// CategoryButtons.propTypes = {
//     categoryID: PropTypes.number.isRequired,
//     title: PropTypes.string.isRequired,
//     icon: PropTypes.object.isRequired,
//     isSelected: PropTypes.bool.isRequired,
//     onSelect: PropTypes.func.isRequired,
// };

export default CategoryButtons;