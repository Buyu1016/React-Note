export function getStandard(word) {
    const wordList = word.split('_')
    for (let i = 0; i < wordList.length; i++) {
        if (i === 0) {
            wordList[i] = wordList[i].toLowerCase()
        } else {
            const newWord = wordList[i].toLowerCase().split('')
            for (let j = 0; j < newWord.length; j++) {
                if(j === 0) {
                    newWord[j] = newWord[j].toUpperCase()
                }
            }
            wordList[i] = newWord.join('')
        }
    }
    return wordList.join('')
}