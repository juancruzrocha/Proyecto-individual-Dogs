export const firstToUpperCase = (string) => {
    const capitalized = string.charAt(0).toUpperCase() + string.slice(1)
    return capitalized
}