function displayImage(x_depart: number, y_depart: number, 
    picture: { listOfColorNumber: number[][], listOfColor: number[][], paletteOfColors: number[], width: number, height: number, numberOfOccurence: number }, 
    taille_pixel: number = 1, transparency: boolean = true) {
    /*
    Explication des arguments : 
        x_depart, y_depart --> coordonnée de l'image (voir avec taille pixel)
        picture --> fonction correspondant à l'image à afficher
        taille_pixel --> taille de chaque pixel
        transparency --> active ou non la transparence de l'image
    */

    //Définition de la taille de chaque pixel (via fonction DOT_PIXEL)
    let affiche_pixel;
    switch (taille_pixel) {
        case 2:
            affiche_pixel = DOT_PIXEL.DOT_PIXEL_2;
            break;

        case 3:
            affiche_pixel = DOT_PIXEL.DOT_PIXEL_3;
            break;

        case 4:
            affiche_pixel = DOT_PIXEL.DOT_PIXEL_4;
            break;

        default:
            affiche_pixel = DOT_PIXEL.DOT_PIXEL_1;
            break;
    }

    let noPx = 0;
    for(let i = 0; i < (picture.listOfColorNumber.length - 1) * (picture.listOfColorNumber[0].length) + picture.listOfColorNumber[picture.listOfColorNumber.length - 1].length; i++) {
        if (!transparency || (picture.listOfColor[Math.trunc(i / 100)][i % 100] != 0 && transparency)) {
            for (let j = 0; j < picture.listOfColorNumber[Math.trunc(i / 100)][i % 100]; j++) {
                LCD1IN8.DrawPoint(x_depart + (noPx % picture.width) * taille_pixel, y_depart + Math.trunc(noPx / picture.width) * taille_pixel,
                    picture.paletteOfColors[picture.listOfColor[Math.trunc(i / 100)][i % 100]], affiche_pixel);
                noPx ++
            }
        }

        else {
            noPx += picture.listOfColorNumber[Math.trunc(i / 100)][i % 100]
        }
    }
    
    LCD1IN8.LCD_DisplayWindows(x_depart - taille_pixel, y_depart - taille_pixel, (picture.width - 1) * taille_pixel + x_depart, (picture.height - 1) * taille_pixel + y_depart)
    delete picture.listOfColor
    delete picture.listOfColorNumber
    delete picture.paletteOfColors
    delete picture.numberOfOccurence
    delete picture.width
    delete picture.height
}
