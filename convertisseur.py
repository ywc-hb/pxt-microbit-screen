#Le fichier d'entrée doit s'appeler 'colors_in_RGB565.txt'
#Le fichier de sortie s'appellera 'displayImage.txt'


with open("colors_in_RGB565.txt", "r") as file:
    chaine = file.read()

#transparency = int(input("Veuillez entrer la couleur de transparence de votre image : "))


liste_hexa = chaine.strip("\\n").split(",")

liste = []

for h in liste_hexa:
	liste.append(int(h, 16))
	
transparency = liste[0]

height = chaine.count("\n")+1 #Obtemption de la hauteur de l'image
width = len(liste) // height #Calcul de la largeur de l'image

palette_colors = []
liste_temp = liste[:]

for i in liste_temp:
	try:
		palette_colors.append(liste_temp[0])
		liste_temp = list(filter(lambda a: a != liste_temp[0], liste_temp))
	except IndexError:
		break

try:
	palette_colors.remove(transparency)
except:
	pass
else: 
	palette_colors.insert(0, transparency)

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

function_name = input("Veuillez entrer le nom de votre fonction : ")

fich = open("displayImage.txt", "w")
fich.write("function " + function_name + "(){\n    let list_colors = " + list_colors + ";\n\n    let palette_colors = " + str(palette_colors) + ";\n\n    let width = " + str(width) + ";\n    let height = " + str(height) + ";\n\nlet nombre_occurence: number = (list_colors.length - 1) * (list_colors[0].length) + list_colors[list_colors.length - 1].length;\n    return {\n        listOfColor: list_colors,\n        paletteOfColors: palette_colors,\n        width: width,\n        height: height,\n        numberOfOccurence: nombre_occurence\n    };\n}")
fich.close()
