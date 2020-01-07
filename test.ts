// tests go here; this will not be compiled when this package is used as a library
LCD1IN8.LCD_Init();
LCD1IN8.LCD_Clear();

//Exemple d'affichage d'image

displayImage(5, 5, displayPikachuRun(), 2)
displayImage(80, 5, displayPikachuStay(), 2, false)

//displayImage(1, 1, 1, displayFullScreenTwo(), false)

//Exemple d'affichage de texte

displayDialogue(3, 64, "Coucou tout le monde !", 0, 0)
displayDialogue(55, 79, "Bonsoir", 0, 100, true)
displayDialogue(65, 94, "Hey !", 0, 50, true, true)
