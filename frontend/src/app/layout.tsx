import Navbar from "@/components/Navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-screen h-screen">
        <div className="z-50 sticky top-0">
          <Navbar/>
        </div>
        {children}
        </body>
    </html>
  );
}
