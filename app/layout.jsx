import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer/Footer";
import "../styles/globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IDCH",
  description: "Instituto del Deporte Chaqueño",
  icon: "/favicon.ico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
