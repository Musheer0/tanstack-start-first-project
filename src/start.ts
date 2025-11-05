// app/start.ts
import { createStart } from "@tanstack/react-start"
import { clerkMiddleware } from "@clerk/tanstack-react-start/server"
import { createMiddleware } from "@tanstack/react-start"

// Optional: custom logging middleware
const loggingMiddleware = createMiddleware().server(async ({ next, request }) => {
  console.log(`[${request.method}] ${new URL(request.url).pathname}`)
  return next()
})

// 👇 THIS is the correct way
export const startInstance = createStart(() => ({
  requestMiddleware: [
    clerkMiddleware(),  // must come first
    loggingMiddleware,  // can be chained
  ],
}))
