const processText = (text, { uppercase = false, reverse = false, removeSpecialChars = false } = {}) => {
    if (removeSpecialChars) {
        text = text.replace(/[^a-zA-Z0-9 ]/g, ''); //szuka znakow z poza zakresu
    }

    if (uppercase) {
        text = text.toUpperCase();
    }

    if (reverse) {
        text = text.split('').reverse().join('');
    }

    console.log(`Przetworzony tekst: ${text}`);
};

processText('Hello World', { uppercase: true , removeSpecialChars: true });
