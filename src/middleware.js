import { NextResponse } from "next/server";

export default function middleware(req) {
  let verify = req.cookies.get("token");
  let url = req.url;
  if (!verify && url.includes("/home")) {
    return NextResponse.redirect(new URL("/", url));
  }
}
