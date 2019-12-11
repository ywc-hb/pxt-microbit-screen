#Le fichier d'entrée doit s'appeler 'colors_in_RGB565.txt'
#Les fichiers de sortie s'appeleront 'colors_in_decimal.txt' et 'caracteristique.txt'

with open("colors_in_RGB565.txt", "r") as file:
    chaine = file.read()

liste = chaine.split(", ")

height = chaine.count("\n")+1 #Obtemption de la hauteur de l'image
width = len(liste) // height #Calcul de la largeur de l'image

colors_decimal = []

for i in liste:
    colors_decimal.append(int(i, 16))

a = "[["
for i in range(len(colors_decimal)):
    if i % 100 == 0 and i != 0:
        a += "], ["
        
    if i < len(colors_decimal)-1:
        a += str(colors_decimal[i]) + ", "

    elif i == len(colors_decimal)-1:
        a += str(colors_decimal[i])

a += "]]"
a = a.replace(", ]", "]")

fich = open("colors_in_decimal.txt", "w")
fich.write(a)
fich.close()

fichier = open("caracteristiques.txt", "w")

fichier.write("\nHauteur de l'image : " + str(height))
fichier.write("\nLargeur de l'image : " + str(width))
 	 
fichier.close()
