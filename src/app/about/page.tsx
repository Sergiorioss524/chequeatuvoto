"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Instagram, Facebook, Youtube, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "../components/navbar"
import { Footer } from "../components/footer"
import { motion } from "framer-motion"

const socialLinks = [
  {
    name: "La Aparicio (FOTO)",
    links: [
      { platform: "Instagram", url: "https://www.instagram.com/la.aparicioooo/", icon: Instagram },
      { platform: "TikTok", url: "https://www.tiktok.com/@la.apariciooo", icon: ExternalLink },
      { platform: "Youtube", url: "https://www.youtube.com/@PresenteBolivia", icon: Youtube },
    ],
  },
  {
    name: "Presente Bolivia (LOGO)",
    links: [
      { platform: "Instagram", url: "https://www.instagram.com/presente.bo/", icon: Instagram },
      { platform: "TikTok", url: "https://www.tiktok.com/@presente.bo", icon: ExternalLink },
      { platform: "Youtube", url: "https://www.youtube.com/@la.apariciooo", icon: Youtube },
    ],
  },
  {
    name: "Chequea Bolivia (LOGO)",
    links: [
      { platform: "Instagram", url: "https://www.instagram.com/chequeabolivia/", icon: Instagram },
      { platform: "Facebook", url: "https://www.facebook.com/ChequeaBolivia", icon: Facebook },
    ],
  },
]

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("about")
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <Navbar />
      <main className="py-16 px-4 sm:px-8 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link href="/">
              <Button variant="ghost" className="group">
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Volver al inicio
              </Button>
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4 font-round">Quiénes Somos</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Conoce más sobre nuestra iniciativa apartidista para informar a la ciudadanía
            </p>
          </motion.div>

          <div className="flex border-b mb-8">
            <button
              className={`px-4 py-2 font-medium text-sm transition-colors relative ${
                activeTab === "about" ? "text-primary" : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("about")}
            >
              Nuestra Misión
              {activeTab === "about" && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                ></motion.div>
              )}
            </button>
            <button
              className={`px-4 py-2 font-medium text-sm transition-colors relative ${
                activeTab === "team" ? "text-primary" : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("team")}
            >
              Nuestro Equipo
              {activeTab === "team" && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                ></motion.div>
              )}
            </button>
            <button
              className={`px-4 py-2 font-medium text-sm transition-colors relative ${
                activeTab === "contact" ? "text-primary" : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("contact")}
            >
              Contacto
              {activeTab === "contact" && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                ></motion.div>
              )}
            </button>
          </div>

          {activeTab === "about" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <p className="text-lg">
                      Somos una iniciativa apartidista sin fines lucrativos que busca brindar a la población información
                      verificada de los candidatos, sus propuestas políticas, sus historiales. También herramientas para
                      no caer en la desinformación, y por supuesto, información básica electoral como el calendario
                      electoral y el marco normativo para las elecciones.
                    </p>
                    <p>
                      Creemos en el derecho de cada ciudadano y ciudadana a tomar decisiones informadas y sin
                      manipulaciones. Entendemos que en nuestro mundo digital donde la información fluye a gran
                      velocidad, <span className="font-semibold">Chequea Tu Voto</span> es una herramienta importante
                      para ejercer este derecho.
                    </p>
                    <p>Esperamos que esta página sea de utilidad, por favor dejen sus comentarios y sugerencias.</p>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  style={{
                    y: scrollY * 0.1,
                    rotate: scrollY * 0.02,
                  }}
                >
                  <Card className="h-full transform transition-transform hover:scale-105 hover:shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-3">Nuestra Visión</h3>
                      <p>
                        Aspiramos a una Bolivia donde cada ciudadano pueda ejercer su derecho al voto con pleno
                        conocimiento y libertad, sin manipulaciones ni desinformación.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  style={{
                    y: scrollY * -0.1,
                    rotate: scrollY * -0.02,
                  }}
                >
                  <Card className="h-full transform transition-transform hover:scale-105 hover:shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-3">Nuestros Valores</h3>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Transparencia</li>
                        <li>Imparcialidad</li>
                        <li>Rigor informativo</li>
                        <li>Compromiso democrático</li>
                        <li>Servicio a la ciudadanía</li>
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          )}

          {activeTab === "team" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <p className="text-center text-lg mb-8">
                Nuestro equipo está formado por profesionales comprometidos con la democracia y la transparencia
                electoral. Trabajamos de manera voluntaria para brindar información verificada y de calidad.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <Card className="overflow-hidden group">
                  <div className="h-48 bg-gray-100 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform">
                      <p className="text-sm">Coordinador de Verificación de Datos</p>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold">Carlos Mendoza</h3>
                    <p className="text-sm text-gray-500">Periodista e Investigador</p>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden group">
                  <div className="h-48 bg-gray-100 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform">
                      <p className="text-sm">Directora de Comunicación</p>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold">Ana Flores</h3>
                    <p className="text-sm text-gray-500">Comunicadora Social</p>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden group">
                  <div className="h-48 bg-gray-100 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform">
                      <p className="text-sm">Analista Político</p>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold">Roberto Guzmán</h3>
                    <p className="text-sm text-gray-500">Politólogo</p>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center mt-8">
                <Button variant="outline" className="group">
                  <span>Conoce a todo el equipo</span>
                  <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          )}

          {activeTab === "contact" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-semibold mb-4">Contactos:</h2>
              <h3 className="text-xl font-medium mb-2">Redes sociales:</h3>

              <div className="space-y-8">
                {socialLinks.map((org, index) => (
                  <motion.div
                    key={org.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border p-4 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <h4 className="font-medium text-lg mb-3">{org.name}</h4>
                    <div className="space-y-2">
                      {org.links.map((link) => {
                        const Icon = link.icon
                        return (
                          <a
                            key={link.url}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center p-2 -mx-2 rounded-md hover:bg-gray-100 transition-colors"
                          >
                            <Icon className="h-5 w-5 mr-2 text-gray-600" />
                            <span className="mr-2">{link.platform}:</span>
                            <span className="text-blue-600 hover:underline truncate">{link.url}</span>
                          </a>
                        )
                      })}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Link href="/contact">
                  <Button className="group">
                    <span>Ir al Buzón de Sugerencias</span>
                    <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}

