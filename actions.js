"use strict";

//dictionary list
var words = [
    'the', 'of', 'to', 'and', 'in', 'is', 'it', 'you', 'that', 'he', 'was',
    'for', 'on', 'are', 'with', 'a', 'I', 'his', 'they', 'be', 'at', 'one', 'have',
    'this', 'from', 'or', 'had', 'by', 'hot', 'word', 'but', 'what', 'some', 'we',
    'can', 'out', 'other', 'were', 'all', 'there', 'when', 'up', 'use', 'your', 'how',
    'said', 'an', 'each', 'she', 'which', 'do', 'their', 'time', 'if', 'will', 'about',
    'many', 'then', 'them', 'write', 'would', 'like', 'so', 'these', 'her', 'long', 'make',
    'see', 'him', 'two', 'has', 'look', 'more', 'day', 'could', 'go', 'come', 'did',
    'number', 'sound', 'no', 'most', 'people', 'my', 'over', 'water', 'than', 'call', 'first',
    'who', 'may', 'down', 'side', 'been', 'now', 'find', 'any', 'new', 'work', 'part', 'take',
    'get', 'place', 'made', 'live', 'after', 'back', 'only', 'round', 'year', 'came', 'every',
    'good', 'me', 'give', 'our', 'under', 'name', 'very', 'just', 'form', 'sentence', 'great',
    'think', 'say', 'help', 'low', 'line', 'differ', 'turn', 'cause', 'much', 'mean', 'before',
    'move', 'right', 'boy', 'old', 'too', 'same', 'tell', 'set', 'three', 'want', 'air', 'well',
    'also', 'play', 'small', 'end', 'put', 'home', 'read', 'hand', 'port', 'large', 'spell',
    'add', 'even', 'land', 'here', 'must', 'big', 'such', 'follow', 'act', 'why', 'ask',
    'change', 'went', 'light', 'kind', 'off', 'need', 'house', 'picture', 'try', 'us', 'again',
    'animal', 'point', 'mother', 'world', 'near', 'build', 'self', 'father', 'head', 'stand',
    'own', 'page', 'should', 'country', 'found', 'answer', 'school', 'study', 'still', 'learn',
    'plant', 'cover', 'food', 'sun', 'four', 'between', 'state', 'eye', 'never', 'last', 'let',
    'thought', 'city', 'tree', 'cross', 'farm', 'hard', 'start', 'might', 'story', 'saw', 'sea',
    'draw', 'left', 'late', 'run', 'while', 'press', 'close', 'night', 'real', 'life', 'few',
    'north', 'open', 'seem', 'together', 'next', 'white', 'children', 'got', 'walk', 'example',
    'ease', 'paper', 'group', 'always', 'music', 'those', 'both', 'often', 'letter', 'until',
    'mile', 'river', 'car', 'feet', 'care', 'second', 'book', 'carry', 'science', 'eat', 'friend',
    'began', 'idea', 'fish', 'mountain', 'stop', 'once', 'base', 'hear', 'cut', 'sure', 'watch',
    'color', 'face', 'wood', 'main', 'enough', 'plain', 'girl', 'usual', 'young', 'ready', 'ever',
    'red', 'list', 'though', 'feel', 'talk', 'bird', 'soon', 'dog', 'family', 'direct', 'pose',
    'leave', 'song', 'measure', 'door', 'product', 'short', 'numeral', 'class', 'wind', 'question',
    'happen', 'complete', 'ship', 'area', 'half', 'rock', 'order', 'south', 'problem', 'piece',
    'told', 'knew', 'pass', 'since', 'top', 'king', 'space', 'heard', 'best', 'hour', 'better',
    'true', 'during', 'hundred', 'five', 'remember', 'step', 'early', 'hold', 'west', 'ground',
    'interest', 'reach', 'fast', 'verb', 'sing', 'listen', 'six', 'table', 'travel', 'less',
    'morning', 'ten', 'simple', 'several', 'vowel', 'toward', 'war', 'lay', 'against', 'pattern',
    'slow', 'center', 'love', 'person', 'money', 'serve', 'appear', 'road', 'map', 'rain', 'rule',
    'govern', 'pull', 'cold', 'notice', 'voice', 'unit', 'power', 'town', 'fine', 'certain', 'fly',
    'fall', 'lead', 'cry', 'dark', 'machine', 'note', 'wait', 'plan', 'figure', 'star', 'box', 'noun',
    'field', 'rest', 'correct', 'able', 'pound', 'done', 'beauty', 'drive', 'stood', 'contain',
    'front', 'teach', 'week', 'final', 'gave', 'green', 'oh', 'quick', 'develop', 'ocean', 'warm',
    'free', 'minute', 'strong', 'special', 'mind', 'behind', 'clear', 'tail', 'produce', 'fact',
    'street', 'inch', 'multiply', 'nothing', 'course', 'stay', 'wheel', 'full', 'force', 'blue',
    'object', 'decide', 'surface', 'deep', 'moon', 'island', 'foot', 'system', 'test', 'record',
    'boat', 'common', 'gold', 'possible', 'plane', 'stead', 'dry', 'wonder', 'laugh', 'thousand',
    'ago', 'ran', 'check', 'game', 'shape', 'hot', 'miss', 'brought', 'heat', 'snow', 'tire',
    'bring', 'yes', 'distant', 'sunshade', 'sweetheart', 'sailor', 'shocking', 'shocked',
    'snowing', 'steamer', 'stopper', 'stopping', 'stretcher', 'table', 'tail', 'take', 'talk',
    'tall', 'taste', 'tax', 'teaching', 'technology', 'tendency', 'test', 'than', 'that', 'the',
    'their', 'them', 'then', 'theory', 'there', 'these', 'they', 'thick', 'thin', 'thing',
    'this', 'those', 'though', 'thought', 'thread', 'throat', 'through', 'thumb', 'thunder',
    'ticket', 'tight', 'tired', 'till', 'time', 'tin', 'to', 'toe', 'together', 'tomorrow',
    'tongue', 'took', 'tooth', 'top', 'touch', 'town', 'trade', 'train', 'transport', 'tray',
    'tree', 'trick', 'trousers', 'true', 'trouble', 'turn', 'twist', 'tapioca', 'taxi', 'tea',
    'telegram', 'telephone', 'television', 'ten', 'terrace', 'theater', 'thermometer', 'third',
    'thirteen', 'thirty', 'thousand', 'three', 'Thursday', 'toast', 'tobacco', 'torpedo',
    'Tuesday', 'turbine', 'twenty-one', 'twelve', 'twenty', 'twice', 'two', 'tailor', 'tame',
    'tap', 'tear', 'tent', 'term', 'texture', 'thickness', 'thief', 'thimble', 'thorax',
    'threat', 'thrust', 'tide', 'tie', 'tissue', 'tongs', 'too', 'total', 'towel', 'tower',
    'traffic', 'tragedy', 'transmission', 'transparent', 'trap', 'travel', 'treatment',
    'triangle', 'truck', 'tube', 'tune', 'tunnel', 'twin', 'typist', 'today', 'tonight',
    'tradesman', 'talking', 'teacher', 'touching', 'trader', 'trainer', 'training',
    'troubling', 'troubled', 'turning', 'umbrella', 'under', 'unit', 'up', 'us', 'use',
    'university', 'ugly', 'unconformity', 'understanding', 'universe', 'unknown',
    'underclothing', 'undercooked', 'undergo', 'undergrowth', 'undermined', 'undersigned',
    'undersized', 'understatement', 'undertake', 'undervalued', 'undo', 'upkeep', 'uplift',
    'upon', 'upright', 'uproot', 'uptake', 'used', 'value', 'verse', 'very', 'vessel', 'view',
    'violent', 'voice', 'vanilla', 'violin', 'visa', 'vitamin', 'vodka', 'volt', 'valency',
    'valley', 'valve', 'vapor', 'variable', 'vascular', 'vegetable', 'velocity', 'vestigial',
    'victim', 'victory', 'volume', 'vortex', 'vote', 'viewpoint', 'walk', 'wall', 'waiting',
    'war', 'warm', 'was', 'wash', 'waste', 'watch', 'water', 'wave', 'wax', 'way', 'we',
    'weather', 'week', 'weight', 'well', 'went', 'were', 'west', 'wet', 'what', 'wheel',
    'when', 'where', 'which', 'while', 'whip', 'whistle', 'white', 'who', 'whom', 'whose',
    'why', 'wide', 'will', 'wind', 'window', 'wine', 'wing', 'winter', 'wire', 'wise', 'with',
    'woman', 'wood', 'wool', 'word', 'work', 'worm', 'would', 'wound', 'writing', 'wrong',
    'Wednesday', 'whisky', 'weak', 'wedge', 'welcome', 'whether', 'wholesale', 'widow', 'wife',
    'wild', 'world', 'wreck', 'wrist', 'waterfall', 'weekend', 'well-being', 'well-off',
    'whatever', 'whenever', 'whereas', 'whereby', 'wherever', 'whichever', 'whitewash',
    'whoever', 'windpipe', 'within', 'without', 'woodwork', 'workhouse', 'waiter',
    'worker', 'working', 'out', 'up', 'writer', 'waiting', 'wasted', 'your', 'yours',
    'year', 'yellow', 'yes', 'yesterday', 'you', 'young', 'zebra', 'zinc', 'Zoology',
    'yawn', 'x-ray', 'yearbook', 'yourself', 'zookeeper'];

var minWord = 0;
var maxWord = 0;
var maxLength = 0;
var easyType = false;
var numSub = false;
var allPass = [];
var existTable = false;

// Function to reduce words in dictonary using the input of min and max word length
function allPossibleWord() {
    minWord = document.querySelector("#min-select").value;
    maxWord = document.querySelector("#max-select").value;
    var arrayPosWord = [];
    for (var i = 0; i < words.length; i++) {
        if (words[i].length >= minWord && words[i].length <= maxWord) {
            arrayPosWord.push(words[i].toLowerCase());
        }
    }
    return arrayPosWord;
}

// Random function to combine words
function getRandomCombinations() {
    var array = allPossibleWord();
    var result = [];
    var str1, str2, str3, concat_str1_str2_str3,
        concat_str1_str2, concat_str1_str3, concat_str2_str3;
    var randomIndex1;
    var randomIndex2;
    var randomIndex3;
    if (array.length > 3) {
        for (let i = 0; i < array.length; i++) {
            randomIndex1 = Math.floor(Math.random() * array.length);
            randomIndex2 = Math.floor(Math.random() * array.length);
            randomIndex3 = Math.floor(Math.random() * array.length);
            str1 = array[randomIndex1];
            str2 = array[randomIndex2];
            str3 = array[randomIndex3];
            array.splice(randomIndex1, 1);
            array.splice(randomIndex3, 1);
            array.splice(randomIndex3, 1);
            concat_str1_str2_str3 = str1 + "-" + str2 + "-" + str3;
            concat_str1_str2 = str1 + "-" + str2;
            concat_str1_str3 = str1 + "-" + str3;
            concat_str2_str3 = str2 + "-" + str3;
            if (concat_str1_str2_str3.length < maxLength) {
                result.push(concat_str1_str2_str3);
            }
            else if (concat_str1_str2.length < maxLength) {
                result.push(concat_str1_str2);
            }
            else if (concat_str1_str3.length < maxLength) {
                result.push(concat_str1_str3);
            }
            else if (concat_str2_str3.length < maxLength) {
                result.push(concat_str2_str3);
            }
        }
    }
    return result;
}

// Random function for single word password
function getRandomSinglePass() {
    var array = allPossibleWord();
    var randomIndex = 0;
    var result = [];
    var alreadyAdded = false;
    for (var i = 0; i < 60; i++) {
        randomIndex = Math.floor(Math.random() * array.length);
        if (array[randomIndex].length < maxLength) {
            // check for existing of new Password
            if (result.length === 0) {
                result.push(array[randomIndex]);
            }
            else {
                for (var j = 0; j < result.length; j++) {
                    if (array[randomIndex] === result[j]) {
                        alreadyAdded = true;
                    }
                }
                if (alreadyAdded === false) {
                    result.push(array[randomIndex]);
                }
            }
        }
    }
    return result;
}

// Get all possible password and easy typing check and number substitutions check 
function getPassword() {
    var password = [];
    var repeat = false;
    var possiblePass = getRandomSinglePass().concat(getRandomCombinations());
    maxLength = document.querySelector("#max-length").value;
    easyType = document.querySelector("#easyType").checked;
    numSub = document.querySelector("#numSub").checked;
    for (var i = 0; i < possiblePass.length; i++) {
        if (possiblePass[i].length < maxLength) {
            password.push(possiblePass[i]);
        }
    }

    // easy typing box is checked (keep password with double letters next to each other)
    if (easyType === true) {
        var splice_arr_index = [];
        var each_str;
        for (var j = 0; j < password.length; j++) {
            repeat = false;
            each_str = password[j];
            for (var k = 0; k < each_str.length; k++) {
                if (k !== (each_str.length - 1) && each_str[k] == each_str[k+1]) {
                    repeat = true;
                }
            }
            if (repeat == false) {
                splice_arr_index.push(j);
            }
        }
        if (splice_arr_index.length !== 0) {
            for (var y = splice_arr_index.length -1; y >= 0; y--) {
                password.splice(splice_arr_index[y], 1);
            }
        }
    }

    // number substitutions is checked
    if (numSub === true) {
        for (var k = 0; k < password.length; k++) {
            password[k] = password[k].replace(/a/g, "1");
            password[k] = password[k].replace(/b/g, "2");
            password[k] = password[k].replace(/c/g, "3");
            password[k] = password[k].replace(/d/g, "4");
            password[k] = password[k].replace(/e/g, "5");
            password[k] = password[k].replace(/f/g, "6");
            password[k] = password[k].replace(/h/g, "7");
            password[k] = password[k].replace(/i/g, "8");
            password[k] = password[k].replace(/j/g, "9");
            password[k] = password[k].replace(/o/g, "0");
        }
    }
    return password;
}

// Display password by create a table 
function displayPassword() {
    var tr, td, table;
    var numPassPerRow;
    
    // If a table already exists, delete it
    if (existTable === true) {
        var parentTable = document.querySelector("#outputTable");
        while (parentTable.hasChildNodes()){
            parentTable.removeChild(parentTable.firstChild);
        }
        existTable = false;
    }
    table = document.querySelector("#outputTable");
    table.classList.add("tableStyle");

    allPass = getPassword();
    if (allPass.length !== 0) {
        existTable = true;
    }

    numPassPerRow = allPass.length;
    if (numPassPerRow >= 5) {
        numPassPerRow = 5;
    }
    for (var i = 0; i < allPass.length; i++) {
        tr = document.createElement("tr");
        tr.classList.add("trStyle");
        for (var j = 0; j < numPassPerRow; j++) {
            td = document.createElement("td");
            td.classList.add("tdStyle");
            td.innerHTML = allPass[0];
            allPass.shift();
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}