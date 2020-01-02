function displayImage(x_depart: number, y_depart: number, taille_pixel: number,
    list_colors: number[][], palette_colors: number[], width: number, height: number, 
    nombre_occurence: number, replace_color: number, transparency: boolean) {
    /*
    Explication des arguments : 
        x_depart, y_depart --> coordonnée de l'image (voir avec taille pixel)
        taille_pixel --> taille de chaque pixel
        list_colors --> liste des couleurs de chaque pixel de l'image
        palette_colors --> palette de correspondance entre les indices (présents dans 'list_colors') et les couleurs en décimal
        width --> largeur de l'image
        height --> hauteur de l'image
        nombre_occurence --> nombre de pixel de l'image
        replace_color --> couleur à afficher à la place de la couleur de transparence
        transparency --> true: affiche la couleur contenue dans replace_color
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
    for (let i = 0; i < nombre_occurence; i++) {
        if (list_colors[Math.trunc(i / 140)][i % 140] != 0) {
            LCD1IN8.DrawPoint(x_depart + (i % width) * taille_pixel, y_depart + Math.trunc(i / width) * taille_pixel,
                palette_colors[list_colors[Math.trunc(i / 140)][i % 140]], affiche_pixel);
        }

        else if(!transparency) {
            if(replace_color != -1) {
                LCD1IN8.DrawPoint(x_depart + (i % width) * taille_pixel, y_depart + Math.trunc(i / width) * taille_pixel,
                    replace_color, affiche_pixel);
            }

            else {
                LCD1IN8.DrawPoint(x_depart + (i % width) * taille_pixel, y_depart + Math.trunc(i / width) * taille_pixel,
                    palette_colors[0], affiche_pixel);
            }
        }
    }

    //Rafraichissement de la partie de l'écran correspondant à la taille de l'image doit se faire en dehors de cette fonction
    //test(x_depart - taille_pixel, y_depart - taille_pixel, (width - 1) * taille_pixel + 10, (height - 1) * taille_pixel + 10)
}
