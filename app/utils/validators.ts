export function emailValidator(value: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value); 
}

export function usernameValidator(value: string): boolean {
    const usernameRegex = /^[a-zA-Z0-9_-]{3,16}$/;
    return usernameRegex.test(value); 
}

export function passwordValidator(value: string): boolean {
    return value.length >= 4;
}