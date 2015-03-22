function $(attr){

    if(attr.charAt(0) == "#"){
        return document.getElementById(attr.substr(1));
    }
	else{
        if(attr.charAt(0) == "."){
            return document.getElementsByClassName(attr.substr(1));
        }
		else{
            return document.getElementsByTagName(attr);
        }
    }
}
/*Database */
var mountainDrinks = { "Mountains" : [
						{"name" : "Mudslide"},
						{"name" : "Smith & Wesson"},
						{"name" : "Vodka Tonic"},
						{"name" : "White Russian"},
						{"name" : "Hot Buttered Rum"},
						{"name" : "Hot Toddy"},
						{"name" : "Irish Coffee"},
						{"name" : "Sneaky Pete"}
					]
};

var islandDrinks ={ "Island" : [
						{"name" : "High Ball"},
						{"name" : "Bahama Mama"},
						{"name" : "Blue Hawaiian"},
						{"name" : "Cuba Libre"},
						{"name" : "Daiquiri"},
						{"name" : "Hurricane"},
						{"name" : "Mai Tai"},
						{"name" : "Mojito"},
						{"name" : "Pina Colada"},
						{"name" : "Planter's Punch"},
						{"name" : "Zombie"},
						{"name" : "Margarita"},
						{"name" : "Tamarind & Tequila"},
						{"name" : "Tequila Sunrise"},
						{"name" : "Tequila Sunset"},
						{"name" : "Bloody Mary"},
						{"name" : "Cape Cod"},
						{"name" : "Kamikaze"},
						{"name" : "Sea Breeze"},
						{"name" : "Sex-On-The Beach"}
					]
};

var skylineDrinks = { "Skyline" : [
						{"name" : "Dark and Stormy"},
						{"name" : "Appletini"},
						{"name" : "Cosmopolitan"},
						{"name" : "Lemon Drop Martini"},
						{"name" : "Screwdriver"},
						{"name" :"Vodka Gimlet"},
						{"name" : "Vodka Martini"},
						{"name" : "Vodka Redbull"},
						{"name" : "Manhattan"},
						{"name" : "Old Fashioned"},
						{"name" : "Whiskey Sour"},
						{"name" : "Bloody Maria"},
						{"name" : "Juan Collins"}
					]
};

var countryDrinks = {"Country" : [
				{"name" : "Jack & Coke"},
				{"name" : "Lynchburg Lemonade"},
				{"name" : "Mint Julep"},
				{"name" : "Seven & Seven"},
				{"name" : "Grey Hound"},
				{"name" : "Vodka Collins"}
			]
};
 
var simpleDrinks = {"Simple" : [
				{"name" : "Bloody Mary"},
				{"name" : "Greyhound"},
				{"name" : "Screwdriver"},
				{"name" : "Cuba Libre"},
				{"name" : "Hot Buttered Rum"},
				{"name" : "Planter's Punch"},
				{"name" : "Hot Toddy"},
				{"name" : "Jack & Coke"},
				{"name" : "Seven & Seven"},
				{"name" : "Juan Collins"},
				{"name" : "Margarita"}
			]
};


var classyDrinks = {"Classy" : [
				{"name" : "Appletini"},
				{"name" : "Cosmopolitan"},
				{"name" : "Vodka Tonic"},
				{"name" : "Vodka Collins"},
				{"name" : "Vodka Gimlet"},
				{"name" : "Vodka Martini"},
				{"name" : "White Russian"},
				{"name" : "High Ball"},
				{"name" : "Irish Coffee"},
				{"name" : "Old Fashioned"},
				{"name" : "Sneaky Pete"},
				{"name" : "Whiskey Sour"},
				{"name" : "Dark and Stormy"},
				{"name" : "Mojito"},
				{"name" : "Bloody Maria"}
			]
};


var spicyDrinks = {"Spicy" : [
				{"name" : "Tamarind & Tequila"},
				{"name" : "Zombie"},
				{"name" : "Manhattan"},
				{"name" : "Cape Cod"}
			]
};


var funDrinks = {"Fun" : [
				{"name" : "Kamikaze"},
				{"name" : "Lemon Drop Martini"},
				{"name" : "Mudslide"},
				{"name" : "Sea Breeze"},
				{"name" : "Sex-on-the-Beach"},
				{"name" : "Smith & Wesson"},
				{"name" : "Vodka Redbull"},
				{"name" : "Bahama Mama"},
				{"name" : "Blue Hawaiian"},
				{"name" : "Daiquiri"},
				{"name" : "Hurricane"},
				{"name" : "Mai Tai"},
				{"name" : "Pina Colada"},
				{"name" : "Tequila Sunrise"},
				{"name" : "Tequila Sunset"},
				{"name" : "Lynchburg Lemonade"},
				{"name" : "Mint Julep"}
			]
};

var redDrinks = {"Red" : [
				{"name" : "Bloody Mary"},
				{"name" : "Bahama Mama"},
				{"name" : "Daiquiri"},
				{"name" : "Hurricane"},
				{"name" : "Planter's Punch"},
				{"name" : "Zombie"},
				{"name" : "Jack & Coke"},
				{"name" : "Bloody Maria"},
				{"name" : "Cape Cod"},
				{"name" : "Cosmopolitan"},
				{"name" : "Greyhound"},
				{"name" : "Sea Breeze"},
				{"name" : "Manhattan"}
			]
};


var orangeDrinks = {"Orange" : [
				{"name" : "Juan Collins"},
				{"name" : "Tamarind & Tequila"},
				{"name" : "Tequila Sunrise"},
				{"name" : "Tequila Sunset"},
				{"name" : "Cuba Libre"},
				{"name" : "Dark and Stormy"},
				{"name" : "Hot Buttered Rum"},
				{"name" : "Mai Tai"},
				{"name" : "Pina Colada"},
				{"name" : "High Ball"},
				{"name" : "Hot Toddy"},
				{"name" : "Irish Coffee"},
				{"name" : "Lynchburg Lemonade"},
				{"name" : "Old Fashioned"},
				{"name" : "Seven & Seven"},
				{"name" : "Sneaky Pete"},
				{"name" : "Whiskey Sour"},
				{"name" : "Lemon Drop Martini"},
				{"name" : "Mudslide"},
				{"name" : "Screwdriver"},
				{"name" : "Sex-on-the-Beach"},
				{"name" : "Smith & Wesson"},
				{"name" : "Vodka Collins"},
				{"name" : "Vodka Redbull"},
				{"name" : "White Russian"}
			]
};


var greenDrinks = {"Green" : [
				{"name" : "Margarita"},
				{"name" : "Mojito"},
				{"name" : "Mint Julep"},
				{"name" : "Appletini"},
				{"name" : "Vodka Tonic"},
				{"name" : "Vodka Gimlet"},
				{"name" : "Vodka Martini"}
			]
};


var blueDrinks = {"Blue" : [
				{"name" : "Blue Hawaiian"},
				{"name" : "Kamikaze"}
			]
};

var gigglyDrinks = { "Giggly" : [
				{"name" : "Appletini"},
				{"name" : "Cosmopolitan"},
				{"name" : "Kamikaze"},
				{"name" : "Manhattan"},
				{"name" : "Screwdriver"},
				{"name" : "Sex-on-the Beach"},
				{"name" : "Bahama Mama"},	
				{"name" : "Blue Hawaiian"},
				{"name" : "Daiquiri"},
				{"name" : "Mai Tai"},
				{"name" : "Mojito"},
				{"name" : "Margarita"},
				{"name" : "Lynchburg Lemonade"},
				{"name" : "Mint Julep"}
			]	
};

var happyDrinks = { "Happy" : [
				{"name" : "Hurricane"},
				{"name" : "Jack and Coke"},	
				{"name" : "Pina Colada"},
				{"name" : "Planter's Punch"},
				{"name" : "Zombie"},
				{"name" : "Juan Collins"},
				{"name" : "Tequila Sunrise"},
				{"name" : "Tequila Sunset"},
				{"name" : "Bloody Mary"},
				{"name" : "Cape Cod"},
				{"name" : "Mudslide"},
				{"name" : "Sea Breeze"},
				{"name" : "Vodka Collins"},
				{"name" : "Vodka Redbull"}
			]	
};

var sadDrinks = { "Sad" : [
				{"name" : "Bloody Maria"},
				{"name" : "Tamarind and Tequila"},
				{"name" : "High Ball"},
				{"name" : "Old Fashioned"},
				{"name" : "Seven and Seven"},
				{"name" : "Whiskey Sour"},
				{"name" : "Cuba Libre"},
				{"name" : "Dark and Stormy"},
				{"name" : "Whiskey Sour"},
				{"name" : "Smith and Wesson"},
				{"name" : "Vodka Tonic"},
				{"name" : "Vodka Martini"}
			]	
};
var madDrinks = { "Mad" : [
				{"name" : "Hot Buttered Rum"},
				{"name" : "Hot Toddy"},
				{"name" : "Irish Coffee"},
				{"name" : "Sneaky Pete"},
				{"name" : "Grey Hound"},
				{"name" : "Vodka Gilmet"},
				{"name" : "White Russian"}
			]	
};
/*End of Database*/

/*Button functions*/
var tv;

$("#Happy").onclick=function(){
	tv = "Happy";
	var position = Math.floor((Math.random() * happyDrinks.Happy.length - 1 ) + 0);
	document.getElementsByClassName("yourdrink")[0].innerHTML=happyDrinks.Happy[position].name;
};

$("#Giggly").onclick=function(){
	tv = "Giggly";
	var position = Math.floor((Math.random() * gigglyDrinks.Giggly.length - 1 ) + 0);
	document.getElementsByClassName("yourdrink")[0].innerHTML=gigglyDrinks.Giggly[position].name;
};
$("#Sad").onclick=function(){
	tv = "Sad";
	var position = Math.floor((Math.random() * sadDrinks.Sad.length - 1 ) + 0);
	document.getElementsByClassName("yourdrink")[0].innerHTML=sadDrinks.Sad[position].name;
};
$("#Mad").onclick=function(){
	tv = "Mad";
	var position = Math.floor((Math.random() * madDrinks.Mad.length - 1 ) + 0);
	document.getElementsByClassName("yourdrink")[0].innerHTML=madDrinks.Mad[position].name;
};


$("#Mountains").onclick=function(){
	tv = "Mountains";
	var position = Math.floor((Math.random() * mountainDrinks.Mountains.length - 1 ) + 0);
	document.getElementsByClassName("yourdrink")[0].innerHTML=mountainDrinks.Mountains[position].name;
};
$("#Island").onclick=function(){
	tv = "Island";
	var position = Math.floor((Math.random() * islandDrinks.Island.length - 1 ) + 0);
	document.getElementsByClassName("yourdrink")[0].innerHTML=islandDrinks.Island[position].name;	
};
$("#Skyline").onclick=function(){
	tv = "Skyline";
	var position = Math.floor((Math.random() * skylineDrinks.Skyline.length - 1 ) + 0);
	document.getElementsByClassName("yourdrink")[0].innerHTML=skylineDrinks.Skyline[position].name;
};
$("#Country").onclick=function(){
	tv = "Country";
	var position = Math.floor((Math.random() * countryDrinks.Country.length - 1 ) + 0);
	document.getElementsByClassName("yourdrink")[0].innerHTML=countryDrinks.Country[position].name;	
};

$("#Red").onclick=function(){
	tv = "Red";
	var position = Math.floor((Math.random() * redDrinks.Red.length - 1 ) + 0);
	document.getElementsByClassName("yourdrink")[0].innerHTML=redDrinks.Red[position].name;	
};
$("#Blue").onclick=function(){
	tv = "Blue";
	var position = Math.floor((Math.random() * blueDrinks.Blue.length - 1 ) + 0);
	document.getElementsByClassName("yourdrink")[0].innerHTML=blueDrinks.Blue[0].name;
};

$("#Green").onclick=function(){
	tv = "Green";
	var position = Math.floor((Math.random() * greenDrinks.Green.length - 1 ) + 0);
	document.getElementsByClassName("yourdrink")[0].innerHTML=greenDrinks.Green[position].name;
};

$("#Orange").onclick=function(){
	tv = "Orange";
	var position = Math.floor((Math.random() * orangeDrinks.Orange.length - 1 ) + 0);
	document.getElementsByClassName("yourdrink")[0].innerHTML=orangeDrinks.Orange[position].name;	
};

$("#Fun").onclick=function(){
	tv = "Fun";
	var position = Math.floor((Math.random() * funDrinks.Fun.length - 1 ) + 0);
	document.getElementsByClassName("yourdrink")[0].innerHTML=funDrinks.Fun[position].name;	
};
$("#Spicy").onclick=function(){
	tv = "Spicy";
	var position = Math.floor((Math.random() * spicyDrinks.Spicy.length - 1 ) + 0);
	document.getElementsByClassName("yourdrink")[0].innerHTML=spicyDrinks.Spicy[position].name;	
};
$("#Classy").onclick=function(){
	tv = "Classy";
	var position = Math.floor((Math.random() * classyDrinks.Classy.length - 1 ) + 0);
	document.getElementsByClassName("yourdrink")[0].innerHTML=classyDrinks.Classy[position].name;	
};
$("#Simple").onclick=function(){
	tv = "Simple";
	var position = Math.floor((Math.random() * simpleDrinks.Simple.length - 1 ) + 0);
	document.getElementsByClassName("yourdrink")[0].innerHTML=simpleDrinks.Simple[position].name;	
};

$("#poweranother").onclick=function(){

	if (tv == "Mountains"){
		var position = Math.floor((Math.random() * mountainDrinks.Mountains.length - 1 ) + 0);
		

		document.getElementsByClassName("yourdrink")[0].innerHTML=mountainDrinks.Mountains[position].name;
	}

	else if (tv == "Simple"){
		var position = Math.floor((Math.random() * simpleDrinks.Simple.length - 1 ) + 0);

		document.getElementsByClassName("yourdrink")[0].innerHTML=simpleDrinks.Simple[position].name;}

	else if (tv == "Classy"){
		var position = Math.floor((Math.random() * classyDrinks.Classy.length - 1 ) + 0);
		
		document.getElementsByClassName("yourdrink")[0].innerHTML=classyDrinks.Classy[position].name;}
	else if (tv == "Spicy"){
		var position = Math.floor((Math.random() * spicyDrinks.Spicy.length - 1 ) + 0);
		
		document.getElementsByClassName("yourdrink")[0].innerHTML=spicyDrinks.Spicy[position].name;	}
	else if (tv == "Fun"){
		var position = Math.floor((Math.random() * funDrinks.Fun.length - 1 ) + 0);
		
		document.getElementsByClassName("yourdrink")[0].innerHTML=funDrinks.Fun[position].name;	}
	else if (tv == "Orange"){
		var position = Math.floor((Math.random() * orangeDrinks.Orange.length - 1 ) + 0);
		
		document.getElementsByClassName("yourdrink")[0].innerHTML=orangeDrinks.Orange[position].name;}
	else if (tv == "Green"){
		var position = Math.floor((Math.random() * greenDrinks.Green.length - 1 ) + 0);
		
		document.getElementsByClassName("yourdrink")[0].innerHTML=greenDrinks.Green[position].name;}
	else if (tv == "Blue"){
		var position = Math.floor((Math.random() * blueDrinks.Blue.length - 1 ) + 0);	
	
		document.getElementsByClassName("yourdrink")[0].innerHTML=blueDrinks.Blue[1].name;}
	else if (tv == "Red"){
		var position = Math.floor((Math.random() * redDrinks.Red.length - 1 ) + 0);

		document.getElementsByClassName("yourdrink")[0].innerHTML=redDrinks.Red[position].name;	}
	else if (tv == "Country"){
		var position = Math.floor((Math.random() * countryDrinks.Country.length - 1 ) + 0);
		document.getElementsByClassName("yourdrink")[0].innerHTML=countryDrinks.Country[position].name;}
	else if (tv == "Skyline"){
		var position = Math.floor((Math.random() * skylineDrinks.Skyline.length - 1 ) + 0);
		document.getElementsByClassName("yourdrink")[0].innerHTML=skylineDrinks.Skyline[position].name;}
	else if (tv == "Island") {
		var position = Math.floor((Math.random() * islandDrinks.Island.length - 1 ) + 0);
		document.getElementsByClassName("yourdrink")[0].innerHTML=islandDrinks.Island[position].name;}
	else if (tv == "Mad"){
		var position = Math.floor((Math.random() * madDrinks.Mad.length - 1 ) + 0);
		document.getElementsByClassName("yourdrink")[0].innerHTML=madDrinks.Mad[position].name;}
	else if (tv == "Sad"){
		var position = Math.floor((Math.random() * sadDrinks.Sad.length - 1 ) + 0);
		document.getElementsByClassName("yourdrink")[0].innerHTML=sadDrinks.Sad[position].name;}
	else if (tv == "Giggly"){
		var position = Math.floor((Math.random() * gigglyDrinks.Giggly.length - 1 ) + 0);
		document.getElementsByClassName("yourdrink")[0].innerHTML=gigglyDrinks.Giggly[position].name;}
	else if (tv == "Happy"){
		var position = Math.floor((Math.random() * happyDrinks.Happy.length - 1 ) + 0);
		document.getElementsByClassName("yourdrink")[0].innerHTML=happyDrinks.Happy[position].name;}

	else {}

};



/*End of Button functions*/

