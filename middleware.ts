import { auth, clerkMiddleware, createRouteMatcher, getAuth } from '@clerk/nextjs/server'
const isPublicRoute = createRouteMatcher([
  '/',
  // "/dashboard(.*)",
  // "/food-chart(.*)",
  // "/mess(.*)",
]);
export default clerkMiddleware(async(auth, req) => {
   if (!isPublicRoute(req)) await auth.protect();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
} 