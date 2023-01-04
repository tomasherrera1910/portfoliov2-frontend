const backendURL = process.env.NEXT_PUBLIC_BACKEND_URI ?? ''

const api = {
  login: async (password: Record<string, string>): Promise<Response> => {
    return await fetch(`${backendURL}/login`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(password)
    })
  }
}
export default api
