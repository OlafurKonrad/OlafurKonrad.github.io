import React, { useEffect } from "react";
// import PropTypes from 'prop-types';
import SectionDetails from "../SectionDetails";
import "./styles.css";

const filterObject = (obj, condition) => (
    Object.keys(obj)
          .filter( key => condition(obj[key]) )
          .reduce( (res, key) => Object.assign(res, { [key]: obj[key] }), {} )
);
const Sections = ({ categories, selectedCategoryID, details, onSelect, isSectionOpen, results }) => {
    useEffect(() => {
       //  const bla = categories.filter(category => category.id === selectedCategoryID)
        //console.log("details ", filterObject(details, detail => detail.id===));
        // .map((category) => (
        //     category.sections.map(function (sectionID) => {
        //         console.log("sectionID - ", sectionID);
        //         console.log("details - ", details);
        //     })
        // ))
    }, []);
    return (
    <div className="SectionDetailsContainer">
        {categories.filter(category => category.id === selectedCategoryID).map((category) => (
            category.sections.map((sectionID) => {
                let sectionType = Object.keys(filterObject(details, section=>section.id===sectionID))[0];
                let section = details[sectionType];

                // console.log(results);
                return (
                <SectionDetails 
                    key={section.id}
                    info={section} 
                    isOpen={isSectionOpen[section.id]} 
                    onSelect={onSelect}
                    result={results[sectionType]}
                    // key={details[sectionID].id}
                    // info={details[sectionID]} 
                    // isOpen={isSectionOpen[details[sectionID].id]} 
                    // onSelect={onSelect}
                    // result={results.filter(res => res.id === details[sectionID].id)[0]}
                />
            )})
        ))}
    </div>
    
);}

// Sections.propTypes = {
//     categoryID: PropTypes.number.isRequired,
//     title: PropTypes.string.isRequired,
//     icon: PropTypes.object.isRequired,
//     isSelected: PropTypes.bool.isRequired,
//     onSelect: PropTypes.func.isRequired,
// };

export default Sections;