import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest){
    const {pathname} = req.nextUrl
    if(pathname === '/login'){
        const token = req.cookies.get('token')
        if(token){
            return NextResponse.redirect('http://localhost:3000/admin')
        }
    }
    return NextResponse.next()
}