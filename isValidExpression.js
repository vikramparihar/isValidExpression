/**
 * Author: Vikram Parihar
 * Date: 2023-10-30
 * Description: This code check the inputString if its valid express or not and return the boolean true/false .
*/

/**
 * @param {string} str
 * @returns {boolean} - `true` if the input string meets the criteria, otherwise `false`.
 */
function isValidExpression(str = '') {
    // Check error case first
    if (typeof str !== 'string')
        throw new Error('Given expression is not valid string')

    // Step 1.  Create a variable for holding the mapping of the expression set
    const charMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    // Step 2. Creat a variable charSet for holding the symbol
    let charSet = [];

    // Step 3. Evaluate the expession
    let keys = Object.keys(charMap);
    let values = Object.values(charMap);
    for (const symbol of str) {
        if (values.includes(symbol)) {
            charSet.push(symbol)
        } else if (keys.includes(symbol)) {
            if (charSet.length === 0 || charSet.pop() != charMap[symbol]) {
                return false
            }
        }
    }
    return charSet.length === 0
}

// Export the function
module.exports = isValidExpression