import Image from "next/image"
import { Footer, LastUpdated, Layout, Navbar, NotFoundPage } from "nextra-theme-docs"
import { Banner, Head, Search } from "nextra/components"
import { getPageMap } from "nextra/page-map"
import "./globals.css"
import "nextra-theme-docs/style.css"

export const metadata = {}

// const banner = <Banner storageKey="some-key">Banner dahora</Banner>

const navbar = (
  <Navbar
    logo={
      <div className="flex items-center">
        <Image
          src="/logos/eco/ecomini.png" // 🖼️ substitua pelo caminho da sua logo
          alt="Logo EcoCentauro"
          width={170}
          height={28}
          className="rounded-sm"
        />
      </div>
    }
  />
)

const footer = <Footer>MIT {new Date().getFullYear()} © Nextra.</Footer>

const search = (
  <Search
    placeholder="Pesquisar..."
    emptyResult="Nenhum resultado encontrado"
    loading="Carregando..."
    error="Erro ao buscar"
  />
)

const lastUpdated = <LastUpdated children="Última atualização" locale="pt-BR" />

export default async function RootLayout({ children }) {
  return (
    <html lang="pt-br" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          // banner={banner}
          editLink={"Edite esta página"}
          feedback={{ content: "Deixe seu feedback" }}
          sidebar={{ autoCollapse: true }}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
          footer={footer}
          search={search}
          lastUpdated={lastUpdated}
          toc={{ title: "Nesta página", backToTop: "Voltar ao topo" }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
