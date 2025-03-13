"use client"; // Mark this as a Client Component

import { usePathname } from "next/navigation";
import Container from "@/app/_components/container";
import EmojiFooter from "./EmojiFooter";

const COMPLETE = false 

export function Footer(posts: any) {
  const pathname = usePathname(); // Get the current URL path
  const segments = pathname.split("/").filter(Boolean); // Remove empty segments
  const currentSlug = segments.length ? segments[segments.length - 1] : null;
  const chapter = currentSlug && currentSlug.split('chapter')[1]
  const currentChapter = chapter && parseInt(chapter, 10)
  const nextChapter = currentChapter && currentChapter + 1
  const totalChapters =  posts?.posts?.length
  const nextChapterFormatted = (nextChapter && (nextChapter < 10)) ? `0${nextChapter}` : nextChapter
  console.log('currentChapter', currentChapter)
  console.log('nextChapter', nextChapter)
  console.log('totalChapters', totalChapters)

  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-slate-800">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <EmojiFooter/>
          {currentSlug && (
            <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2 lg:ml-auto">

              { nextChapter && totalChapters !== currentChapter &&(
                <a
                  href={`/posts/chapter${nextChapterFormatted}`}
                  className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
                >
                  Chapter {nextChapter}
                </a>
              )}

              {(totalChapters === currentChapter) && !COMPLETE && (
                <div className="text-gray-400 py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0 text-sm">
                  (Chapter {nextChapter} coming soon)
                </div>
              )}

              {(totalChapters === currentChapter) && COMPLETE && (
                <div className="text-white py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0 text-lg">
                  The End
                </div>
              )}

              <a
                href="/"
                className="mx-3 font-bold hover:underline"
              >
                Home
              </a>
            </div>
          )}
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
