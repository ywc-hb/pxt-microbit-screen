function displayImage(x_depart: number, y_depart: number, image: any, taille_pixel: number, 
    transparency: boolean, replace_color: number) {
    /*
    Explication des arguments : 
        x_depart, y_depart --> coordonnée de l'image (voir avec taille pixel)
        taille_pixel --> taille de chaque pixel
        transparency --> affiche la couleur contenue dans replace_color si 'true', sinon ne fait rien
        replace_color --> couleur à afficher à la place de la couleur de transparence, la couleur par défaut si -1
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

    //Affichage des points 1 par 1
    for (let i = 0; i < image.numberOfOccurence; i++) {
        if (image.listOfColors[Math.trunc(i / 100)][i % 100] != 0) {
            LCD1IN8.DrawPoint(x_depart + (i % image.width) * taille_pixel, y_depart + Math.trunc(i / image.width) * taille_pixel,
                image.paletteOfColors[image.listOfColors[Math.trunc(i / 100)][i % 100]], affiche_pixel);
        }

        else if (!transparency) {
            if (replace_color != -1) {
                LCD1IN8.DrawPoint(x_depart + (i % image.width) * taille_pixel, y_depart + Math.trunc(i / image.width) * taille_pixel,
                    replace_color, affiche_pixel);
            }

            else {
                LCD1IN8.DrawPoint(x_depart + (i % image.width) * taille_pixel, y_depart + Math.trunc(i / image.width) * taille_pixel,
                    image.paletteOfColors[0], affiche_pixel);
            }

        }
    }

    //Rafraichissement de la partie de l'écran correspondant à la taille de l'image doit se faire en dehors de cette fonction
    //test(x_depart - taille_pixel, y_depart - taille_pixel, (width - 1) * taille_pixel + 10, (height - 1) * taille_pixel + 10)
}
