import Navbar from "@/components/core/navbar";
import TopNav from "@/components/core/topNav";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body className={` container flex flex-col`}>
      <nav>
        <TopNav />
        <Navbar />
      </nav>
      <div className=" w-full">{children}</div>
    </body>
  );
}
