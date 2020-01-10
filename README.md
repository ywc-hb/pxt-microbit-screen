# Extension improving the use of 1.8inch Waveshare screen for microbit #
Se référer plus bas pour la version française

### Conventions of this readme.md ###

1. Variables that you have to name are written between simple quote
2. Variables followed by a _?_ are optionals


## How to display a picture ###

1. You have to start by creating a file that will group your pictures (you can creat as many files as you want)
2. Your file will contain a function that you'll call when you'll show your picture. To creat this function, you just have to use the converter that you could find in the repository.
> You can refer to the section "Converter"

3. Then, you just have to call the function named `displayImage()` with the `x` and the `y` of the top left of the picture's location: `displayImage(x, y, 'picture s function'(), transparency?, pixel_size?)'

4. Incredible ! Your picture is displayed as if by magic


## Converter ##

To get colors of every single pixel of your picture, your can use _lcd-image-converter_ (free download [here](https://downloads.riuson.com/lcd-image-converter)).    
Then, you just have to open this app, chose "New Image" and import your picture.
Open "Options --> Convertion".
Check if all settings are good : 
- "Preset have to be on the _"Color R5G6B5"_ option
- "Main Scan Direction" on "Top to Bottom" and "Line Scan Direction" on _"Forward"_
- In the tab "Image", "Block size" have to be on _"16 bits"_, the prefix has to be _"0x"_ and the delimiter _", "_. You don't need a suffix
Then, you just have to clic on "Show Preview" and copy past the list of colors in a file which must be called _`colors_in_RGB565.txt`_.

Afterwards, download the file named _`converter.py`_ in the repository and run it in the same directory as the _`colors_in_RGB565.txt`_. Then, you can copy past the contents of the output file (which is named after your function) in the file `.ts`.


## How to display bold or underlined text ##

You just have to call the function `displayDialogue(x: int, y: int, "your text", color: int, speed: int, bold?: boolean = false, underline?: boolean = false)`.     
Speed is the number of second between the display of two letters. If you don't need a bold or underlined text and neither the speed, you can prefer the use of the `DisString(...)` function.







# Extension améliorant et facilitant l'utilisation de l'écran 1.8in Waveshare pour microbit #

### Conventions de ce README.md ###

1. Les variables que vous devez nommer vous-même sont écrites entre simple guillemets
2. Les variables suivi d'un _'?'_ sont facultatives

## Comment afficher une image ##

1. Créer un ficher qui regroupera toutes les images d'une même familles (les différentes images d'un même personnage par exemple). Par convention, on appellera ce fichier du même nom que la famille d'image (différentes images de pikachu --> pikachu.ts). Chaque image sera par ailleurs stockée dans une fonction.

2. Pour créer cette fonction, il vous suffira de télécharger et d'exécuter correctement le fichier `convertisseur.py` puis de copier coller le contenu du fichier de sortie dans votre fichier `'famille'.ts`.
> Pour plus de détails sur l'utilisation correcte de ce fichier, vous pouvez vous référer à la section "Convertisseur"

3. Appeler la fonction "displayImage()" avec `x` et `y` respectivement l'absisse et l'ordonnée du point en haut à gauche du placement de l'image (comme ci-après).    
`displayImage(x, y, 'la fonction de votre image'(), transparence?, taille_pixel?)`

4. Magie, l'image s'affiche toute seule aux coordonnées que vous lui avez donnés !

### Utilisation du fichier convertisseur ###

Pour obtenir les couleurs de chaque pixel dans le bon format, vous pouvez utiliser le logiciel _lcd-image-converter_ (téléchargeable gratuitement [ici](https://downloads.riuson.com/lcd-image-converter) ).    
Il vous suffit ensuite d'ouvrir l'application, le choisir "New Image" et d'importer votre image.      
Allez ensuite dans "Options --> Convertion".      
Vérifiez le bon réglage de quelques options : 
- "Preset" doit être réglé sur _"Color R5G6B5"_
- "Main Scan Direction" doit être réglé sur _"Top to Bottom"_ et "Line Scan Direction" sur _"Forward"_
- Dans l'onglet "Image", "Block size" doit être réglé sur _"16 bits"_, le préfixe doit être _"0x"_, le délitieur doit être _", "_ et il ne doit pas y avoir de suffixe

Ensuite, il vous suffit de cliquer sur _"Show Preview"_ puis de copier / coller la liste des couleurs dans le fichier _`colors_in_RGB565.txt`_

Ce convertisseur doit se placer dans le même dossier que votre fichier de couleurs issue du logiciel ci-dessus.    
Le fichier contenant les couleurs doivent se trouver dans un fichier texte nommé `colors_in_RGB565.txt` .     
Lancez ensuite le convertisseur, entrez les informations requises par le programme.        
Le fichier de sortie s'appellera `display'VotreImage'.txt` et contiendra la fonction à copier coller tel quel dans votre code.     

## Comment afficher du texte ? ##

Il vous suffit tout simplement d'utiliser la fonction `displayDialogue(x, y, 'votreTexte', 'color', 'speed')`     
La vitesse correspond au temps en miliseconde qu'il y a entre l'écriture de 2 lettres (même en mettant `0`, l'affichage ne sera pas instentané à cause de la vitesse d'exécution des instructions. Pour avoir un rendu immédiat, préférez l'utilisation de `disString(...)` suivi d'un rafraichissement de l'écran).


## Documentation ##

Une documentation sommaire est disponible dans le fichier 'documentation_LCD1IN8.txt'. Si vous avez une idée d'amélioration ou une réctification pour cette documentation, n'hésitez pas !


> Crédit : Grégoire Lefaure et Maxime Dautriche
