// Quick Question #1
new Set([1,1,2,2,3,4]); Set(4) {1,2,3,4};

// Quick Question #2
[...new Set("referee")].join("") Set(1) "ref"

// Quick Questions #3
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

 m = 0: {[1,2,3]:true}
     1: {[1,2,3]: false}
 

//  hasDuplicate
const hasDuplicate = arr => new Set(arr).size !== arr.length;


// vowelCount
function isVowel(char) {
    return 'aeiou'.includes(char);
};

function vowelCount(str) {
    const vowelMap = new Map();
    for (let char of str) {
        let lowercaseChar = char.toLowerCase();
        if(isVowel(lowercaseChar)) {
            if(vowelMap.has(lowercaseChar)) {
                vowelMap.set(lowercaseChar, vowelMap.get(lowercaseChar) + 1);
                console.log(vowelMap.get(lowercaseChar));
            } else {
                vowelMap.set(lowercaseChar, 1);
            }
        }
    }
    return vowelMap;

};