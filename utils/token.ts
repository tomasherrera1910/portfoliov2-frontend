export function setTokenLS(token: string){
    window.localStorage.setItem('token', token)
}
export function getTokenLS():string | null {
    const token = window.localStorage.getItem('token')
    return token
}