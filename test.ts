// tests go here; this will not be compiled when this package is used as a library
LCD1IN8.LCD_Init();
LCD1IN8.LCD_Clear();

//Exemple d'affichage d'image

displayImage(5, 5, 2, displayPikachuRun(), true)
displayImage(80, 5, 2, displayPikachuStay(), false)

//Exemple d'affichage de texte

displayDialogue(2, 64, "Coucou tout le monde !", 0, 0)
displayDialogue(55, 79, "Bonsoir", 0, 0, true)
displayDialogue(65, 94, "Hey !", 0, 0, true, true)