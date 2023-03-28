const Is_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HR = 4;
const FULL_TIME_HR = 8;
const WAGE_PER_HR = 20;
const NUMBER_WORKING_DAYS = 2;





function getWorkingHours(emp_check){
    switch(emp_check){
        case Is_PART_TIME:
            return PART_TIME_HR;
            
        case IS_FULL_TIME:
            return FULL_TIME_HR;
            
        default:
            return 0;    
    }
}

let empHrs = 0;

for(let a = 0; a < NUMBER_WORKING_DAYS; a++){
    let emp_check = Math.floor(Math.random()*10)%3;
    empHrs+=getWorkingHours(emp_check);
}




let empWage = empHrs * WAGE_PER_HR;
console.log("Total hrs: "+ empHrs+" Emp Wage: "+empWage);