import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../app/globals.css";
import Footer from "@/components/core/footer";
import ContextProvider from "@/components/core/ContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kaphstore",
  description: "online super store at affordable prices",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}flex flex-col`}>
        <ContextProvider>
          <div className=" w-full md:container ">{children}</div>
          <div className=" w-full">
            <Footer />
          </div>
        </ContextProvider>
      </body>
    </html>
  );
}
