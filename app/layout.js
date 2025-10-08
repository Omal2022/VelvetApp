import { Cinzel, Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "./footer";
import script from "next/script";



const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // add more weights if needed
  variable: "--font-cinzel",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700" , "600"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "VelvetCore",
  description: "Luxury rental items",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"  data-scroll-behavior="smooth">
      <body className={`${cinzel.variable} ${montserrat.variable}`}>
        {children}
        <script src="https://kit.fontawesome.com/1c44fc6f87.js" async></script>
        <Footer />
      </body>
    </html>
  );
}
