import React, { useState, useEffect } from 'react';
import { changeBarColors } from '../../../services/Barchart';
import { options } from '../../../constants/Barchart';
// import PropTypes from 'prop-types';
import "./styles.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar, getElementAtEvent } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);
  
const Barchart = ({ labels, categoryID, onSelect, chartRef, chartDataSet, resultID }) => {

    const [dataSet, setDataSet] = useState(chartDataSet);

    useEffect(() => {
        setDataSet(chartDataSet);
    });

    useEffect(() => {
        if (resultID !== 2) setDataSet(changeBarColors(chartDataSet, categoryID));
    }, [categoryID]);

    useEffect(() => {
        if (resultID !== 2) setDataSet(changeBarColors(chartDataSet, categoryID));
        else setDataSet(chartDataSet);
    }, [chartDataSet]);

    const onBarClick = (event) => {
        if (resultID !== 2) {
            const barID = getElementAtEvent(chartRef.current, event)[0];
            if (typeof barID !== 'undefined') {
                onSelect(barID.index);
            };
        }
    };

    return (
        <div className="Barchart">
            <Bar 
                options={resultID === 2 ? options.overview : options.default} 
                data={{
                    labels,
                    datasets: dataSet,
                }} 
                ref={chartRef}
                onClick={onBarClick}
                style={{ height: "300px" }}
            />
        </div>
    );
};

export default Barchart;



                    