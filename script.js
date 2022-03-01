    //add functionality in doc

    var friends = ["Chungus", "Amongus", "Fungus", "Bruhngus", "Jeb"];
    
    var locations = ["That Room", "This Room", "Which Room", "What Room", "Whose Room", "La Biblioteca", "Closet of Murder", "Butlery", "Downstairs Room", "Upstairs Room"];
    
    var weapons = ["Jeb", "A witching smile", "A dashing glance", "Ahh real monsters", "Railroad Tracks", "Hobo Stick", "Baby Grand", "heart shaped arrows", "red shell", "Kalimah!", "007 car", "cuppa joe", "Double Rainbow all the way", "the undead", "rusty spoon", "crusty spork", "moldy Mork", "laserbeamz dude", "a1 sauce", "b1 sauce"];

    for (var i = 1; i <= 100; i++) {
        
        var $h3 = ("<h3>Accused " + i + "</h3>"); //Check
       
        $($h3).appendTo("main");
        
        $($h3).click(getAlert(i));

        //alert func
    function getAlert(i) {
        
        var friend = friends[i%5];
        
        var location = locations[i%10];
        
        var weapon = weapons[i%20];
        
        function accuAlert() {
            alert("Accused " + i + ": I accuse " + friends + " with the " + weapons + " in " + locations + "!");
        }
        return accuAlert;
    }
};