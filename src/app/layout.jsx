import "./globals.css";
import { Roboto } from "next/font/google";

export const metadata = {
  title: "Documentação Eco Centauro",
  description: "Catálogo de produtos e documentação da Eco Centauro",
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-roboto",
});

export default function HomeLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body
        className={`${roboto.variable} min-h-screen bg-background text-foreground body-dotted`}
      >
        {children}
      </body>
    </html>
  );
}
