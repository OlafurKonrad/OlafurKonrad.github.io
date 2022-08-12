import { TbBuildingFactory2, TbBuildingFactory } from "react-icons/tb";
import { GiFactory } from "react-icons/gi";

// Theme constants
export const DARK = "dark";
export const LIGHT = "light";

// Card types
export const INNER = "inner";
export const OUTER = "outer";

// Form input types
export const RANGE = "range";
export const INPUT = "input";
export const DROPDOWN = "dropdown";
export const INPUT_GROUP = "input_group";

// Calculator types
export const POTROOM = "potroom";
export const CASTHOUSE = "casthouse";

// Main view states
export const IDLE = "idle";
export const GENERAL = "general";
export const CALCULATION = "calculation";

// Dashboard tabs
export const OVERVIEW = "Overview";
export const CALCULATOR = "Calculator";
export const RESULTS = "Results";
export const HELP = "Help";

// Dashboard results & calculator type options
export const optionA = { label: "Potroom", value: POTROOM };
export const optionB = { label: "Casthouse", value: CASTHOUSE };

// Dashboard tabs
export const TABS = [
  { name: "Calculator", icon: "AiOutlineCalculator" },
  { name: "Results", icon: "AiOutlineBarChart" },
  { name: "Overview", icon: "FiHome" },
  { name: "Help", icon: "IoIosHelpCircleOutline" },
];

// Local storage key
export const LOCAL_STORAGE_KEY = "PROSIS";

// Chart settings for barchart
export const chartOptions = (
  cardOuterBorder,
  cardOuterBackground,
  textColor
) => {
  return {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      xAxis: {
        grid: {
          color: cardOuterBorder,
        },
      },
      yAxis: {
        grid: {
          color: cardOuterBorder,
        },
      },
    },
    color: textColor,
    borderColor: cardOuterBackground,
  };
};

export const POTROOM_CASTHOUSE_BENEFITS = [
  "Improved employee safety",
  "Reduced insurance costs",
  "Faster and better decision making",
  "Minimize real estate used by traditional laboratories",
  "Better Return of Capital Employed (ROCE)",
  "Increased sample analysis accuracy",
  "More homogeneous casting",
];

export const WHOLE_PLANT_BENEFITS = [
  "Improved product traceability",
  "Improved global production planning",
  "Potential for premium products",
  "Faster time to market",
  "Maximize aluminum and alloy quality",
];


/* Constants for Calculator Card */
// export const infoList = [
//     " Metric Tons of aluminum produced per year",
//     " Flow Lines in use",
//     " Pots in use",
//     " Ovens in use",
//     " Potroom Samples - period",
//     " Casthouse Samples - period",
// ];




export const templateList = [
    [{
        id: 0,
        productionAmount: 150,
        icon: <TbBuildingFactory2 className="TemplateIcon" id="small" />,
    },
    {
        id: 1,
        productionAmount: 350,
        icon: <GiFactory className="TemplateIcon" id="medium" />,
    },
    {
        id: 2,
        productionAmount: 720,
        icon: <TbBuildingFactory className="TemplateIcon" id="large" />,
    }],
    [{
        id: 0,
        productionAmount: 80,
        icon: <TbBuildingFactory2 className="TemplateIcon" id="small" />,
    },
    {
        id: 1,
        productionAmount: 200,
        icon: <GiFactory className="TemplateIcon" id="medium" />,
    }]
];


export const additionalBenefits = {
  "Potroom" : [
      "Improved employee safety",
      "Faster and better decision making",
      "Reduced insurance costs",
      "Better Return of Capital Employed (ROCE)",
      "Increased sample analysis accuracy",
      "More homogeneous casting",
      "Minimize real estate used by traditional laboratories",
  ],
  "Casthouse" : [
      "Improved employee safety",
      "Faster and better decision making",

      "Reduced insurance costs",
      "Better Return of Capital Employed (ROCE)",
      "Increased sample analysis accuracy",
      "More homogeneous casting",
      "Minimize real estate used by traditional laboratories",
  ],
  "Overview" : [
      "Improved product traceability",
      "Improved global production planning",
      "Potential for premium products",
      "Faster time to market",
      "Maximize aluminum and alloy quality",
  ],
};

export const userInstructions = [
  { id : 1, description : "Choose a category that resembles your production scale" },
  { id : 2, description : "View the associated results and adjust them by changing the variables on the left-hand side" },
  { id : 3, description : "Share and/or download your results!" },
];

export const headerInfo = { 
  "calculator": { 
      title: "Process Calculator", 
      description: "Please choose the category that resembles your production scale the most",
      button: {title: "Back", to: null, redirect: ""},
      id: "calculatorContent",
  },
  "results": { 
      title: "Results", 
      description: "Feel free to adjust the variables so the results represent your company better",
      button: {title: "Share Results", to: "share", redirect: null},
      id: "resultContent",
  },
  "share": { 
      title: "Share & Download Results", 
      description: null,
      button: null,
      id: "shareContent",
  },
};
        

       