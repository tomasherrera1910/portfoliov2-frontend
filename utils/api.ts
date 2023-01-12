// const backendURL = process.env.NEXT_PUBLIC_BACKEND_URI ?? 'http://localhost:3001'
const devURL = 'http://localhost:3001'
const api = {
  login: async (password: Record<string, string>): Promise<Response> => {
    return await fetch(`${devURL}/login`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(password)
    })
  },
  verifyLogin: async (token: string = ''): Promise<Response> => {
    return await fetch(`${devURL}/verifyLogin/${token}`)
  }
}
export default api
