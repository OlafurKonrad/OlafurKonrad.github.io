import React from 'react';
import { Typography } from 'antd';
// import { RiArrowDownSFill } from "react-icons/ri";
import "./styles.css";
import { numberToFormattedString } from '../../../services';
import DropDownBox from '../../DropDownBox';
const { Title, Text } = Typography;

const SectionDetails = ({ info, isOpen, onSelect, result }) => {
    let singularUnit = "";
    const unitToSingular = (unit) => {
        if (unit.slice(-1) === "s") return unit.slice(0, -1);
        else if (info.title === "Tapouts") return "Tapout";
        else if (info.title === "Pot Replacements") return "Replacement";
        else if (unit === "$") return "";
        else return unit;
    };

    if (info.otherTab) singularUnit = unitToSingular(info.otherTab.unit);
    
    return (
        <DropDownBox type="SectionDetails" isOpen={isOpen} onClick={() => onSelect(info.id)}>
            <>
                <Title className="Title Box" id="sections">{info.title}</Title>
                <Text className="Title Box" id="description">{info.description}</Text>

                <Title className="Title Box Profit" id="sections">
                    { info.profitTab 
                        ? `$${numberToFormattedString(result.profit)}` 
                        : `${info.amountType==="$" ? info.amountType : ""}${numberToFormattedString(result.profit)} ${info.amountType!=="$" ? info.amountType : ""}`
                    }
                </Title>
                <Text className="Text Box Profit" id="description">
                    { info.amountDesc ? info.amountDesc : "Profit"}
                </Text>
            </>
                
            <div className="DropDownContent">
                { info.profitTab ?
                    <div className="SectionContent" id="profit">
                        <Text className="Text Box" id="description">OpEx</Text> 
                        <Text className="Text Box" id="amount">${numberToFormattedString(result.opex)}</Text>

                        <Text className="Text Box" id="description">CapEx</Text> 
                        <Text className="Text Box" id="amount">${numberToFormattedString(result.capex)}</Text>
        
                        <Text className="Text Box" id="description">Revenue</Text> 
                        <Text className="Text Box" id="amount">${numberToFormattedString(result.revenue)}</Text>

                    </div> : null }

                { info.otherTab ? 
                    <div className="SectionContent" id="other">
                        <Text className="Text Box" id="description">{info.otherTab.title}</Text> 
                        <Text className="Text Box" id="amount">
                            {`${info.otherTab.unit==="$" ? info.otherTab.unit : ""}${numberToFormattedString(result.other)} ${info.otherTab.unit!=="$" ? info.otherTab.unit : ""}`}
                        </Text> 

                        <Text className="Text Box" id="description">
                            { typeof result.otherPerUnit !== "undefined" ? `${info.otherTab.prefix} per ${singularUnit}` : null}
                        </Text> 
                        <Text className="Text Box" id="amount">
                            { typeof result.otherPerUnit !== "undefined" ? `$${numberToFormattedString(result.otherPerUnit)}` : null}
                        </Text>
                    </div> : null }

                { info.comment ? <div className="SectionContent" id="comment"><Text className="Text Box" id="description">{info.comment}</Text></div> : null}
            </div>
        </DropDownBox>
    );
}

export default SectionDetails;


                    