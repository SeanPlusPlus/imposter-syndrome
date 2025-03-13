import Footer from "@/app/_components/footer";
import { HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import { getAllPosts } from "@/lib/api";

import "./globals.css";

export const metadata: Metadata = {
  title: `Trajectory`,
  description: `A collabortive science fiction story between Sean and ChatGPT`,
  openGraph: {
    images: [HOME_OG_IMAGE_URL],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {

  // ✅ Ensure getAllPosts() is only executed on the server
  const posts = getAllPosts();

  return (
    <html lang="en" className="dark" data-mode="dark">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#000000" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body className="bg-slate-900 text-slate-400">
        <div className="min-h-screen">{children}</div>
        <Footer posts={posts} /> {/* Pass posts as prop */}
      </body>
    </html>
  );
}
