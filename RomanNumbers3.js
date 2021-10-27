
module.exports = {

ArabicToRoman:function(n) {


if(Number.isInteger(n) != true) {        
    throw new TypeError("n is not an integer")
}

ArabicNumber = n.toString()
ArabicNumber = ArabicNumber.split("")
ArabicLength = ArabicNumber.length
result = ""

console.log("Arabic Number is " + ArabicNumber)

for (i = ArabicLength - 1; i >= 0; i--) {


    
}

return result

}

}
