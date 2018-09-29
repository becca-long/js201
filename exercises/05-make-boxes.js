// Write a function "makeSquare" which is given a size and returns a square of
// that size using asterisks.
// Example:
// makeSquare(5)
// *****
// *****
// *****
// *****
// *****

function makeSquare (size) {
    var line = ''
    for (var i1 = 0; i1 < size; i1++){
        for (var i = 0; i < size; i++){
        line = line + '*'
    }
    line = line + '\n'
}
    return line
}

console.log(makeSquare(5))

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "makeBox" which is given a width and height and returns a
// hollow box of those dimensions.
// Example:
// makeBox(6, 4)
// ******
// *    *
// *    *
// ******

function makeBox (width, height) {
    var firstline = ''
    var hollowline = ''
    var lastline = ''
    for (var i = 0; i < width; i++){
        firstline = firstline + '*'
    }
    firstline = firstline + '\n'
    for (var i2 = 0; i2 < (height - 2); i2++){
        hollowline = hollowline + '*'
        for (var i3 = 0; i3 < (width - 2); i3++){
            hollowline = hollowline + ' '
        }
        hollowline = hollowline + '*' + '\n'
    }
    for (var i4 = 0; i4 < width; i4++){
        lastline = lastline + '*'
    }
    var hollowBox = firstline + hollowline + lastline
    return hollowBox
}

console.log(makeBox(6, 4))

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "makeBanner" which is given some text and returns a banner
// with a border surrounding the text. The border should stretch to the length
// of the text.
// Example:
// makeBanner('Welcome to DigitalCrafts')
// ****************************
// * Welcome to DigitalCrafts *
// ****************************

function makeBanner (text){
    var topBanner = ''
    var middleBanner = ''
    var bottomBanner = ''
    
    for (var i = 0; i = text.length; i++){
        topBanner = topBanner + '*'
    }
    topBanner = topBanner + '\n'
    
    middleBanner = '* ' + text + ' *' + '\n'
   
    for (var i2 = 0; i2 = (width + 4); i2++){
        bottomBanner = bottomBanner + '*'
    }
    bottomBanner = bottomBanner + '\n'
    
    var totalBanner = topBanner + middleBanner + bottomBanner
    return totalBanner
}

console.log(makeBanner('testing123'))


function makeBannertest (text){
    var width = arguments.length
    var topBanner = ''
    var middleBanner = ''
    var bottomBanner = ''
    
    for (var i = 0; i = (width + 4); i++){
        topBanner = topBanner + '*'
    }
    topBanner = topBanner + '\n'
    
    middleBanner = '* ' + text + ' *' + '\n'
   
    var totalBanner = topBanner + middleBanner + bottomBanner
    return totalBanner
}

