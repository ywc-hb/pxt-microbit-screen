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

## Création du 1er tableau de valeurs ##
liste_tab1 = [[]]
nb = 1

for i in range(len(liste)):
	try:
		if liste[i] == liste[i+1]:
			nb += 1
	
		else:
			if len(liste_tab1[-1]) == 100:
				liste_tab1.append([nb])
		
			else:
				liste_tab1[-1].append(nb)
		
			nb = 1
	
	except IndexError:
		break

if len(liste_tab1[-1]) == 100:
	liste_tab1.append([nb])

else:
	liste_tab1[-1].append(nb)

## Création du 2e tableau de valeurs ##
list_colors = [[]]
for i in range((len(liste_tab1) - 1) * len(liste_tab1[0]) + len(liste_tab1[-1])):
	if len(list_colors[-1]) == 100:
		list_colors[-1].append([palette_colors.index(liste[0])])
	
	else:
		list_colors[-1].append(palette_colors.index(liste[0]))
	
	for j in range(liste_tab1[i // 100][i % 100]):
		try:
			del(liste[0])

		except IndexError:
			break


#### Ecriture de la fonction dans un fichier texte ####
function_name = input("Veuillez entrer le nom de votre fonction : ")

while function_name.lower() == "image":
	function_name = input("Veuillez entrer le nom de votre fonction (elle ne peut pas s'appeler \'image\') : ")

function_name_tab = function_name.split()

function_name = ""
for i in function_name_tab:
	function_name += i.capitalize()

text_of_function = "function display" + function_name + "(){\n" \
							"\tlet list_colors_number = " + str(liste_tab1) + ";\n" \
							"\tlet list_colors = " + str(list_colors) + ";\n" \
							"\tlet palette_colors = " + str(palette_colors) + ";\n" \
							"\tlet width = " + str(width) + ";\n" \
							"\tlet height = " + str(height) + ";\n" \
							"\tlet nombre_occurence: number = (list_colors.length - 1) * (list_colors[0].length) + list_colors[list_colors.length - 1].length;\n" \
							"\treturn {\n" \
								"\t\tlistOfColorNumber: list_colors_number,\n" \
								"\t\tlistOfColor: list_colors,\n" \
								"\t\tpaletteOfColors: palette_colors,\n" \
								"\t\twidth: width,\n" \
								"\t\theight: height,\n" \
								"\t\tnumberOfOccurence: nombre_occurence\n" \
							"\t};\n" \
  						"}"


with open("display" + function_name + ".txt", "w") as fich:
	fich.write(text_of_function)
