
module.exports = {

ArabicToRoman:function(n) {


if(Number.isInteger(n) != true) {        
    throw new TypeError("n is not an integer")
}

ArabicNumber = n.toString()
ArabicNumber = ArabicNumber.split("")
ArabicLength = ArabicNumber.length
result = ""

for (i = ArabicLength - 1; i >= 0; i--) {

    SelectedNumber = ArabicNumber[i]


    switch(SelectedNumber) {
        case "0": break;
        case "1":
        if(i === 3) {
            result = result.concat("M"); break;
        }
        else if(i === 2) {
            result = result.concat("C"); break;
        }
        else if(i === 1) {
            result = result.concat("X"); break;
        }
        else if(i === 0) {
            result = result.concat("I"); break;
        }
    }  
    console.log("I is" + i)  
}

return result

}

}
