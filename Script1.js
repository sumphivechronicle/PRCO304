


$(document).ready(function () {
    var roll = 0;
    var assists = 0;  
    var intfr = 0;
    var attacks = 0;
    var attackMod = 0;
    var hitMod = 0;
    var turnNo = 0;
    
    $(function () {
        $('#carousel-example-generic').carousel();
    });

    $("#mainContent_Tools_actionPhase").hide();
    $("#mainContent_Tools_endPhase").hide();
    $("#viewScenario").hide();
    

    $("#homeScreenButton,#campaignScreenButton,#gangScreenButton").click(function () {
        $(".active").removeClass("active");
        $(this).addClass(1000, "active");
    });
    $("#longRange").click(function () {
        $(this).addClass("active");
        $("#shortRange").removeClass("active");
    });
    $("#newTurn").click(function () {
     
        alert("Do you wish to end this turn?");
        turnNo++;
        $("#turnCount").text("Turn Number:" + turnNo);
      
    });
    $("#d6Roll").click(function () {
        var randRoll = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
        alert("You rolled a: " +randRoll);
    });
    $("#d3Roll").click(function () {
        var randRoll = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
        alert("You rolled a: " + randRoll);
    });
    $("#injuryRoll").click(function () {
        var randRoll = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
        var injRoll;
        switch (randRoll) {
            case 1:
                injRoll = "Flesh Wound";
                alert(injRoll);
                break;
            case 2:
                injRoll = "Flesh Wound";
                alert(injRoll);
                break;
            case 3:
                injRoll = "Down";
                alert(injRoll);
                break;
            case 4:
                injRoll = "Down";
                alert(injRoll);
                break;
            case 5:
                injRoll = "Down";
                alert(injRoll);
                break;
            default:
                injRoll = "Out of action";
                alert(injRoll);
                break;               


        }
        

    });
   

    $("#longRange").click(function () {
        $(this).addClass("active");
        $("#shortRange").removeClass("active");
    });
    $("#newScenario").click(function () {
        var scenarioId = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
        switch (scenarioId) {
            case 1:
                $("#attackOrDefend").hide();
                $("attackerOrDefender").text("")
                $("#scenarioName").text("Stand Off");                
                $("#battlefield").text("Standard Battlefield Set-Up Rules.");
                $("#crews").text("Both Players use Custom Selection(10).");
                $("#homeTurfTitle").hide();
                $("homeTurf").text("")
                $("#tacticsCard").text("Each player may select 2 gang cards. If one players starting credit value is less than their opponent's, they recieve an additional tactics card per 100 credit difference.");
                $("#deployment").text("Standard Deployment Rules.");
                $("#objectives").text("Take Out as many enemy models as possible. 3 points for a Leader, 2 points for a champion, 1 point for any other gang member.");
                $("#endingTheBattle").text("If either gang has no fighters at the end of the battlefield at the end of any round, the battle immediately ends");
                $("#victory").text("The gang with most points at the end of the battle wins. If both gangs have the same ammount of points, it is a draw.");
                $("#rewards").text("D6x10 credits for the winner. D3x5 credits for the looser. D6x5 for each player in the event of draw.");

                break;
            case 2:
                $("#scenarioName").text("Looters");
                $("attackOrDefend").show();
                $("#attackerOrDefender").text("Players roll off and the winners decides who is the attacking or defending.");
                $("#battlefield").text("Standard Battlefield Set-Up Rules.");
                $("#crews").text("Attacker uses custom selection. Defender uses random Selection (D3+4), the rest of the deck is set aside to form their Reinforcements deck.");
                $("homeTurfTitle").show();
                $("#homeTurf").text("Defender Has Home-Turf Advantage");
                $("#tacticsCard").text("Attacker choses 2 tactic cards. The defender shuffles their deck and selects 2 tactic cards randomly" +
                    "If one players starting credit value is less than their opponent's, they may draw an additional Tactics card per 100 credit difference");
                $("#deployment").text("The defender places up to four loot caskets anywhere on the battlefield. They then set up their crew. Each fighter must be within 3 inches of one of the loot caskets. " +
                    "The Attacker picks one edge of the battlefield to be their escape route. They then set up their entire crew within 6 inches of that edge");
                $("#objectives").text("Attackers are attempting to secure the four loot caskets off the battlefied via escape route. The defenders must stop Them." +
                    "Only 4 caskets can be claimed");
                $("#reinforcements").text("At the end of each phase the defender recieves Reinfocements."+
                "1 random fighter arrives at the start of the first end phase, 2 the start of the second End phase, and so on.");
                $("#endingTheBattle").text("If either gang has no fighters on the battlefield at the end of any round, the battle immediately ends");
                $("#victory").text("The Attacker wins if, at the end of the battle, they claimed more loot castkets than are left on the battlefield. Otherwise the defender wins");              
                $("#rewards").text("D3X10 credits for each casket claimed by the attacker. These are taken form the defenders stash. The attacker's gains cannot exceed the defender's losses.");
                break;
            case 3:
                $("#scenarioName").text("Ambush");
                $("#attackOrDefend").show();
                $("#attackerOrDefender").text("Players roll of and the winners decides whether they attacking or defending");
                $("#battlefield").text("Standard Battlefield Set-Up Rules except no large piece of terrain may be placed within 12 inches of the centre of the battlefield." +
                    "Scatter terrain can still be placed within this area, however in this scenario the defender may place all of the scatter terrain." +
                    "The defenders deployment zone is anywhere within 6 inches of the centre of the battlefield");
                $("#crews").text("The attacker uses custom selection. The defender uses random selection(D3+5)");
                $("#homeTurfTitle").hide();
                $("homeTurf").text("")
                $("#tacticsCard").text("Attacker choses 2 tactic cards. The defender shuffles their deck and selects 2 tactic cards randomly" +
                    "If one players starting credit value is less than their opponent's, they may draw an additional Tactics card per 100 credit difference");
                $("#deployment").text("The defender goes through the fighters in their crew one at a time, in an order of their choosing, rolling a D6 for each" +
                    "On a 1-5 they set up their fighter in their deployment zone. On a 6 that fighter is set aside." +
                    "The attacker then set up their crew anywhere on the battlefield. Attacking fighters must be set up at least 12 inches away any defenders" +
                    "or at least 6 inches away from any defenders in no defenders can draw a line of sight to them. After attackers have set up, the defender sets up" +
                    "any of their fighters who were previously set aside. These fighters can be set up anywhere on the battlefield, as long as they are not Engaged with an enemy fighter.");
                $("#objectives").text("The attackers are attempting to take out as many defenders as possible, the defenders are trying to take out as many attackers as possible or escape.");
                $("#ReinforcemtentsTitle").hide();
                $("#reinforcements").text("");
                $("#endingTheBattle").text("If either gang has no fighters left on the battlefield at the end of any round, the battle ends immediately.");
                $("#victory").text("The attacker wins if, at the end of the battle, more defenders were taken out of action than escaped (defenders that fled the battlefield do not count)." +
                    "Otherwise the defender wins");
                $("#rewards").text("Stand Off");
                break;
            case 4:
                $("#scenarioName").text("Border Dispute");               
                $("#attackOrDefend").hide();
                $("attackerOrDefender").text("")
                $("#battlefield").text("Standard Battlefield Set-Up Rules");
                $("#crews").text("Both players use the Random Selection(D3+3) method. The rest of each player's deck is set out to form their Reinforcements deck");
                $("#homeTurfTitle").hide();
                $("homeTurf").text("")
                $("#tacticsCard").text("Unless one player has a lower Gang Rating than their opponent, as follows, neither player has any Tactics cards at the start of the battle. " +
                    "Instead, at the start of each round after the first, each player draws a random Tactics card from their deck, building a deck of cards as they progress and using them " +
                    "as they wish during the game. If, during the pre-battle sequence, one players's Gang Rating is less that their opponents, then they may randomly draw and additional Tactics card for each full 10 credits difference.");
                $("#deployment").text("The scenario uses the standard rules for deployment with the following Exeptions:" + "The players roll off and the winner pickes one half of the battlefield to be their turf, " +
                    "then draws a card at random from their starting crew and sets up that fighter in their turf, 1 inches away from the centre on the battlefield" +
                    "of the battlefield. The other player then does the same in the oppisite half of the battlefield (their turf). Then, the starting with the player that setup up the first fighter, " +
                    "the players take turns stetting up the remaining fighters in their starting crew using the standard rules for deployment. Finally, each player places a gang relic in their own turf. This can either " +
                    "This can either be a generic token or a small terrian feature. The gang relic must be set up at least 5 inches away from any of the battlefield.");
                $("#objectives").text("Each gang is seeking their Turf and drive off the other gang-and the best way to do this is to defile the other gang's relic.");
                $("#ReinforcemtentsTitle").show();
                $("#endingTheBattle").text("If either gang has no fighters left on the battlefield at the end of any round, the battle ends immediately.");
                $("reinforcements").text("At the start of the End phase, each player rolls a D3 and recieves that many reinforcements. These are depolyed one at a time");
                $("#victory").text("If One gang has any fighters on the battlefield-not including Seriously injured fighters-at the end of the battle, and their gang relic " + 
                    "has not been defiled they are victorious. If the both gangs' relics have been defiled, the battle ends in a draw.");
                $("#rewards").text("If the gangs relic was not defiled D6x10 credits. Otherwise, it gains D3x10 credits");
                break;
            case 5:
                $("#scenarioName").text("Sabotage");
                $("attackOrDefend").show();
                $("#attackerOrDefender").text("The scenario uses the Sneak Attack rules. In this scenario, one gang is the attacker and the other is the defender. Players roll off and the winner decides whether they will attack or defend");
                $("#battlefield").text("The defender places a piece of terrain, which should be at least 2 inches square, to represent the attacker's target. It is reccomended that this is set up as close to the centre of the battlefield as possible " +
                    "Then, the battlefield is set up using the standard Battlefield Set-up rules");
                $("#crews").text("The attacker uses the Custom Selection Method to choose their crew. The defender's starting crew are their sentries. They use the random Selection (5) method, but before drawing their crew, they can declare and number " +
                    "of fighters unfit (or too important) for sentry duty, removing them from their deck-they are returned to the deck after the starting crew has been drawn, then the rest of the deck is set to one side to from their Reinforcements deck");
                $("homeTurfTitle").show();
                $("#homeTurf").text("The defender has the Home Turf Advantage.");
                $("#tacticsCard").text("The attacker can choose up to 3 Tactics cards. The defender shuffles their deck and draws 2 cards at random- however, they cannot be played unil the alarm has been raised. " +
                    "If, during the pre-battle sequence, one players's Gang Rating is less that their opponents, then they may randomly draw and additional Tactics card for each full 10 credits difference.");
                $("#objectives").text("The attackers are attempting to destroy their targets and deal a blow to their target's territory The defenders must stop this.");
                $("#reinforcements").text("In the round that the alarm is raised, and in each subsequent roun, D6 Reinforcements arrive until the entire gang has arrived.");
                $("#endingTheBattle").text("If either gang has no fighters left on the battlefield at the end of any round, the battle ends immediately.");
                $("#victory").text("The attackers wins if, at the end of the battle, they have destroyed the target and fewer than half of their crew have been taken Out of action. If they have not destroyed the target, the defender wins." +
                    "Otherwise, the battle ends in a draw");
                $("#rewards").text("If the attackers destroy the target, they gain D6x10 credits. If they do not, the defenders gain D6x10 credits.");
                break;
            default:
                $("#scenarioName").text("Rescue Mission");
                $(attackOrDefend).show();
                $("#attackerOrDefender").text("The scenario uses the Sneak Attack rules. In this scenario, one gang is the attacker and the other is the defender. Players roll off and the winner decides whether they will attack or defend");
                $("#battlefield").text("Standard Battlefield Set-Up Rules");
                $("#crews").text("The attacker uses the Custom Selection Method to choose their crew. The defender's starting crew are their sentries. They use the Random selection(5) method, but before drawing their crew they can remove any number of fighters " +
                    "from their decks - they are returned to the deck after the starting crew has been drawn, then the rest of the deck is set tot one side to form the Reinforcements deck");
                $("homeTurfTitle").show();
                ("#homeTurf").text("The defender has the home Turd Advantage.");
                $("#tacticsCard").text("The attacker can choose up to 3 Tactics cards. The defender shuffles their deck and draws 2 cards from it at random - however, they cannot be played until the alarm is raised. " +
                    "If, during the pre-battle sequence, one players's Gang Rating is less that their opponents, then they may randomly draw and additional Tactics card for each full 10 credits difference.");
                $("#objectives").text("The attackers are attempting to rescue the Captive(s) - preferably without the defenders noticing.");
                $("#reinforcements").text("In the round that the alarm is raised, and in each subsequent round, D6 Reinforcements arrvie until the entire gang has arrived.")
                $("#endingTheBattle").text("If either gang has no fighters left on the battlefield at the end of any round, the battle ends immediately.");
                $("#victory").text("The attacker wins if, at the end of the battle, all of their fighters held captive were freed and have taken flight. If no captives took flight, the defender wins. Otherwise, the game is a draw.");
                $("#rewards").text("");
                break;               

        };
        $("viewScenario").show();

    });



    $("#shortRange").click(function () {
        $(this).addClass("active");
        $("#longRange").removeClass("active");
    });

    $("#partialCover").click(function () {
        $(this).addClass("active");
        $("#fullCover").removeClass("active");
    });

    $("#fullCover").click(function () {
        $(this).addClass("active");
        $("#partialCover").removeClass("active");
    });
    //changes the game tools board.
    $("#priorityPhaseBtn").click(function () {
        $(this).addClass("active");
        $("#actionPhaseBtn").removeClass("active");  
        $("#endPhaseBtn").removeClass("active");
        $("#mainContent_Tools_priorityPhase").show();
        $("#mainContent_Tools_actionPhase").hide();
        $("#mainContent_Tools_endPhase").hide();
    });
    $("#actionPhaseBtn").click(function () {
        $(this).addClass("active");
        $("#priorityPhaseBtn").removeClass("active");
        $("#endPhaseBtn").removeClass("active");
        $("#mainContent_Tools_actionPhase").show();
        $("#mainContent_Tools_priorityPhase").hide();
        $("#mainContent_Tools_endPhase").hide();
    });

    $("#endPhaseBtn").click(function () {
        $(this).addClass("active");
        $("#priorityPhaseBtn").removeClass("active");
        $("#actionPhaseBtn").removeClass("active");
        $("#mainContent_Tools_priorityPhase").hide();
        $("#mainContent_Tools_actionPhase").hide();
        $("#mainContent_Tools_endPhase").show();
       

    });

    $("#assisted").click(function () {
        interferance = 0;
        if (assists <= 10) {
            assists++;     
        }
        else {
            assists = 0;
        } 
        intfr = 0;
        $(this).text("Assisted " + "(" + assists + ")");
        $("#interference").text("Interference");
        return assists;

    });
    //sets the assited modifier to active
    $("#interference").click(function () {
        if (intfr <= 10) {
            intfr++;
        }
        else {
            intfr = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
        }
        assists = 0;        
        $(this).text("Interference " + "(" + intfr + ")");
        $("#assisted").text("Assisted");
        return intfr;

    });

    $("#dualWeapon").click(function () {
        $(this).toggleClass("active");       
    });
    $("#charged").click(function () {
        $(this).toggleClass("active");
    });

   

    //the function is triggered by a user clicking an item on the table
    $("#meleeweaponTable tbody tr").click(function () {
        //puts row contents into an array
        attacks = 0;
        var tableData = $(this).children("td").map(function () { return $(this).text() }).get();
        var i = 0;
        while (i <= 9) {
            var td;
            td += "," + tableData[i];
            i++;
        }
        var weaponskill = $("input[name='wsSel']:checked").val();
        attacks = $("input[name='attackSel']:checked").val();
       
        //turns null values to zero
        var wpnValues = td.split(",");
        wpnValues.shift();
        if (isNaN(parseInt(wpnValues[3])) == true) {
            wpnValues[3] = 0;
        }
        if (isNaN(parseInt(wpnValues[4])) == true) {
            wpnValues[4] = 0;
        }
        if ($("#dualWeapon").hasClass("active")) {
            attacks++;
            
        }
        if ($("#charged").hasClass("active")) {
            attacks++;
        }
        
        while (attacks>0) {
        //modifies a the dice roll
            var roll = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
            roll = (roll + intfr);
            roll = (roll + assists);
        
            if (weaponskill <= roll) {
                $("#meleetest").append(roll);
                alert("hit");               
            }
            else {
                alert("missed");
                $("#meleetest").append(roll);
            }
            attacks--;
            roll = 0;
        }      
        intfr = 0;
        assists = 0;


    });      

  


    //the function is triggered by a user clicking an item on the table
    $("#weaponTable tbody tr").click(function () {
        jam = false;
        var n = 0;
       

        //puts row contents into an array
        var tableData = $(this).children("td").map(function () {return $(this).text()}).get();
        var i = 0;
        while (i <= 9) {
            var td;
            td += "," + tableData[i];
            i++;
        }

        var ballisticskill = $("input[name='bsSel']:checked").val();
        //turns null values to zero
        var wpnValues = td.split(",");
        wpnValues.shift();
        if (isNaN(parseInt(wpnValues[3])) == true) {
            wpnValues[3] = 0;
        }
        if (isNaN(parseInt(wpnValues[4])) == true) {
            wpnValues[4] = 0;
        }
        

        //Rolls a 6 sided dice and then modifies it
        roll = Math.floor(Math.random() * (6 - 1 + 1)) + 1;        
        
        
        if ($('#shortRange').hasClass('active')) {

           hitMod = (hitMod + parseInt(wpnValues[3]));                 
        } else {
            hitMod = (hitMod + parseInt(wpnValues[4]))                   
        }
        if ($('#partialCover').hasClass('active')) {
            hitMod = (hitMod - 1);       

        }
        if ($('#fullCover').hasClass('active')) {
           hitMod = (hitMod - 2);                
        }
        //checks to see if the weapon fires multiple shots
        var Rf = wpnValues[9].includes("Rapid Fire");
       var Rf2 = wpnValues[9].includes("(2)");
        var Rf3 = wpnValues[9].includes("(3)");

        if (Rf3 == true) {
             n = 3;
            }
        else if (Rf2 == true) {
            n = 2;
        }        
        else {
            n = 1;
        }
        while (n > 0) {
            fpDice = Math.floor(Math.random() * (6 - 1 + 1)) + 1;


            switch (fpDice) {
                case 1:
                    attacks++;
                    break;
                case 2:
                    attacks = (attacks + 2);
                    break;
                case 3:
                    attacks++;
                    break;
                case 4:
                    attacks = (attacks +2);
                    break;
                case 5:
                    attacks = (attacks + 3);
                    break;
                case 6:
                    attacks++;
                    jam = true;
                    
                        var x = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
                        var ammoRoll = parseInt(wpnValues[8]);
                        if (x <= ammoRoll) {
                            alert("ammo roll passed");
                            jam = false;
                        }
                        else {
                            alert("Gun jammed");
                        }
                    
                    break;
            }
            n--;
        
        }
        if (Rf != true) {
            attacks = 1;
        }

        if (ballisticskill <= (roll+hitMod )) {           
            if (attacks == 1) {
                alert("hit , target is pinned");

            }
            else {
                alert(attacks + " hits, target is pinned");
            }
        }
        else {
            alert("shot missed");
        }
        attacks = 0;
        hitmod = 0;

               
    });

});




    
   





    