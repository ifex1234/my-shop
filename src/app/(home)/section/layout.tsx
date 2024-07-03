import Navbar from "@/components/core/navbar";
import TopNav from "@/components/core/topNav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` container flex flex-col`}>
        <nav>
          <TopNav />
          <Navbar />
        </nav>
        <div className=" w-full">{children}</div>
      </body>
    </html>
  );
}
