// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    if (someValue > 42)
        return (someValue - 42)
    else (someValue < 42)
        return (42 - someValue)
}
function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
}
function distanceTravelledInFeet(startValue, endValue) {
    if (startValue > endValue)
        return (startValue - endValue) * 264
    else (startValue < endValue) 
        return (endValue - startValue) * 264
}
function calculatesFarePrice(startValue, endValue) {
    if (distanceTravelledInFeet(startValue, endValue) < 400)
        return 0
    else if (distanceTravelledInFeet(startValue, endValue) > 400 && distanceTravelledInFeet(startValue, endValue) < 2000)
        return ((distanceTravelledInFeet(startValue, endValue) - 400) * 2) / 100
    else if (distanceTravelledInFeet(startValue, endValue) > 2000 && distanceTravelledInFeet(startValue, endValue) < 2500)
        return 25
    else if (distanceTravelledInFeet(startValue, endValue) > 2500)
        return "cannot travel that far"
}