import api from './utils/api'
import { NextRequest, NextResponse } from 'next/server'

export async function middleware (req: NextRequest): Promise<NextResponse> {
  const { pathname } = req.nextUrl

  if (pathname === '/login') {
    const token = req.cookies.get('token')
    if (token != null) {
      const res = await api.verifyLogin(token.value)
      const data = await res.json()
      if (data.error === undefined && data.login === true) {
        return NextResponse.redirect('http://localhost:3000/admin')
      }
    }
  } else if (pathname === '/admin') {
    const token = req.cookies.get('token')
    if (token != null) {
      const res = await api.verifyLogin(token.value)
      const data = await res.json()
      if (typeof data.error === 'string' && data.login === undefined) {
        return NextResponse.redirect('http://localhost:3000/login')
      }
    } else {
      return NextResponse.redirect('http://localhost:3000/login')
    }
  }
  return NextResponse.next()
}
