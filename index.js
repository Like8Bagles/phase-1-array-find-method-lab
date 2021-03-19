function superbowlWin(record) {
    let winOrUndefined = record.find(record => record.result=='W')
    if (winOrUndefined.result == 'W') {
        return winOrUndefined.year
    }
}