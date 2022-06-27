let required = (propertyType) => {
    return v => v && v.length > 0 || `You must input a ${propertyType}`
}
let maxLength = (propertyType, maxLength) => {
    return v => v && v.length <= maxLength || `${propertyType} must be less than ${maxLength}`
}


export default {
    required,
    maxLength
}