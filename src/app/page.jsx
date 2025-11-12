"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowRight, Search, Smartphone, Monitor, Apple } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const products = [
  {
    name: "EcoOS",
    slug: "produtos/ecoos",
    description: "Aplicativo de Ordens de Serviço",
    logo: "/logos/ecoos/ecoos.png",
    ios: false,
    android: true,
    windows: false,
  },
  {
    name: "Eco360",
    slug: "produtos/eco360",
    description: "Painel de gestão e relatórios",
    logo: "/logos/eco360/eco360.png",
    ios: true,
    android: true,
    windows: false,
  },
  {
    name: "EcoColetor",
    slug: "produtos/ecocoletor",
    description: "App de coleta e conferência de produtos",
    logo: "/logos/eco/ecofull.png",
    ios: false,
    android: true,
    windows: false,
  },
  {
    name: "EcoLoja Posto",
    slug: "produtos/ecoloja-posto",
    description: "App de loja para PDV",
    logo: "/logos/eco/ecofull.png",
    ios: false,
    android: true,
    windows: false,
  },
  {
    name: "EcoLoja Posto Client",
    slug: "produtos/ecoloja-posto-client",
    description: "App cliente de loja/ponto de venda",
    logo: "/logos/eco/ecofull.png",
    ios: false,
    android: false,
    windows: true,
  },
  {
    name: "EcoMobile",
    slug: "produtos/ecomobile",
    description: "App de força de vendas",
    logo: "/logos/eco/ecofull.png",
    ios: false,
    android: true,
    windows: false,
  },
  {
    name: "EcoMobile Client",
    slug: "produtos/ecomobile-client",
    description: "App cliente do EcoMobile",
    logo: "/logos/eco/ecofull.png",
    ios: false,
    android: false,
    windows: true,
  },
  {
    name: "EcoProntaEntrega",
    slug: "produtos/ecoprontaentrega",
    description: "App de entrega de pedidos",
    logo: "/logos/eco/ecofull.png",
    ios: false,
    android: true,
    windows: false,
  },
  {
    name: "EcoProntaEntrega Client",
    slug: "produtos/ecoprontaentrega-client",
    description: "App cliente de pronta entrega",
    logo: "/logos/eco/ecofull.png",
    ios: false,
    android: false,
    windows: true,
  },
  {
    name: "EcoFichaDeVisitas",
    slug: "produtos/ecofichadevisitas",
    description: "App de registro de visitas comerciais",
    logo: "/logos/eco/ecofull.png",
    ios: false,
    android: false,
    windows: true,
  },
  {
    name: "EcoServidor",
    slug: "produtos/ecoservidor",
    description: "Integração e serviços backend",
    logo: "/logos/eco/ecofull.png",
    ios: false,
    android: false,
    windows: true,
  },
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-background text-foreground p-8 md:p-12">
      <div className="max-w-6xl mx-auto">
        <main className="min-h-xl bg-background text-foreground flex flex-col items-center justify-center mb-16 ">
          {/* Logo */}
          <Image
            src="/logos/eco/ecofull.png"
            alt="Logo Eco Centauro"
            width={96}
            height={96}
            className="mb-6"
          />

          {/* Título */}
          <h1
            className="text-3xl md:text-4xl font-bold text-center mb-10 
                   bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800 
                   bg-clip-text text-transparent animate-gradient"
          >
            Documentação EcoCentauro
          </h1>

          {/* Campo de busca */}
          <div className="relative w-full max-w-2xl">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              size={18}
            />
            <Input
              type="text"
              placeholder="Pesquisar produtos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-6 text-base rounded-full shadow-sm bg-card focus-visible:ring-2 focus-visible:ring-blue-600"
            />
          </div>
        </main>
        {/* <h1
          className="text-3xl md:text-4xl font-bold mb-12 text-center 
             bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800 
             bg-clip-text text-transparent animate-gradient"
        >
          Documentação dos Produtos Eco Centauro
        </h1>

        <div className="flex items-center gap-2 mx-auto mb-10">
          <Input
            type="text"
            placeholder="Buscar produto..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-card text-base h-12 px-4"
          />
        </div> */}

        {/* Lista filtrada */}
        {filteredProducts.length === 0 ? (
          <p className="text-center text-muted-foreground mt-8">
            Nenhum produto encontrado.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((p) => (
              <Link key={p.slug} href={`/${p.slug}`}>
                <Card className="group hover:shadow-xl transition-all duration-200 border-border hover:border-primary w-full h-48 flex flex-col justify-between">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <img
                      src={p.logo}
                      alt={p.name}
                      className="w-32 h-12 object-contain rounded-md"
                    />
                    <div>
                      <CardTitle className="text-lg font-semibold">
                        {p.name}
                      </CardTitle>
                      <CardDescription className="line-clamp-2">
                        {p.description}
                      </CardDescription>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0 flex justify-between items-center">
                    <div className="flex flex-wrap gap-2">
                      {p.android && (
                        <Badge
                          variant="outline"
                          className="flex items-center gap-1 border-border/90 px-2 py-0.5"
                        >
                          <Smartphone size={14} className="text-green-500" />
                          <span className="text-xs text-foreground">
                            Android
                          </span>
                        </Badge>
                      )}
                      {p.ios && (
                        <Badge
                          variant="outline"
                          className="flex items-center gap-1 border-border/90 px-2 py-0.5"
                        >
                          <Apple size={14} className="text-gray-500" />
                          <span className="text-xs text-foreground">iOS</span>
                        </Badge>
                      )}
                      {p.windows && (
                        <Badge
                          variant="outline"
                          className="flex items-center gap-1 border-border/90 px-2 py-0.5"
                        >
                          <Monitor size={14} className="text-blue-500" />
                          <span className="text-xs text-foreground">
                            Windows
                          </span>
                        </Badge>
                      )}
                    </div>

                    <ArrowRight className="text-muted-foreground group-hover:text-primary transition" />
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
