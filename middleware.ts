import { auth, clerkMiddleware, createRouteMatcher, getAuth } from '@clerk/nextjs/server';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

// Define the allowed roles, and explicitly type the response structure
type UserRole = 'admin' | 'user';

interface AuthResponse {
  userId: string;
  sessionId: string;
  role: UserRole;
}

// Define public routes that do not require authentication
const isPublicRoute = createRouteMatcher([
  '/',
  '/about',
]);

// Middleware function to handle route protection and additional processing
export default clerkMiddleware(async (auth, req: NextRequest) => {
  // Check if the route is public
  if (isPublicRoute(req)) {
    return NextResponse.next();
  }

  // Handle authentication and redirect to /dashboard after login
  try {
    const { userId, sessionId, role } = (await auth.protect()) as unknown as AuthResponse;

    // If user is authenticated and requests the root route, redirect to /dashboard
    // console.log("Hello", userId)
    if (req.nextUrl.pathname === '/' || userId) {
      const dashboardUrl = new URL('/dashboard', req.url);
      return NextResponse.redirect(dashboardUrl);
    }

    // Additional role-based checks
    if (/^\/admin(.*)/.test(req.nextUrl.pathname) && role !== 'admin') {
      return new NextResponse('Access denied', { status: 403 });
    }

    return NextResponse.next();

  } catch (error) {
    // Handle authentication errors, like expired sessions
    console.error('Authentication error:', error);
    return new NextResponse('Authentication failed. Please log in.', { status: 401 });
  }
});

// Middleware configuration
export const config = {
  matcher: [
    // Avoid running middleware on static assets or Next.js internals
    '/((?!_next|static|public|favicon.ico|[^?]\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always include API and TRPC routes
    '/(api|trpc)(.*)',
  ],
};
