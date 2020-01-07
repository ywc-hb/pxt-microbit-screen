// tests go here; this will not be compiled when this package is used as a library
LCD1IN8.LCD_Init();
LCD1IN8.LCD_Clear();

//Exemple d'affichage d'image

displayImage(5, 5, displayPikachuRun(), 2)
displayImage(80, 5, displayPikachuStay(), 2, false)

//displayImage(1, 1, 1, displayFullScreenTwo(), false)

//Exemple d'affichage de texte

displayDialogue(3, 64, "Vous pouvez afficher  du texte...", 50, 0)
displayDialogue(80, 77, "en gras, ", 0, 100, true)
displayDialogue(3, 90, "souligne,", 0, 50, false, true)
displayDialogue(63, 90, " ou les deux!", 0, 0, true, true)
