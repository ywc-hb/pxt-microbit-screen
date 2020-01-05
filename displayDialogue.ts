function displayDialogue(x_start: number, y_start: number,
    text: string, color: number, speed: number, bold: boolean = false, highlight: boolean = false) {
    /*
    x_start, y_start --> Coordonnées de départs du texte
    text --> Texte à écrire
    color --> Couleur du texte
    speed --> temps entre l'apparition de chaque lettre (en ms)
    bold --> mise en gras ou non du texte
    */ 

    let x = x_start - 7;
    let y = y_start;

    for (let i = 0; i < text.length; i++) {
        if (x + 7 >= 154) {
            y += 14;
            x = x_start
        }
        
        else {
            x += 7
        }

        LCD1IN8.DisString(x, y, text[i], color)

        if(bold) {
            LCD1IN8.DisString(x, y + 1, text[i], color)
        }

        if(highlight) {
            LCD1IN8.DrawLine(x, y + 12, x + 7, y + 12, 0, DOT_PIXEL.DOT_PIXEL_1, LINE_STYLE.LINE_SOLID)
        }

        LCD1IN8.LCD_DisplayWindows(x, y, x + 7, y + 14)
        basic.pause(speed)
    }
} 