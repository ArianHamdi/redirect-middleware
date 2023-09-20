import { NextResponse } from "next/server";

export const middleware = (req) => {
    const { pathname } = req.nextUrl;
    console.log("pathname", pathname);
}

export const config = {
    matcher: [
        '/',
        '/((?!api|_next/static|_next/image|_next/data|favicon.ico|only-client-side).*)',
    ],
};