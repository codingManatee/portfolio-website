import Navbar from "@/components/Navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <div className="flex sticky">
          <Navbar/>
        </div>
        {children}
        </body>
    </html>
  );
}
