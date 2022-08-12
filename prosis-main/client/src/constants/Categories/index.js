import React from "react";
import { GiVial, GiMetalBar, GiMaterialsScience } from "react-icons/gi";
import { BsRecycle, BsCloudPlusFill } from "react-icons/bs";
import { AiOutlineWarning } from "react-icons/ai";
import { VscTools } from "react-icons/vsc";
import { MdBatteryChargingFull } from "react-icons/md";

// export const resultTypes = ["Potroom", "Casthouse", "Overview"]; 
export const resultTypes = ["Potroom", "Casthouse", "Overview"]; 

export const categoryInfo = {
    energy : { title : "Energy", icon : <MdBatteryChargingFull className="CategoryIcon" id="energy" />},
    sampling : { title : "Sampling", icon : <GiVial className="CategoryIcon" id="sampling" />},
    rawMaterial : { title : "Raw Material", icon : <GiMaterialsScience className="CategoryIcon" id="rawMaterial" />},
    potControl : { title : "Pot Control", icon : <VscTools className="CategoryIcon" id="potControl" />},
    risk : { title : "Risk", icon : <AiOutlineWarning className="CategoryIcon" id="risk" />},
    casting : { title : "Casting", icon : <GiMetalBar className="CategoryIcon" id="casting" />},
    emissions : { title : "Emissions", icon : <BsCloudPlusFill className="CategoryIcon" id="emissions" />},
    scrap : { title : "Scrap", icon : <BsRecycle className="CategoryIcon" id="scrap" />},
};

export const categories = { 
    "Potroom" : [
        { id : 0, info : categoryInfo.energy, sections : [0] }, 
        { id : 1, info : categoryInfo.sampling, sections : [1,2] }, 
        { id : 2, info : categoryInfo.rawMaterial, sections : [3,4] }, 
        { id : 3, info : categoryInfo.potControl, sections : [5,6] },
        { id : 4, info : categoryInfo.risk, sections : [7] },
    ],
    "Casthouse" : [
        { id : 0, info : categoryInfo.energy, sections : [0,1] },
        { id : 1, info : categoryInfo.sampling, sections : [2,3,4] },
        { id : 2, info : categoryInfo.casting, sections : [5,6,7,8] },
        { id : 3, info : categoryInfo.emissions, sections : [9] },
        { id : 4, info : categoryInfo.scrap, sections : [10,11] },
    ],
};
