const utils = {

    classToggle(e, color) {
        e.target.classList.toggle(color);
    },

    toggleThisWordsAccent(e) {
        e.target.textContent = this.toggleAccent(e.target.textContent);
    },

    fromAccentToNormal(letter) {
        switch(letter.charCodeAt(0)) {
            case 193:
                return String.fromCharCode(65);
            case 201:
                return String.fromCharCode(69);
            case 205:
                return String.fromCharCode(73);
            case 211:
                return String.fromCharCode(79);
            case 218:
                return String.fromCharCode(85);
            case 225:
                return String.fromCharCode(97);
            case 233:
                return String.fromCharCode(101);
            case 237:
                return String.fromCharCode(105);
            case 243:
                return String.fromCharCode(111);
            case 250:
                return String.fromCharCode(117);
            default: 
                return letter;

        }
    },

    fromNormalToAccent(letter) {
        switch(letter.charCodeAt(0)) {
            case 65:
                return String.fromCharCode(193);
            case 69:
                return String.fromCharCode(201);
            case 73:
                return String.fromCharCode(205);
            case 79:
                return String.fromCharCode(211);
            case 85:
                return String.fromCharCode(218);
            case 97:
                return String.fromCharCode(225);
            case 101:
                return String.fromCharCode(233);
            case 105:
                return String.fromCharCode(237);
            case 111:
                return String.fromCharCode(243);
            case 117:
                return String.fromCharCode(250);
            default: 
                return letter;
        }
    },

    hasAccent(letter) {
        switch(letter.charCodeAt(0)) {
            case 193:
            case 201:
            case 205:
            case 211:
            case 218:
            case 225:
            case 233:
            case 237:
            case 243: 
            case 250:
                return true;
            default: 
                return false;
        }
    },

    toggleAccent(letter) {
        if(this.hasAccent(letter)) {
            return this.fromAccentToNormal(letter);
        }
        return this.fromNormalToAccent(letter);
    },
    
    getAccentIndex(word) {
        if(!word) return null;
        for(let i = 0; i < word.length; i++) {
            if(this.hasAccent(word[i])) {
                return i;
            } 
        }
        return -1;
    },
    
    removeAccent(word) {
        if(!word) return null;
        for(let i = 0; i < word.length; i++) {
            if(this.hasAccent(word[i])) {
                return this.toggleAccent(word[i]);
            }
        }
        return word;
    },

    fisherYatesShuffle(arr = []) {
        for(let i = arr.length -1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }
}

export default utils;