"use client"

import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { ArrowRight, Cog, BarChart3, Package } from "lucide-react"

const products = [
  {
    name: "EcoOS",
    slug: "ecoos",
    description: "Aplicativo de Ordens de Serviço",
    icon: Cog, // ícone temporário
    // logo: "/logos/ecoos.svg", // ← futuro logo
  },
  {
    name: "Eco360",
    slug: "eco360",
    description: "Painel de gestão e relatórios",
    icon: BarChart3,
    // logo: "/logos/eco360.svg",
  },
  {
    name: "EcoColetor",
    slug: "ecocoletor",
    description: "App de coleta e conferência de produtos",
    icon: Package,
    // logo: "/logos/ecocoletor.svg",
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground p-8 md:p-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Documentação dos Produtos Eco
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => {
            const Icon = p.icon
            return (
              <Link key={p.slug} href={`/${p.slug}`}>
                <Card className="group hover:shadow-xl transition-all duration-200 border-border hover:border-primary">
                  <CardHeader className="flex flex-row items-center gap-4">
                    {/* <img src={p.logo} alt={p.name} className="w-12 h-12 rounded-md" /> */}
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      <Icon size={24} />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-semibold">{p.name}</CardTitle>
                      <CardDescription>{p.description}</CardDescription>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0 flex justify-end">
                    <ArrowRight className="text-muted-foreground group-hover:text-primary transition" />
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </main>
  )
}
