function displayPikachuRun() {
    /*Cette fonction est une fonction d'exemple vous permettant de comprendre comment cette dernière est construite */
    /*Pour construire votre fonction, il vous suffit de copier/coller celle-ci et de ne modifier
    que la liste des couleurs, la largeur, la hauteur ainsi que la couleur de transparence :) */

    //Pour obtenir la liste de couleurs et la palette dans le bon format, copiez/collez le fichier 'colors_in_decimal.txt' (sortie de 'convertisseur.py')
    let list_colors: number[][] = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 2, 2, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 2, 2, 2, 1, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 1, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [6, 6, 0, 0, 0, 0, 0, 1, 2, 2, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 0, 0, 1, 1, 1, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 1, 6, 0, 1, 1, 2, 2, 1, 6, 6, 6, 4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 2, 7, 6, 1, 2, 5, 6, 6, 6, 6, 6, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 7, 7, 6, 2, 5, 6, 6], [5, 3, 1, 6, 1, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 6, 3, 6, 6, 6, 6, 5, 2, 7, 7, 7, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 5, 3, 2, 7, 3, 3, 2, 7, 7, 5, 6, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 3, 7, 7, 7, 7, 7, 7, 2, 5, 6, 1, 5, 7, 5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 5, 7, 7, 7, 7, 7, 7, 7, 7, 3, 1, 7, 5, 7], [7, 6, 0, 0, 0, 0, 0, 0, 0, 6, 2, 7, 7, 7, 7, 7, 7, 7, 7, 2, 5, 7, 4, 2, 2, 2, 6, 0, 0, 0, 0, 0, 0, 6, 2, 6, 7, 7, 7, 7, 7, 7, 7, 7, 4, 2, 3, 3, 3, 2, 2, 6, 0, 0, 0, 0, 0, 6, 8, 6, 7, 7, 7, 9, 6, 7, 7, 7, 3, 3, 3, 4, 3, 3, 3, 6, 0, 0, 0, 0, 6, 5, 8, 2, 4, 7, 7, 6, 6, 8, 8, 7, 2, 4, 6, 6, 6, 6, 6, 0], [0, 0, 0, 0, 6, 2, 4, 2, 2, 2, 7, 7, 7, 8, 8, 2, 3, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 3, 3, 6, 5, 4, 3, 2, 2, 2, 2, 4, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 0, 6, 6, 1, 5, 3, 4, 5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 3, 2, 3, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 6, 2, 3, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
    let palette_colors = [64512, 30976, 63106, 58753, 52354, 47936, 14656, 63296, 60033, 65503];
    
    //Pour obtenir la largeur et la hauteur de votre image, ouvrez le fichier 'caracteristiques.txt' et de copier/coller les valeurs correspondantes
    let width = 24;
    let height = 27;

    //C'est à vous de donner la couleur de l'arrière-plan (Cette couleur est souvent la première qui se trouve dans votre liste de couleurs ;) )

    let nombre_occurence: number = (list_colors.length - 1) * (list_colors[0].length) + list_colors[list_colors.length - 1].length;
    return {
        listOfColor: list_colors,
        paletteOfColors: palette_colors,
        width: width,
        height: height,
        numberOfOccurence: nombre_occurence
    };
}


function displayPikachuStay() {
    let liste_colors = [[0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 4, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 2, 2, 0, 0, 1, 4, 4, 1, 0, 0, 0, 1, 5, 2, 1, 1, 0, 0], [0, 0, 2, 5, 2, 0, 0, 1, 5, 1, 1, 1, 1, 1, 3, 4, 4, 1, 0, 0, 0, 2, 6, 5, 5, 2, 0, 0, 1, 6, 5, 3, 4, 5, 3, 4, 4, 1, 0, 0, 0, 2, 5, 3, 3, 5, 2, 0, 1, 5, 4, 4, 4, 4, 4, 4, 5, 1, 0, 0, 2, 6, 5, 3, 3, 3, 5, 2, 0, 6, 4, 4, 4, 4, 4, 4, 4, 4, 6, 2, 2, 5, 3, 3, 3, 3, 5, 7, 2, 1, 3, 4, 4, 4, 4, 4, 4, 4, 4, 3], [6, 1, 2, 3, 3, 5, 2, 1, 1, 0, 1, 3, 1, 4, 4, 4, 4, 4, 4, 4, 3, 5, 1, 3, 6, 1, 1, 2, 0, 0, 0, 1, 8, 1, 4, 4, 4, 9, 1, 4, 3, 3, 5, 6, 3, 5, 2, 0, 0, 0, 0, 0, 1, 6, 3, 7, 4, 4, 1, 1, 8, 5, 3, 2, 6, 6, 3, 2, 0, 0, 0, 0, 0, 1, 3, 7, 3, 3, 3, 3, 8, 8, 3, 3, 5, 6, 1, 1, 1, 0, 0, 0, 0, 0, 1, 5, 4, 6, 5, 6], [6, 5, 4, 4, 3, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 6, 3, 3, 3, 6, 4, 4, 5, 3, 7, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 7, 3, 3, 3, 3, 6, 6, 3, 3, 6, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 7, 3, 7, 3, 3, 3, 3, 5, 7, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 7, 7, 7, 5, 5, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 1, 2, 6, 7, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
    let palette_colors = [64512, 14656, 30976, 63106, 63296, 58753, 47936, 52354, 60033, 65503];
    let width = 21;
    let height = 21;
    let nombre_occurence: number = (liste_colors.length - 1) * (liste_colors[0].length) + liste_colors[liste_colors.length - 1].length;
    return {
        listOfColor: liste_colors,
        paletteOfColors: palette_colors,
        width: width,
        height: height,
        numberOfOccurence: nombre_occurence
    };
}


