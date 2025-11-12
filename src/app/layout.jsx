import "./globals.css"
import { Montserrat } from "next/font/google";

export const metadata = {
  title: "Documentação Eco Centauro",
  description: "Catálogo de produtos e documentação da Eco Centauro",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export default function HomeLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body  className={`${montserrat.variable} min-h-screen bg-background text-foreground"`}>
        {children}
      </body>
    </html>
  );
}

