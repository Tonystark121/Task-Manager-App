export function getInitials (fullName) {
    const names = fullName?.split(' ')
    console.log(names)
    const initials = names?.slice(0,2)?.map(name => name[0].toUpperCase)
    console.log(initials)
    const str = initials?.join('')
    return str
}