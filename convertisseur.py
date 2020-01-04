#Le fichier d'entrée doit s'appeler 'colors_in_RGB565.txt'
#Les fichiers de sortie s'appeleront 'colors_in_decimal.txt' et 'caracteristique.txt'
#Le fichier 'colors.txt' contient 2 listes : 
#	- La liste de couleurs
#	- La palette de correspondance des couleurs


with open("colors_in_RGB565.txt", "r") as file:
    chaine = file.read()

transparency = int(input("Veuillez entrer la couleur de transparence de votre image : "))

liste_hexa = chaine.strip("\\n").split(",")

liste = []

for h in liste_hexa:
        liste.append(int(h, 16))

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

fich = open("colors.txt", "w")
fich.write(list_colors)
fich.write("\n\n\n")
fich.write(str(palette_colors))
fich.close()

fichier = open("caracteristiques.txt", "w")

fichier.write("\nHauteur de l'image : " + str(height))
fichier.write("\nLargeur de l'image : " + str(width))
 	 
fichier.close()
