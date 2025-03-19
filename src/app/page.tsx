"use client"

import type React from "react"

import { useState } from "react"
import {
  Users,
  MessageSquare,
  ChevronDown,
  ChevronUp,
  Vote,
  History,
  UserCheck,
  FileCheck,
  Flag,
  Users2,
  Building,
  Award,
  Filter,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "./components/navbar"
import { Footer } from "./components/footer"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    name: "¿Sé para qué son estas elecciones? ¿Entiendo la importancia de mi voto?",
    description:
      "Este 2025 elegiremos al Presidente, Vicepresidente y representantes de la Asamblea Legislativa Plurinacional.",
    moreInfo:
      "Este 2025, además de elegir al próximo Presidente y Vicepresidente del país, elegiremos a los representantes de la Asamblea Legislativa Plurinacional. Ellos básicamente se encargan de aprobar, proponer y crear leyes. En total elegiremos 130 diputados y diputadas y 36 senadores y senadoras, las y los candidatos varían según tu departamento y tu provincia.\n\n Elegiremos a la gente que dirigirá el destino de cada uno de nosotros durante 5 años porque de las decisiones políticas dependen nuestros ingresos económicos, nuestra salud, nuestra educación, nuestra seguridad y mucho más. \n\n Estas elecciones son delicadas porque vivimos una crisis política, económica y ambiental que se acentúa mes a mes, y que la sentimos todos.",
    risks: [
      "Pienso que la política no me afecta y por eso no es importante informarse.",
      "Voto porque es obligatorio y para poder hacer transacciones bancarias.",
      "Pienso a menudo que mi voto no hará la diferencia.",
      "Pienso que tengo que votar por alguien que solo solucione lo urgente.",
    ],
    myrisk: ["El OEP no brinda información digerible ni en medios de comunicación abiertos."],
    icon: Vote,
    image: "/placeholder.svg?height=200&width=400",
    color: "bg-blue-50",
  },
  {
    name: "¿Conozco a TODOS los binomios presidenciales? ¿Conozco sus historiales políticos?",
    description: "Es imprescindible conocer a todos los candidatos y sus historiales políticos.",
    moreInfo:
      "Es imprescindible conocer a todos los candidatos y sus historiales políticos. Muchos de ellos tienen un pasado que no necesariamente los define actualmente, sin embargo, si nos puede dar ciertas luces del comportamiento político de los candidatos. Algunos han pasado de partido en partido según su conveniencia o interés, otros han sido procesados por corrupción, otros han creado grandes fortunas a través de ilícitos. Saber esta información nos puede ayudar a tener una idea de si lo que prometen tiene coherencia con lo que hacen, hicieron o harán.",

    risks: [
      "Solo conozco a uno o algunos candidatos.",
      "Usé solo un medio para informarme.",
      "Algún candidato tiene procesos por corrupción o malversación.",
      "Ha cambiado de partido de manera oportunista.",
    ],
    myrisk: [
      "Algún miembro del binomio tiene un proceso o más en su contra por corrupción, malversación de fondos, violencia o nepotismo.",
      "Algún miembro del binomio ha cambiado de partido o postura de manera oportunista durante su carrera política.",
    ],
    icon: History,
    image: "/placeholder.svg?height=200&width=400",
    color: "bg-amber-50",
  },
  {
    name: "¿Conozco a los candidatos a parlamentarios que representarán mi departamento y provincia?",
    moreInfo:
      "Los parlamentarios que son los miembros de la Asamblea Legislativa Plurinacional, o sea diputados y senadores son usualmente líderes más o menos cercanos a nosotros. Es fundamental intentar indagar en su historial político, informarse no solo con propaganda hecha por ellos mismos. ",
    description: "Es clave investigar sus antecedentes y evitar votar solo por propaganda.",
    risks: ["No sé quién es mi representante."],
    myrisk: [
      "Nunca se involucró en temas políticos o sociales antes en tu localidad, ciudad o región y da la impresión que está buscando solo una pega o trabajo.",
      "Cuando hablan en prensa o cualquier otro medio solo repiten el mismo discurso que el Presidente o Vicepresidente de su partido o alianza política. ",
      "Solo existe información suya en forma de propaganda política.",
    ],
    icon: UserCheck,
    image: "/placeholder.svg?height=200&width=400",
    color: "bg-green-50",
  },
  {
    name: "¿Las propuestas de los candidatos son realistas y están bien fundamentadas?",
    description: "Es importante saber si las propuestas son factibles y tienen fundamentos sólidos.",
    moreInfo:
      'Es fundamental entender que nos están prometiendo, y más importante aún saber qué responden cuando alguien les pregunta el "cómo" lograrlo". Muchas veces votar es una apuesta a ciegas, a veces dejamos al tink\'azo votar pero es posible salir de la intuición intentando buscar el sentido lógico de la propuesta, es decir, qué si la posibilidad de lograr esas propuestas son reales.Es importante conocer sus propuestas para tener una idea general de cómo será el gobierno al menos en temas generales cómo:Trabajo y oportunidades, Salud, Educación, Justicia, Seguridad',
    risks: [
      "Me informo de las propuestas solo en redes sociales y de solo contenido que me hace sentir cómodo o cómoda. ",
    ],
    myrisk: [
      "Todas sus propuestas están dirigidas a atender solo temas urgentes.",
      "Sus propuestas son sumamente densas y tienen contradicciones importantes. ",
      "Su discurso está basado principalmente en el ataque a otro candidato, partido, ideología o gestión gubernamental.",
    ],
    icon: FileCheck,
    image: "/placeholder.svg?height=200&width=400",
    color: "bg-purple-50",
  },
]
const timelineEvents = [
  {
    date: "19 de abril",
    title: "Convocatoria de elecciones",
    description: "Fecha de convocatoria oficial para las elecciones presidenciales.",
  },
  {
    date: "20 de mayo",
    title: "Inscripción de candidaturas",
    description: "Apertura del período de inscripción para los candidatos presidenciales y legislativos.",
  },
  {
    date: "17 de agosto",
    title: "Elecciones presidenciales y legislativas",
    description: "Día en que se llevarán a cabo las elecciones presidenciales y legislativas.",
  },
  {
    date: "19 de octubre",
    title: "Segunda vuelta presidencial",
    description: "Fecha programada para la segunda vuelta presidencial, en caso de ser necesaria.",
  },
]

const bloques = [
  {
    id: "unidad-opositora",
    name: "Bloque de Unidad Opositora",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yO4Gno13323yOVqAYAa1unTxKWak1h.png",
    description:
      "Este bloque es una alianza de políticos que han ocupado cargos públicos en el pasado. A excepción de Luis Fernando Camacho quien antes de ser candidato en 2019 y 2020, ocupó el cargo de Presidente del Comité Cívico Pro Santa Cruz.",
    actores: ["Samuel Doria Medina", "Jorge Tuto Quiroga Ramírez", "Amparo Ballivián Cuellar", "Tomás Monasterio"],
    color: "bg-blue-50",
    icon: Building,
    tags: ["Oposición", "Centro-derecha", "Alianza"],
  },
  {
    id: "liberal-libertario",
    name: "Bloque Liberal-libertario",
    image: null,
    description:
      "En este bloque se encuentra caracterizado por tener alianzas independientes pero que comparten el discurso ideológico liberal-libertario. Se trata de precandidatos independientes pero que comparten el discurso ideológico liberal-libertario.",
    actores: ["Branko Marinkovic", "Jaime Dunn", "José Carlos Sánchez Berzaín"],
    color: "bg-amber-50",
    icon: Award,
    tags: ["Liberal", "Libertario", "Independiente"],
  },
  {
    id: "evista",
    name: "Bloque Evista",
    image: "fpv",
    description:
      "Este bloque está dirigido por Evo Morales quien a la fecha se encuentra inhabilitado en conformidad con el Auto Constitucional 0063/2024 emitido por Tribunal Constitucional cuando aún los magistrados de este tribunal no se encontraban auto prorrogados.",
    actores: ["Evo Morales", "Andrónico Rodríguez"],
    color: "bg-green-50",
    icon: Flag,
    tags: ["Izquierda", "Indigenista", "MAS"],
  },
  {
    id: "mas-ipsp",
    name: "Bloque MAS-IPSP",
    image: "mas-ipsp",
    description:
      "Este bloque está encabezado por la directiva renovada del partido político MAS-IPSP y el presidente Luis Arce Catacora. Aún no se ha definido un binomio para las elecciones, pero seguro se va a participar.",
    actores: ["Luis Arce Catacora"],
    color: "bg-purple-50",
    icon: Flag,
    tags: ["Oficialismo", "Izquierda", "MAS"],
  },
  {
    id: "independiente",
    name: "Bloque Independiente",
    image: "independiente",
    description:
      "En este bloque no existen alianzas ni un horizonte ideológico en común. Existen varios actores y actoras pero muchos de ellos aún no han cobrado relevancia política.",
    actores: ["Manfred Reyes Villa", "Chi Hyung Chung", "Rodrigo Paz"],
    color: "bg-red-50",
    icon: Users2,
    tags: ["Independiente", "Diverso", "Sin alianza"],
  },
]

export default function Home() {
  const [expandedFeature, setExpandedFeature] = useState<string | null>(null)
  const [expandedRisks, setExpandedRisks] = useState<string | null>(null)
  const [expandedBloque, setExpandedBloque] = useState<string | null>(null)
  const [activeFilter, setActiveFilter] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState("")

  const toggleFeature = (name: string) => {
    setExpandedFeature(expandedFeature === name ? null : name)
  }

  const toggleRisks = (name: string) => {
    setExpandedRisks(expandedRisks === name ? null : name)
  }

  const toggleBloque = (id: string) => {
    setExpandedBloque(expandedBloque === id ? null : id)
  }

  const handleFilterChange = (tag: string) => {
    setActiveFilter(activeFilter === tag ? null : tag)
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  // Filter bloques based on active filter and search term
  const filteredBloques = bloques.filter((bloque) => {
    const matchesFilter = !activeFilter || bloque.tags.includes(activeFilter)
    const matchesSearch =
      !searchTerm ||
      bloque.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bloque.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bloque.actores.some((actor) => actor.toLowerCase().includes(searchTerm.toLowerCase()))

    return matchesFilter && matchesSearch
  })

  // Get all unique tags
  const allTags = Array.from(new Set(bloques.flatMap((bloque) => bloque.tags)))

  return (
    <>
      <Navbar />
      <main className="py-16 px-4 sm:px-8">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl font-bold font-round">TE AYUDAMOS A INFORMARTE ANTES DE VOTAR</h1>
            <p className="mt-4 text-lg sm:text-xl text-gray-600 font-round">
              Bienvenidos y bienvenidas a este espacio apartidista donde te brindamos una guía para votar
              conscientemente y con información verificada.
            </p>

            <div className="mt-16 space-y-10">
              {features.map((feature) => (
                <div key={feature.name} className="p-8 border rounded-lg shadow-md overflow-hidden">
                  <div className="flex flex-col md:flex-row gap-8">
                    {/* Image Section */}
                    <div
                      className={`rounded-lg overflow-hidden ${feature.color} md:w-1/3 flex items-center justify-center p-6`}
                    >
                      <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                        <img
                          src={feature.image || "/placeholder.svg"}
                          alt={feature.name}
                          className="object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <feature.icon className="h-24 w-24 text-primary/70" />
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="md:w-2/3 flex flex-col justify-center items-center text-center">
                      <h3 className="text-2xl font-semibold flex items-center font-round mb-4">
                        <span>{feature.name}</span>
                      </h3>
                      <p className="text-xl text-gray-600 mb-6">{feature.description}</p>
                      <div className="mt-4 flex flex-wrap justify-center gap-4">
                        <Button
                          variant="ghost"
                          size="lg"
                          className="text-lg font-medium px-6"
                          onClick={() => toggleFeature(feature.name)}
                        >
                          {expandedFeature === feature.name ? "Menos Info" : "Más Info"}
                        </Button>
                        <Button
                          variant="destructive"
                          size="lg"
                          className="text-lg font-medium px-6"
                          onClick={() => toggleRisks(feature.name)}
                        >
                          Red Flag
                        </Button>
                      </div>
                    </div>
                  </div>

                  {expandedFeature === feature.name && (
                    <div className="mt-6 text-lg text-gray-800 border-t pt-6">{feature.moreInfo}</div>
                  )}

                  {/* Display Risks */}
                  {expandedRisks === feature.name && (
                    <div className="mt-6 flex flex-col md:flex-row gap-6 md:space-x-8 border-t pt-6">
                      {/* My Redflags Column */}
                      <div className="flex-1">
                        <h4 className="font-semibold text-red-700 text-xl mb-3">Mis Redflags</h4>
                        <ul className="mt-2 list-disc list-inside text-red-700 bg-red-50 p-4 rounded-lg text-lg">
                          {feature.risks.map((risk, index) => (
                            <li key={index} className="mb-2">
                              {risk}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Their Redflags Column */}
                      <div className="flex-1">
                        <h4 className="font-semibold text-red-700 text-xl mb-3">Redflags</h4>
                        <ul className="mt-2 list-disc list-inside text-red-700 bg-red-50 p-4 rounded-lg text-lg">
                          {feature.myrisk.map((myrisk, index) => (
                            <li key={index} className="mb-2">
                              {myrisk}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <Link href="/about">
              <Button
                variant="outline"
                size="lg"
                className="group relative overflow-hidden border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white text-lg px-8 py-6"
              >
                <div className="absolute inset-0 bg-gray-800/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-md"></div>
                <Users className="mr-3 h-6 w-6 transition-transform group-hover:scale-110 duration-300" />
                <span className="relative z-10">Quiénes Somos</span>
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="group relative overflow-hidden border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white text-lg px-8 py-6"
              >
                <div className="absolute inset-0 bg-gray-800/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-md"></div>
                <MessageSquare className="mr-3 h-6 w-6 transition-transform group-hover:scale-110 duration-300" />
                <span className="relative z-10">Buzón de Sugerencias</span>
              </Button>
            </Link>
          </div>

          <div id="timeline" className="mt-16 sm:mt-20">
            <h2 className="text-3xl font-bold mb-6 font-round">ELECCIONES PRESIDENCIALES Y LEGISLATIVAS</h2>
            <div className="relative border-l border-foreground/20">
              {timelineEvents.map((event, index) => (
                <div key={index} className="mb-8 ml-4">
                  <div className="absolute w-3 h-3 bg-foreground/20 rounded-full mt-1.5 -left-1.5 border border-background"></div>
                  <Card className="border-foreground/20">
                    <CardContent className="p-4">
                      <time className="mb-1 text-base font-normal text-foreground/60">{event.date}</time>
                      <h3 className="text-xl font-semibold">{event.title}</h3>
                      <p className="mt-2 text-base text-foreground/80">{event.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div id="bloques-preelectorales" className="mt-16 sm:mt-20">
            <h2 className="text-3xl font-bold mb-6 text-center font-round">BLOQUES PREELECTORALES</h2>
            <div className="mb-6 text-center max-w-3xl mx-auto">
              <p className="text-lg text-gray-600">
                Aclaramos que no todos los actores políticos mencionados han confirmado su precandidatura o están
                legalmente habilitados, sin embargo, este es un panorama general del escenario preelectoral hasta marzo
                del 2025.
              </p>
            </div>

            {/* Search and Filter Controls */}
            <div className="mb-8 flex flex-col sm:flex-row gap-4 justify-between items-center">
              <div className="relative w-full sm:w-auto">
                <input
                  type="text"
                  placeholder="Buscar bloques o actores..."
                  className="pl-10 pr-4 py-2 border rounded-lg w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-primary"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 justify-center">
                <span className="flex items-center text-sm font-medium text-gray-600 mr-2">
                  <Filter className="h-4 w-4 mr-1" /> Filtrar por:
                </span>
                {allTags.map((tag) => (
                  <Badge
                    key={tag}
                    variant={activeFilter === tag ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => handleFilterChange(tag)}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Interactive Accordion List */}
            <div className="space-y-4">
              {filteredBloques.length > 0 ? (
                filteredBloques.map((bloque) => (
                  <div
                    key={bloque.id}
                    className={`border rounded-lg overflow-hidden transition-all duration-300 ${
                      expandedBloque === bloque.id ? "shadow-lg" : "shadow"
                    }`}
                  >
                    {/* Accordion Header */}
                    <div
                      className={`${bloque.color} p-4 flex items-center justify-between cursor-pointer`}
                      onClick={() => toggleBloque(bloque.id)}
                    >
                      <div className="flex items-center">
                        <div className="bg-white/80 p-2 rounded-full mr-3">
                          <bloque.icon className="h-6 w-6 text-gray-700" />
                        </div>
                        <h3 className="text-xl font-bold">{bloque.name}</h3>
                      </div>
                      <div className="flex items-center">
                        <div className="hidden sm:flex gap-2 mr-4">
                          {bloque.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        {expandedBloque === bloque.id ? (
                          <ChevronUp className="h-6 w-6 text-gray-700" />
                        ) : (
                          <ChevronDown className="h-6 w-6 text-gray-700" />
                        )}
                      </div>
                    </div>

                    {/* Accordion Content */}
                    {expandedBloque === bloque.id && (
                      <div className="p-6 bg-white">
                        <div className="flex flex-col md:flex-row gap-6">
                          {/* Image/Logo Section */}
                          <div className="md:w-1/3">
                            <div className="aspect-video relative rounded-lg overflow-hidden border">
                              {bloque.image &&
                              typeof bloque.image === "string" &&
                              bloque.image !== "fpv" &&
                              bloque.image !== "mas-ipsp" &&
                              bloque.image !== "independiente" ? (
                                <img
                                  src={bloque.image || "/placeholder.svg"}
                                  alt={bloque.name}
                                  className="object-cover w-full h-full"
                                />
                              ) : bloque.image === "fpv" ? (
                                <div className="absolute inset-0 bg-green-600/20 flex items-center justify-center">
                                  <p className="text-green-800 font-semibold text-base">(FPV)</p>
                                </div>
                              ) : bloque.image === "mas-ipsp" ? (
                                <div className="absolute inset-0 flex items-center justify-center bg-blue-50">
                                  <p className="text-blue-800 font-semibold text-base">Logo del MAS-IPSP</p>
                                </div>
                              ) : bloque.image === "independiente" ? (
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <p className="text-gray-800 font-semibold text-base">Manfred Reyes Villa y otros</p>
                                </div>
                              ) : (
                                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                                  <p className="text-gray-600 font-semibold text-base">{bloque.name}</p>
                                </div>
                              )}
                            </div>

                            {/* Mobile-only tags */}
                            <div className="flex flex-wrap gap-2 mt-4 sm:hidden">
                              {bloque.tags.map((tag) => (
                                <Badge key={tag} variant="secondary">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          {/* Content Section */}
                          <div className="md:w-2/3">
                            <div className="prose max-w-none">
                              <p className="text-lg mb-6">{bloque.description}</p>

                              <h4 className="text-xl font-semibold mb-3">Actores políticos principales:</h4>
                              <ul className="space-y-2">
                                {bloque.actores.map((actor, idx) => (
                                  <li key={idx} className="flex items-start">
                                    <span className="inline-block h-6 w-6 rounded-full bg-gray-200 flex-shrink-0 mr-2"></span>
                                    <span className="text-lg">{actor}</span>
                                  </li>
                                ))}
                              </ul>

                              <div className="mt-6 flex justify-end">
                                <Button variant="outline" className="mr-2">
                                  Historial político
                                </Button>
                                <Button>Ver detalles completos</Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                  <p className="text-lg text-gray-600">No se encontraron bloques que coincidan con tu búsqueda.</p>
                  <Button
                    variant="outline"
                    className="mt-4"
                    onClick={() => {
                      setSearchTerm("")
                      setActiveFilter(null)
                    }}
                  >
                    Mostrar todos los bloques
                  </Button>
                </div>
              )}
            </div>
          </div>

          <div id="parties" className="mt-16 sm:mt-20">
            <h2 className="text-3xl font-bold mb-6 text-center font-round"> CANDIDATOS</h2>
            <h3 className="text-2xl  mb-6 text-center">
              Este espacio se llenará a medida que se oficialicen los candidatos y candidatas.
            </h3>
            <h3 className="text-2xl mb-6 text-center">
              Aquí encontrarás información sobre procesos penales, denuncias contra ellos y ellas, y su recorrido
              político en general.
            </h3>
          </div>

          <div id="parties" className="mt-16 sm:mt-20">
            <h2 className="text-3xl font-bold mb-6 text-center font-round">
              PARTIDOS POLÍTICOS, AGRUPACIONES CIUDADANAS Y ORGANIZACIONES DE NACIONES Y PUEBLOS IOC
            </h2>
            <h3 className="text-2xl mb-6 text-center">
              Este espacio se llenará a medida que se oficialicen las candidaturas.
            </h3>
            <h3 className="text-2xl  mb-6 text-center">
              Aquí encontrarás información sistematizada sobre sus propuestas de gobierno.
            </h3>
          </div>

          <div className="mt-16 text-center">
            <Button
              className="bg-gray-900 hover:bg-gray-950 text-white font-bold py-4 px-10 rounded-lg shadow-lg transform transition-transform hover:scale-105 text-xl"
              onClick={() => window.open(" https://chequeabolivia.bo/ ", "_blank")}
            >
              Lucha contra la desinformación
            </Button>
            <p className="mt-3 text-base text-gray-600">
              Únete a nuestra campaña para combatir las noticias falsas y la desinformación electoral
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

