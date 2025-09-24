import { Cinzel, Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "./footer";

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
    <html lang="en">
      <body className={`${cinzel.variable} ${montserrat.variable}`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
