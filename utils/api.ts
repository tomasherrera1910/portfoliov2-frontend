const backendURL = process.env.NEXT_PUBLIC_BACKEND_URI || ''
const api = {
    login: (password:Record<string,string>):Promise<Response> => {
        return fetch(`${backendURL}/login`,{
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(password)
        })
    }
}

export default api