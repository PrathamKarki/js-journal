/* fundamental review for conditionals, functions and more in js, where we will determine students grade bsed on their score */

const scores = [56, 34, 72, 67, 92];

function getAverage (scores){
    let total = 0;

    for (const score of scores){
        total += score;
    }
    const average = total/ scores.length;

    return average;
}

// function named getGrade that takes student score as parameter and returns string based on certain condition

function getGrade(studentScr){
    if(studentScr === 100){
        return 'A+'
    } 
    else if(studentScr >= 90 && studentScr <=99){
        return "A";
    } 
    else if( studentScr >=80 && studentScr <= 89){
        return "B";
    } 
    else if( studentScr >= 70 && studentScr <= 79){
        return 'C';
    } 
    else if(studentScr >=60 && studentScr <= 69){
        return "D"
    } 
    else {
        return "F";
    }
}

// function to check passing or not
function hasPassingGrade(score){
    let grade = getGrade(score);

    if(grade !== "F"){
        return true;
    } 
    else {
        return false;
    }
}


// function to return student message

function studentMsg(scores, studentScore){
    const averageScore = getAverage(scores);
    const studentGrade = getGrade(studentScore);

    const isPassed = hasPassingGrade(studentScore);

   if (isPassed) {
        return `Class average: ${averageScore}. Your grade: ${studentGrade}. You passed the course.`;
 } 
  else {
    return `Class average: ${averageScore}. Your grade: ${studentGrade}. You failed the course.`;
  }

}