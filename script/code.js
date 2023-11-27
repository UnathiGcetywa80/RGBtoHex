function convertRGBtoHex() {
    const hexInput = document.getElementById('rgbInput').value.trim();
        const hexRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
        const isValidHex = hexRegex.test(hexInput);
        
        if (!isValidHex) {
            console.error('Invalid rgb color code');
            return;
        }
        const sanitizedHex = hexInput.replace(/^#/, '');
        const r = parseInt(sanitizedRGB.substring(0, 2), 16);
        const g = parseInt(sanitizeRGB.substring(2, 4), 16);
        const b = parseInt(sanitizedRGB.substring(4, 6), 16);
        document.getElementById('hexValue').textContent = `(${r}, ${g}, ${b})`;
    }