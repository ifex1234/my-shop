import Footer from "@/components/core/footer";
import Navbar from "@/components/core/navbar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body className={` w-full md:container flex flex-col`}>
      <nav>
        <Navbar />
      </nav>
      <div className=" w-full">{children}</div>
      <Footer />
    </body>
  );
}
