'use strict'
function durationBetweenDates(startDate, endDate, formatType){
    const result =Math.abs(Date.parse(startDate) - Date.parse(endDate));
    switch (formatType){
        case 'seconds':
        console.log(`${result / 1000} seconds`);
        break; 
        case 'minutes':
        console.log(`${result / (1000 * 60)} minutes`);
        break; 
        case 'hours':
        result / (1000 * 60 * 60) !== 1 ? console.log(`${result / (1000 * 60 * 60)} hours`) : console.log(`1 hour`);
        break; 
        case 'days':
        result / (1000 * 60 * 60 * 24) !== 1 ? console.log(`${result / (1000 * 60 * 60 * 24)} days`) : console.log(`1 day`);
        break;
        default:
        console.log(`${result} milliseconds`);
        break;
    }
}
durationBetweenDates('02 Aug 1985', '03 Aug 1985', 'seconds');
durationBetweenDates('31 Jan 2022', '03 Feb 2021', 'days');