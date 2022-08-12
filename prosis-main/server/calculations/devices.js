const getDevices = (pots_amount) => {
    const EA1000 = Math.round(pots_amount/500)+1
    return [{title: "EA1000", amount: EA1000 }, {title: "EA2000", amount: 0 }, {title: "EA2500", amount: 0 },];
}; 

module.exports = { getDevices };