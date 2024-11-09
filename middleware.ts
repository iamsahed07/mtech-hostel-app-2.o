import { auth, clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
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

// Middleware function to handle route protection and redirection
export default clerkMiddleware(async (auth, req: NextRequest) => {
  // Check if the route is public; if so, allow access
  if (isPublicRoute(req)) {
    return NextResponse.next();
  }

  try {
    // Authenticate the user
    const { userId, sessionId, role } = (await auth.protect()) as AuthResponse;

    // If user is authenticated and on the root route, redirect to /dashboard
    if (req.nextUrl.pathname === '/') {
      const dashboardUrl = req.nextUrl.clone();
      dashboardUrl.pathname = '/dashboard';
      return NextResponse.redirect(dashboardUrl);
    }

    // Role-based access control for admin-only routes
    if (/^\/admin(.*)/.test(req.nextUrl.pathname) && role !== 'admin') {
      return new NextResponse('Access denied', { status: 403 });
    }

    // Proceed to the requested page if all checks pass
    return NextResponse.next();

  } catch (error) {
    // Handle any authentication errors, such as expired sessions
    console.error('Authentication error:', error);
    return new NextResponse('Authentication failed. Please log in.', { status: 401 });
  }
});

// Middleware configuration
export const config = {
  matcher: [
    // Exclude static assets and internal routes from middleware
    '/((?!_next|static|public|favicon.ico|[^?]\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always include API and TRPC routes
    '/(api|trpc)(.*)',
  ],
};
