import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
// Local Fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata for SEO and social sharing
export const metadata: Metadata = {
  title: "M.Tech Hostel App",
  description: "A platform for M.Tech students to manage hostel and academic tasks.",
  icons: {
    icon: "/favicon.ico", // Ensure your favicon path is correct
  },
  openGraph: {
    title: "M.Tech Hostel App",
    description: "A platform for M.Tech students to manage hostel and academic tasks.",
    url: "https://yourwebsite.com",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "M.Tech Hostel App banner",
        type: "image/jpeg",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "M.Tech Hostel App",
    description: "A platform for M.Tech students to manage hostel and academic tasks.",
    images: ["https://yourwebsite.com/og-image.jpg"],
  },
  metadataBase: new URL("https://yourwebsite.com"),
  // Use 'application-name' for author and 'keywords' metadata as separate fields
  applicationName: "M.Tech Hostel App",
  authors: [{ name: "Sahed Ali" }],
  keywords: ["M.Tech", "Hostel Management", "Student Portal", "Next.js", "React"],
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>

    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="M.Tech Hostel App" />
        <meta property="og:description" content="A platform for M.Tech students to manage hostel and academic tasks." />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta property="og:image" content="https://yourwebsite.com/og-image.jpg" />
        <meta property="og:image:alt" content="M.Tech Hostel App banner" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="M.Tech Hostel App" />
        <meta name="twitter:description" content="A platform for M.Tech students to manage hostel and academic tasks." />
        <meta name="twitter:image" content="https://yourwebsite.com/og-image.jpg" />
        <meta name="twitter:image:alt" content="M.Tech Hostel App banner" />

        {/* Custom favicon */}
        <link rel="icon" href="https://res.cloudinary.com/dosdjk5jz/image/upload/v1730886155/Squircle_qc5rpa.svg" type="image/svg+xml" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900`}>
        <div className="flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>

    </ClerkProvider>

  );
}
