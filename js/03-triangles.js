var side1 = +prompt('Enter side 1')
var side2 = +prompt('Enter side 2')
var side3 = +prompt('Enter side 3')

if (side1 + side2 > side3 &&
    side2 + side3 > side1 &&
    side1 + side3 > side2) {

        console.log('Valid triangle')

    if (side1 === side2 && side2 === side3) {
        console.log('Shve Tslaot')
    } else if (side1 === side2 || side2 === side3 || side1 === side3){
        console.log('Shve Shokiiam')
    }

    if (side1 ** 2 + side2 ** 2 === side3 ** 2 ||
        side2 ** 2 + side3 ** 2 === side1 ** 2 ||
        side1 ** 2 + side3 ** 2 === side2 ** 2){
            console.log('Yeshard Zavith')
    }

} else {
    console.log('Not a triangle')
}