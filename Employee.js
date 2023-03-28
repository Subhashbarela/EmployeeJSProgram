const IS_PRESENT =0;
const IS_PART_TIME =1;
const IS_FULL_TIME =2;
const PART_TIME_HR =4;
const FULL_TIME_HR =8;
const WAGE_PER_HR =20;
const NUM_OF_WORKING_DAYS =10;
const MAX_HRS_IN_MONTH =20;

function GetWorkingHrs(empCheck)
{
switch(empCheck)
{
    case IS_FULL_TIME:
        console.log("Full time");
    return FULL_TIME_HR;
    break;

    case IS_PART_TIME:
        console.log("Part time ");

    return PART_TIME_HR;
    break;

    default:
        console.log("Absent ");

        return 0;

  }
}
function CalcDailyWage(empHrs){
    return empHrs*WAGE_PER_HR;
}

let empHrs=0;
let totalEmpHrs=0;
let totalWorkingDays=0;
let empDailyWageArr= new Array();

while(totalEmpHrs<=MAX_HRS_IN_MONTH && totalWorkingDays<NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empCheck=(Math.floor(Math.random()*10)%3);    
    empHrs= GetWorkingHrs(empCheck);
    totalEmpHrs+=empHrs;
    empDailyWageArr.push(CalcDailyWage(empHrs));
}
console.log(empDailyWageArr);
let empWage=CalcDailyWage(totalEmpHrs);
// let empWage=totalEmpHrs*WAGE_PER_HR;
console.log("Total Days: "+ totalWorkingDays +" Total hrs: "+ totalEmpHrs +" Emp wage : "+empWage); 



