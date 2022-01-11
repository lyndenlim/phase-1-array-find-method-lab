// code your solution here
function superbowlWin(objects){
    let winYear = objects.find(objects => objects.result === "W")
    if (winYear){
        return winYear.year
    } else {
        return winYear;
    };
};
