const devURL = 'http://localhost:3001'
export async function getInfo (path: string): Promise<any> {
  const response = await fetch(`${devURL}/${path}`)
  const data = await response.json()
  return data
}

export async function postInfo (path: string, info: any): Promise<any> {
  const response = await fetch(`${devURL}/${path}`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify(info)
  })
  const data = await response.json()
  return data
}

export async function deleteInfo (path: string, ID: string | number): Promise<any> {
  return await fetch(`${devURL}/${path}/${ID}`, {
    method: 'DELETE',
    credentials: 'include',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
}
