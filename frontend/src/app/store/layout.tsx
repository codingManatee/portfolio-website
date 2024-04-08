import MenuSidebar from "@/components/Store/MenuSidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-row space-x-4 mx-4">
      <MenuSidebar />
      <div className="">{children}</div>
    </div>
  );
}
