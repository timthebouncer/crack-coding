/**
Given an array of strings strs, group the anagrams together. You can return the answer in any order.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
**/

const strs = ["eat","tea","tan","ate","nat","bat"]

const groupAnagrams=(strs)=>{

    let map={}

    for (let i = 0; i < strs.length; i++) {
        let count = new Array(26).fill(0)

        /*
        "a".charCodeAt(0) -> 97 is the ascii number for 'a' .....97-97 = 0
        "b".charCodeAt(0) -> 98 is the ascii number for 'b' .....98-97 = 1
        "z".charCodeAt(0) -> 122 is the ascii number for 'z'.....122-97 = 25
         Why subtract 97? Because 97 is the start number of 'a' in the ascii table.
         By substracting 97, we are essentially creating an index mapping into our key array.

           count[0] will reprensent a... the value will represent # of times we encountered the char
           count[1] will reprensent b...
       */

        for (const c of strs[i]) {
            count[c.charCodeAt(0) - 97] += 1
        }

        count = JSON.stringify(count);
        /* they key for "eat" The 1s represent the frequency of each character
            "[1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0]"
        */

        if (map[count]){
            map[count].push(strs[i])
        }
        else {
            map[count] = [strs[i]];
        }
    }
    return Object.values(map)


    // ------------

    // const map = {};
    //
    // for (const str of strs) {
    //     const sorted = str.split('').sort().join('');
    //
    //     if (!map[sorted]) {
    //         map[sorted] = [str];
    //     } else {
    //         map[sorted].push(str);
    //     }
    // }
    //
    // return Object.values(map);
}

console.log(groupAnagrams(strs));