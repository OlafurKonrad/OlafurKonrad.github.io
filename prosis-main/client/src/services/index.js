export const numberToFormattedString = (num) => (num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')); 

export const checkIfNum = (n) => { if (typeof n === "string") return 0; return n; };

export const getSummaryTotal = (res) => {
    const opex = res[0].data.reduce((a, b) => a + b, 0);
    const capex = res[1].data.reduce((a, b) => a + b, 0);
    const revenue = res[2].data.reduce((a, b) => a + b, 0);
    const total = opex+capex+revenue;
    return {
        "OpEx": opex, 
        "CapEx": capex,
        "Revenue": revenue,
        "Total": total,
    };
};

const open = () => {
    document.body.style.overflow="hidden"; 
    return true;
};
const close = () => {
    document.body.style.overflow="";
    return false;

};
export const checkIfChanged = (cur_val, val) => (cur_val===val);
export const isEmpty = (obj) => (Object.keys(obj).length === 0);
// const goForward = (toID) => {
//     modalRoute.push(toID);
//     // setCurModalID(toID);
//     return {id};
// };

// const goBack = () => {
//     modalRoute.pop(curModalID);
//     setCurModalID(modalRoute.at(-1));
// };

const modal = {
    help: {
        open,
        close,
    },   
};

export default modal;