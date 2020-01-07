// tests go here; this will not be compiled when this package is used as a library
LCD1IN8.LCD_Init();
LCD1IN8.LCD_Clear();
/*
//Exemple d'affichage d'image
displayImage(1, 1, 1, -1, true, displayPikachuRun())
displayImage(100, 1, 1, -1, true, displayPikachuStay())
displayImage(1, 40, 1, -1, true, displayPikachuRun())
displayImage(100, 40, 1, -1, true, displayPikachuStay())
displayImage(50, 1, 1, -1, true, displayPikachuRun())
displayImage(50, 40, 1, -1, true, displayPikachuStay())
*/

let test = {
    listOfColorNumber: [[2, 2, 2, 2, 2]], 
    listOfColor: [[1, 0, 1, 0, 1]],
    paletteOfColors: [1, 64512], 
    width: 10,
    height: 1,
    numberOfOccurence: 10
};

displayImage(50, 40, 2, test, true)
displayImage(50, 45, 2, displayConv(), false)
