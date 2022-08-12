import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Typography } from 'antd';
import Container from '../Containers/Container';
import { Barchart, AdditionalBenefits, TotalBox, Summary, CategoryButtons, Sections } from '../ResultComponents';
import { categories, resultTypes } from '../../constants/Categories';
import { getChartData, openSectionBar, getChartLabels } from '../../services/Barchart';
import { potroomSections, casthouseSections, sectionIsOpen } from '../../constants/Sections';
import Solution from '../ResultComponents/Solution';
import "./styles.css";

const { Title } = Typography;

const ResultTab = ({ resultID, results, smelterType }) => {

    const chartRef = useRef();

    const resultType = resultTypes[resultID];
    const resultCategories = categories[resultType];
    const sectionDetails = [potroomSections, casthouseSections];
    const [categoryID, setCategoryID] = useState(0);
    const [isSectionOpen, setIsSectionOpen] = useState(sectionIsOpen);

    const [prevCategory, setPrevCategory] = useState(0);
    const [labels, setLabels] = useState(getChartLabels(smelterType));
    const [chartDataSet, setChartDataSet] = useState(getChartData(categoryID, isSectionOpen, results));
    const [boxWidth, setBoxWidth] = useState(0);

    const onResize = () => {
        // console.log("RESIZE");
        setBoxWidth(chartRef.current.width-chartRef.current.scales.y.width);
    };

    useEffect(() => {
        onResize();
        window.addEventListener('resize', onResize);
    }, []);

    useEffect(() => {
        setLabels(getChartLabels(smelterType));
    }, []);

    useEffect(() => {
        setChartDataSet(getChartData(categoryID, isSectionOpen, results));
    }, [results]);

    useEffect(() => {
        setPrevCategory(categoryID);
        setCategoryID(prevCategory);
    }, [resultID]);

    useEffect(() => {
    }, [categoryID, resultID]);

    const onSelect = (categoryID) => {
        setCategoryID(categoryID);
    };

    const onSectionClick = (sectionID) => {
        let temp = [...isSectionOpen];
        temp[resultID][sectionID] = !temp[resultID][sectionID];
        setIsSectionOpen(temp);
        setChartDataSet(openSectionBar(chartDataSet, temp[resultID]));
    };

    return (
        <Container type="Value">
            <div className="ValueContent" style={{width: `${boxWidth}px`}}>
                <div className="TitleContainer"><Title className="Title" id="value">{resultType}</Title></div>
                <TotalBox total={results.total[resultID]} />
            </div>
            <Barchart 
                labels={labels[resultType]} 
                categoryID={categoryID} 
                onSelect={onSelect}
                chartRef={chartRef}
                chartDataSet={chartDataSet[resultID]}
                resultID={resultID}
            />
            <div className="ValueContent" style={{width: `${boxWidth}px`}}>
 
                { resultID !== 2 ?
                    <>
                        <CategoryButtons
                            categories={resultCategories}
                            selectedCategoryID={categoryID}
                            onSelect={onSelect}
                        />
                        <Sections 
                            categories={resultCategories}
                            selectedCategoryID={categoryID}
                            details={sectionDetails[resultID]}
                            isSectionOpen={isSectionOpen[resultID]} 
                            onSelect={onSectionClick}
                            results={results[resultType]}
                        />
                    </> : <></> }
                { resultID === 2 ? 
                    <>
                        <Summary result={chartDataSet[2]} /> 
                        <Solution devices={results.devices}/> 
                    </>
                : <></> }
                <AdditionalBenefits type={resultType} />
            </div>
        </Container>
    );
};

ResultTab.propTypes = {
    resultID: PropTypes.number.isRequired,
    results: PropTypes.object.isRequired,
    smelterType: PropTypes.number.isRequired,
};

export default ResultTab;


                    