import "./globals.css"

export const metadata = {
  title: "Documentação Eco Centauro",
  description: "Catálogo de produtos e documentação da Eco Centauro",
};

export default function HomeLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}

