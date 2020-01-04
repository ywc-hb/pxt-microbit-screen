// tests go here; this will not be compiled when this package is used as a library
LCD1IN8.LCD_Init();
LCD1IN8.LCD_Clear();


//Exemple d'affichage d'image

let pika_run = displayPikachuRun();
displayImage(10, 10, 2, pika_run.listOfColor, pika_run.paletteOfColors, pika_run.width, pika_run.height, pika_run.numberOfOccurence, 1, true);

LCD1IN8.LCD_DisplayWindows(8, 8, (pika_run.width - 1) * 2 + 10, (pika_run.height - 1) * 2 + 10);

let pika_stay = displayPikachuStay();
displayImage(70, 10, 2, pika_stay.listOfColor, pika_stay.paletteOfColors, pika_stay.width, pika_stay.height, pika_stay.numberOfOccurence, -1, false);

LCD1IN8.LCD_DisplayWindows(68, 8, (pika_stay.width - 1) * 2 + 10 + 60, (pika_stay.height - 1) * 2 + 10);


//Exemple d'affichage de dialogue

let texte = "Coucou tout le monde ! Comment allez-vous ?";
displayDialogue(5, 75, texte, 0, 75);

delete pika_run.listOfColor
delete pika_run.paletteOfColors
delete pika_stay.listOfColor
delete pika_stay.paletteOfColors

// tests go here; this will not be compiled when this package is used as a library
LCD1IN8.LCD_Filling(0)
LCD1IN8.LCD_Clear();


//Exemple d'affichage d'image

let pika_run1 = displayPikachuRun();
displayImage(10, 10, 2, pika_run1.listOfColor, pika_run1.paletteOfColors, pika_run1.width, pika_run1.height, pika_run1.numberOfOccurence, 1, true);

LCD1IN8.LCD_DisplayWindows(8, 8, (pika_run1.width - 1) * 2 + 10, (pika_run1.height - 1) * 2 + 10);

let pika_stay1 = displayPikachuStay();
displayImage(70, 10, 2, pika_stay1.listOfColor, pika_stay1.paletteOfColors, pika_stay1.width, pika_stay1.height, pika_stay1.numberOfOccurence, -1, false);

LCD1IN8.LCD_DisplayWindows(68, 8, (pika_stay1.width - 1) * 2 + 10 + 60, (pika_stay1.height - 1) * 2 + 10);


//Exemple d'affichage de dialogue

let texte1 = "Coucou tout le monde ! Comment allez-vous ?";
displayDialogue(5, 75, texte1, 0, 75);



