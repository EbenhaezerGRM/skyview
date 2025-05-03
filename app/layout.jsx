import "@styles/globals.css";

export const metadata = {
  title: 'SkyView',
  description: 'SkyView is a weather app that shows the current weather and air quality index of a location.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen">
        <main className="container mx-auto p-4">
          {children}
        </main>
      </body>
    </html>
  );
}
