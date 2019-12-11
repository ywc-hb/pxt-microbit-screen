function displayDialogue(x_start: number, y_start: number,
    text: string, color: number, speed: number) {
    let x = x_start - 7;
    let y = y_start;
    for (let i = 0; i < text.length; i++) {
        if (x + 7 >= 154) {
            y += 12;
            x = x_start
        }
        else {
            x += 7
        }

        LCD1IN8.DisString(x, y, text[i], color)
        LCD1IN8.LCD_DisplayWindows(x, y, x + 7, y + 12)
        basic.pause(speed)
    }
} 