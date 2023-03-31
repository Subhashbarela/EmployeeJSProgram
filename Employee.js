


//.................. using switch case  using condition  UC6.................................................

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
let totalEmpWage=0;
function sum(dailyWage){
    totalEmpWage +=dailyWage;
}
let dailyCntr=0;
function mapDayWithWage(dailyWage){
    dailyCntr++;
    return dailyCntr + "="+ dailyWage;
}

function fullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
function fullTimeWage(dailyWage){
    return dailyWage.includes("160");
}

let empHrs=0;
let totalEmpHrs=0;
let totalWorkingDays=0;
let empDailyWageArr= new Array();
let mapDailyWageArr= new Array();


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

empDailyWageArr.forEach(sum);
console.log("UC7A Total Days: "+ totalWorkingDays +" Total hrs: "+ totalEmpHrs +" Emp wage : "+totalEmpWage); 

let mapDayWithWageArr =empDailyWageArr.map(mapDayWithWage);
console.log("UC7B - daily wage map");
console.log(mapDayWithWageArr);

let fullDayWageArr =mapDailyWageArr.filter(fullTimeWage);
console.log("UC7C - daily wage map using filter ");
console.log(fullDayWageArr);

console.log("UC 7D- first time Fulltime wage was earned on Day "+
mapDailyWageArr.find(findfullTimeWage));


