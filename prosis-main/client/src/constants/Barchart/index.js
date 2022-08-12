export const barchartColors = {
    "OpEx" : { default: "#676767", selected: "#F16429" }, // OPEX COLORS
    "CapEx" : { default: "#8F8F8F", selected: "#F88A30" }, // CAPEX COLORS
    "Revenue" : { default: "#B7B7B7", selected: "#FFAF37" }, // REVENUE COLORS
};

export const barchartColorsRGBA = {
    "OpEx" : "rgba(241, 100, 41, 0.3)", // OPEX COLORS
    "CapEx" : "rgba(248, 138, 48, 0.3)", // CAPEX COLORS
    "Revenue" : "rgba(255, 175, 55, 0.3)", // REVENUE COLORS
};

export const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    innerHeight: 70,
    categoryPercentage: 0.8,
    barPercentage: 0.95,
    interaction: {
        intersect: false,
    },
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
        },
        tooltip: {
            mode: 'dataset',
            filter: tooltipItem => tooltipItem.dataset.data[tooltipItem.dataIndex] > 0,
            callbacks: {
                label: (item) =>
                    `${item.dataset.label}: $${item.formattedValue}`,
            },
        },
    },
    scales: {
        x: {
            stacked: true,
            grid: {
                display: false,
            },
            ticks: {
                display: false,
            },
        },
        y:{
            stacked: true,
            grid: {
                display: false
            },
            ticks: {
                callback: function (value) {
                    return `$${value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`;
                },
                font: {
                    family: "Montserrat",
                },
            },
        },
    },
};

export const overviewChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    // innerHeight: 70,
    categoryPercentage: 0.8,
    barPercentage: 0.95,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
        },
        tooltip: {
            mode: 'index',
            callbacks: {
                label: (item) =>
                    `${item.dataset.label}: $${item.formattedValue}`,
            },
        },
    },
    scales: {
        x: {
            grid: {
                display: false,
            },
            ticks: {
                autoSkip: false,
                maxRotation: 90,
                minRotation: 0,
                font: {
                    family: "Montserrat",
                },
            },
        },
        y:{
            grid: {
                display: false
            },
            ticks: {
                callback: function (value) {
                    return `$${value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`;
                },
                font: {
                    family: "Montserrat",
                },
            },
        },
    },
};

export const options = {default: chartOptions, overview: overviewChartOptions};
