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
import Lottie from "lottie-react";
import animationData from "../../public/lotties/Astronaut.json";

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
    <main className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-6xl mx-auto">
        <section
          className="
    relative w-full py-16 px-6 mb-10 
    bg-gradient-to-br from-gray-200 via-gray-50 to-gray-200
    text-white flex flex-col items-center justify-center
    rounded-2xl shadow-lg overflow-hidden
  "
        >
          <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-90  pointer-events-none z-0">
            <Lottie
              animationData={animationData}
              loop
              autoplay
              className="w-60 h-60 md:w-80 md:h-80"
            />
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-90 pointer-events-none z-0 scale-x-[-1]">
            <Lottie
              animationData={animationData}
              loop
              autoplay
              className="w-60 h-60 md:w-80 md:h-80"
            />
          </div>

          {/* Conteúdo acima dos Lotties */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Logo */}
            <Image
              src="/logos/eco/logo_horizontal.svg"
              alt="Logo Eco Centauro"
              width={450}
              height={96}
              className="mb-6 drop-shadow-xl"
            />

            {/* Campo de busca */}
            <div className="relative w-full max-w-2xl mt-10">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400"
                size={20}
              />
              <Input
                type="text"
                placeholder="Pesquisar produtos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="
          pl-12 pr-4 py-6 text-base rounded-full 
          bg-white text-black shadow-md 
          focus-visible:ring-2 focus-visible:ring-blue-400
        "
              />
            </div>
          </div>
        </section>

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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {filteredProducts.map((p) => (
              <Link key={p.slug} href={`/${p.slug}`}>
                <Card
                  className="
    group 
    hover:shadow-xl transition-all duration-300
    border border-border
    w-full h-48 flex flex-col justify-between
    bg-white relative
    
  "
                >
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
