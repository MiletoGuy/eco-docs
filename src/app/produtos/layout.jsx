import Image from "next/image"
import { Footer, LastUpdated, Layout, Navbar } from "nextra-theme-docs"
import { Head, Search } from "nextra/components"
import { getPageMap } from "nextra/page-map"
import "./../globals.css"
import "nextra-theme-docs/style.css"

export const metadata = {}

// const banner = <Banner storageKey="some-key">Banner dahora</Banner>

const navbar = (
  
  <Navbar 
    logo={
        <Image
          src="/logos/eco/logo_horizontal.svg"
          alt="EcoCentauro"
          width={200}
          height={28}
        />
    }
  />
  
)

const footer = <Footer>ECOCENTAURO {new Date().getFullYear()} © ECO.</Footer>

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
      {/* <div className="max-w-6xl mx-auto"> */}
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
        {/* </div> */}
      </body>
    </html>
  )
}
