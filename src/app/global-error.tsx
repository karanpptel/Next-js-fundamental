"use client"; // Error boundaries must be Client Components
import "./globals.css";

export default function GlobalError() {
  return (
    <html className="h-full">
      <body className="h-full">
        <div className="flex flex-col rounded-lg mt-8 relative p-4 border border-gray-300 items-center justify-center min-h-screen bg-gray-100">
          <h2 className="text-2xl font-bold mb-4">
            Whoops, something went wrong. Please refresh the page or try again later.
          </h2>
          <button
            //refresh the page
            onClick={() => window.location.reload()}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold  px-4 py-2 rounded-md "
          >
            Refresh
          </button>
        </div>
      </body>
    </html>
  );
}

//this code imported from nextjs documentation
// export default function GlobalError({
//   error,
//   reset,
// }: {
//   error: Error & { digest?: string }
//   reset: () => void
// }) {
//   return (
//     // global-error must include html and body tags
//     <html>
//       <body>
//         <h2>Something went wrong!</h2>
//         <button onClick={reset}>Try again</button>
//       </body>
//     </html>
//   )
// }
