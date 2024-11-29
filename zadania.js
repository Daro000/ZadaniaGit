const processText = (text, { uppercase = false, reverse = false, removeSpecialChars = false } = {}) => {
    if (removeSpecialChars) {
        text = text.replace(/[^a-zA-Z0-9 ]/g, ''); //szuka znakow z poza zakresu
    }

};
