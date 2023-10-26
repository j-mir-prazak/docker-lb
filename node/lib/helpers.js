function randomString( length ) {
    let chars = "abcdefghijklmnopqrstuvwxyz"
    chars += chars.toUpperCase()
    chars += '0123456789'

    let string = ''

    while( string.length < length ) {
        let seed = Math.random()
        let char = Math.floor( seed * chars.length )
        string += chars[char]
    }
    return string
}

export { randomString }