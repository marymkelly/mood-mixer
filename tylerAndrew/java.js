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

var LT;
var TST;
var FLV;

$("#vodka").onclick=function(){
	LT = "vodka";
};
$("#rum").onclick=function(){
	LT = "rum";
};
$("#tequila").onclick=function(){
	LT = "tequila";
};
$("#other").onclick=function(){
	LT = "other";
};






$("#sweet").onclick=function(){
	TST = "sweet";
};

$("#sour").onclick=function(){
	LT = "sour";
};

$("#bitter").onclick=function(){
	LT = "bitter";
};





$("#candy").onclick=function(){
	FLV = "candy";
};

$("#fruit").onclick=function(){
	FLV = "fruit";
};