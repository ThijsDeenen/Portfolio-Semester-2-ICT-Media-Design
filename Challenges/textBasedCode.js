confirm("De procesbeschrijving kan niet geopend worden zolang dit verhaal in beeld is. Als je genoeg verhaal hebt gezien en naar het proces wil gaan, kan je simpelweg op 'Cancel klikken.'")
confirm("The sound of a car alarm wakes you up. After looking out of the window to see why, 5 men are throwing themselves at a car with a little girl in the backseat.");
var choice1 = prompt("What do you do? Call the police, or find a weapon");
if (choice1 === "call the police"){
    confirm("You try to call the police, but they don't answer. That's odd. Why would the police ignore a 911 call?");
    confirm("Something fishy is going on, but those guys are still out there harrassing that car. The screams of the girl start getting to you");
    var choice11 = prompt("What do you want to do? Grab a weapon, or get to car?");

    if (choice11 === "find a weapon"){
        confirm("You remember a couple of places to grab a weapon in your house.");
        var choice111 = prompt("where to you try and find a weapon? The kitchen, or the garage?");

        if (choice111 === "the kitchen"||"kitchen"){
            confirm("You run to the kitchen and find the cleaver which you borrowed from your neighbour yesterday to use for the beef you had as a meal. Quite intimidating, but is it really necessary to help this girl? Do I really want to do this?");
            confirm("You start hearing... is that chanting? sounds more like growling... men?")
            var choice1111 = prompt("You want to check out the noise. What do you do? Look through window, or check security camera feed?");
        }
    }
    else if(choice11 === "get to car"){
        confirm("you go to your garage. When you open your door, you see some weird looking guys... munching... on a dead body?...");
        confirm("They spot you and start running at you.")
    }
}
else if (choice1 === "find a weapon"){
    var choice21 = prompt("where to you try and find a weapon? The kitchen, or the garage?");
    if (choice21 === "the kitchen"||"kitchen"){
        confirm("You run to the kitchen and find the cleaver which you borrowed from your neighbour yesterday to use for the beef you had as a meal. Quite intimidating, but is it really necessary to help this girl? Do I really want to do this?");
        confirm("You start hearing... is that chanting? sounds more like growling... men?")
        var choice211 = prompt("You want to check out the noise. What do you do? Look through window, or check security camera feed?");
    }
}
