
const isValid = function (value) {
    if (typeof value === "undefined" || typeof value === null) return false
    if (typeof value === "string" && value.trim().length == 0) return false
    return true 
}

const removeSpace = function (value) {
    return value.split(" ").filter(abc => abc).join(" ")
}

const isValidPhone = function (value) {
    return /^[6789][0-9]{9}$/.test(value)
    // /^[\+]?[(]?[6-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(value)
}

const isValidRequest = function (value) {
    if (Object.keys(value).length == 0 ) return false
    return true
}

const isValidEmail = function(value) {
    return /^([0-9a-z]([-_\\.]*[0-9a-z]+)*)@([a-z]([-_\\.]*[a-z]+)*)[\\.]([a-z]{2,9})+$/.test(value);
}

const isValidPassword = function (password) {

    return /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[!@#$%^&*]){1,})(?!.*\s).{8,15}$/.test(password) 

    // let result1 = password.match(/^[!@#$%^&*]$/) 
}

const checkPincode = function (value) {
    return /^[123456789][0-9]{5}$/.test(value)
}

module.exports = {isValid, isValidRequest,isValidPhone, isValidPassword, removeSpace, isValidEmail,  checkPincode}