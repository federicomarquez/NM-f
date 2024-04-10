export const validateText = (text) => {
    const regex = /^.+$/
    return regex.test(text)
}

export const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
    return regex.test(password)
}

export const validateComfirmPassword = (password, secondPassword) => {
    return password === secondPassword
}

