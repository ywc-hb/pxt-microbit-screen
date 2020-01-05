// tests go here; this will not be compiled when this package is used as a library
LCD1IN8.LCD_Init();
LCD1IN8.LCD_Clear();
/*
//Exemple d'affichage d'image

displayImage(displayPikachuRun(), 10, 10, 2);

displayImage(displayPikachuStay(), 70, 10);


//Exemple d'affichage de dialogue

let texte1 = "Coucou ! Comment ca vaaujourd'hui ?";
displayDialogue(3, 75, texte1, 0, 75, true, true);

let texte = "Coucou  tout le monde !";
displayDialogue(100, 3, texte, 0, 75);*/

displayImage(1, 1, 1, -1, true, displayPikachuRun())
displayImage(100, 1, 1, -1, true, displayPikachuStay())
displayImage(1, 40, 1, -1, true, displayPikachuRun())
displayImage(100, 40, 1, -1, true, displayPikachuStay())
displayImage(50, 1, 1, -1, true, displayPikachuRun())
displayImage(50, 40, 1, -1, true, displayPikachuStay())

