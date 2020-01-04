#Le fichier d'entrée doit s'appeler 'colors_in_RGB565.txt'
#Le fichier de sortie s'appellera 'displayImage.txt' où 'Image' correspond au nom de votre fonction
#	et contiendra la fonction déjà construite

#### Lecture du fichier de couleurs ####
with open("colors_in_RGB565.txt", "r") as file:
    chaine = file.read()

liste_hexa = chaine.strip("\\n").split(",")
liste = [int(h, 16) for h in liste_hexa]
height = chaine.count("\n")+1 #Obtemption de la hauteur de l'image
width = len(liste) // height #Calcul de la largeur de l'image
transparency = liste[0]
#transparency = int(input("Veuillez entrer la couleur de transparence de votre image : ")) #Décommenter si la transparence n'est pas la couleur du premier pixel


#### Création de la palette de correspondance des couleurs ####
liste_temp = liste[:]
palette_colors = []
for i in liste_temp:
	try:
		palette_colors.append(liste_temp[0])
		liste_temp = list(filter(lambda a: a != liste_temp[0], liste_temp))
	except IndexError:
		break

#Mise en première position de la couleur de transparence
try:
	palette_colors.remove(transparency)
	palette_colors.insert(0, transparency)
except ValueError:
	pass

#### Création de la liste de couleurs ####
list_colors = "[["
for i in range(len(liste)):
	if i % 100 == 0 and i != 0:
		list_colors += "], ["

	if i < len(liste)-1:
		list_colors += str(palette_colors.index(liste[i])) + ", "

	elif i == len(liste)-1:
		list_colors += str(palette_colors.index(liste[i]))

list_colors += "]]"
list_colors = list_colors.replace(", ]", "]")

#### Ecriture de la fonction dans un fichier texte ####
function_name = input("Veuillez entrer le nom de votre fonction : ")

with open("display" + function_name + ".txt", "w") as fich
	fich.write("function " + function_name + "(){\n    let list_colors = " + list_colors + ";\n\n    let palette_colors = " + str(palette_colors) + ";\n\n    let width = " + str(width) + ";\n    let height = " + str(height) + ";\n\nlet nombre_occurence: number = (list_colors.length - 1) * (list_colors[0].length) + list_colors[list_colors.length - 1].length;\n    return {\n        listOfColor: list_colors,\n        paletteOfColors: palette_colors,\n        width: width,\n        height: height,\n        numberOfOccurence: nombre_occurence\n    };\n}")
