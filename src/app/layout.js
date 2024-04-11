import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  weight: ['200', '300','400','500','600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export const metadata = {
  title: "NPROOM | HOMEPAGE",
  description: "Introducing Nproom, your go-to destination for seamless room hunting. Whether you're a student, a working professional, or someone in search of a cozy space to call your own, Nproom has got you covered!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="./public/logo.png" sizes="any" />
      <body className={poppins.className}>

        <Navbar />

        {children}

        <Footer />
        
      </body>
    </html>
  );
}
