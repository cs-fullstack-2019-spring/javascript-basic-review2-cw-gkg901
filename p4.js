//Create a function that returns 5 more than the integer sent to it. Assume the user only enters integers. Create a different function that adds " is awesome" to any strings sent to it. Challenge: If the wrong data type is sent to one of the functions print "ERROR".


function addFive(num)
{
    while (isNaN(num)) {
        console.log("ERROR")
    }
    return num + 5;
}

console.log(addFive(10));




function awesome(x)
{
    return (x + " is awesome")
}

console.log(awesome("Gerren"));
