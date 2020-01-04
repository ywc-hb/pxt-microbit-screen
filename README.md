# Module améliorant et facilitant l'utilisation de l'écran 1.8in Waveshare pour microbit #

![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)

### Conventions de ce README.md ###

1. Les variables que vous devez nommer vous-même sont écrites entre simple guillemets
2. Ce qui n'est pas entre guillemets doit respecter les conventions propres à chaques parties

## Comment afficher une image ##

1. Créer un ficher qui regroupera toutes les images d'une même familles (les différentes images d'un même personnage par exemple). Par convention, on appellera ce fichier du même nom que la famille d'image (différentes images de pikachu --> pikachu.ts). Chaque image sera par ailleurs stockée dans une fonction.

2. Pour créer cette fonction, il vous suffira de télécharger et d'exécuter correctement le fichier `convertisseur.py` puis de copier coller le contenu du fichier de sortie dans votre fichier `'famille'.ts`.
> Pour plus de détails sur l'utilisation de ce fichier, se référer à la section "Convertisseur"

3. Initialiser une variable à l'aide de la fonction correspondant à l'image (`let 'image' = display'VotreImage'();`)

4. Appeler la fonction "displayImage()" avec `x` et `y` respectivement l'absisse et l'ordonnée du point en haut à gauche du placement de l'image (comme ci-après).
`displayImage(x, y, image.listOfColor, image.width, image.height, image.transparencyColor, image.numberOfOccurence)` (Vous pouvez remplacer `image.transparencyColor` par `-1` si vous ne voulez pas utiliser de couleur de transparence)

5. Il vous faut ensuite rafraichir l'écran via la solution de votre choix (`display()` ou `displayWindows(...)`)
 
6. Magie, l'image s'affiche toute seule aux coordonnées que vous lui avez donnés !

### Utilisation du fichier convertisseur ###

Pour obtenir les couleurs de chaque pixel dans le bon format, veuillez utiliser _mettre ici le nom du convertisseur de pixels et les instructions à suivre_

Ce convertisseur doit se placer dans le même dossier que votre fichier de couleurs issue du logiciel ci-dessus. 
Le fichier contenant les couleurs doivent se trouver dans un fichier texte nommé `colors_in_RGB565.txt` . 
Lancez ensuite le convertisseur, entrez les informations requises par le programme. 
Le fichier de sortie s'appellera `colors.txt` et contiendra la fonction à copier coller tel quel votre code.

## Comment afficher du texte ? ##

Il vous suffit tout simplement d'utiliser la fonction `displayDialogue(x, y, 'votreTexte', 'color', 'speed')` 
La vitesse correspond au temps en miliseconde qu'il y a entre l'écriture de 2 lettres (même en mettant `0`, l'affichage ne sera pas instentané à cause de la vitesse d'exécution des instructions. Pour avoir un rendu immédiat, préférez l'utilisation de `disString(...)` suivi d'un rafraichissement de l'écran)


## Documentation ##

Une documentation sommaire est disponible dans le fichier 'documentation_LCD1IN8.txt'. Si vous avez une idée d'amélioration ou une réctification pour cette documentation, n'hésitez pas !


> Crédit : Grégoire Lefaure et Maxime Dautriche
