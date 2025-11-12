import { Footer, LastUpdated, Layout, Navbar, NotFoundPage } from 'nextra-theme-docs'
import { Banner, Head, Search } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import './globals.css';
import 'nextra-theme-docs/style.css'; // depois do Tailwind

export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
}

const banner = <Banner storageKey="some-key">Banner dahora</Banner>
const navbar = (
  <Navbar
    logo={<b>Ecocentauro</b>}
  // ... Your additional navbar options
  />
)
const footer = <Footer>MIT {new Date().getFullYear()} © Nextra.</Footer>
const search = <Search
  placeholder='Pesquisar...' 
  emptyResult='Nenhum resultado encontrado'
  loading='Carregando...'
  error='Erro ao buscar'
/>

const lastUpdated = (
  <LastUpdated
    children="Última atualização"
    locale='pt-BR'
  />
)

export default async function RootLayout({ children }) {
  return (
    <html
      lang="pt-br"
      dir="ltr"
      suppressHydrationWarning
    >
      <Head>
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          // banner={banner}
          editLink={"Edite esta página"}
          feedback={{ content: 'Deixe seu feedback' }}
          sidebar={{ autoCollapse: true }}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
          footer={footer}
          search={search}
          lastUpdated={lastUpdated}
          toc={{ title: 'Nesta página', backToTop: 'Voltar ao topo' }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}