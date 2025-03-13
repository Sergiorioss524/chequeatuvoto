"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Info, Users, MessageSquare, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "./components/navbar"
import { Footer } from "./components/footer"
import Link from "next/link"

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
    name: "Bloque de Unidad Opositora",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yO4Gno13323yOVqAYAa1unTxKWak1h.png",
    description:
      "Este bloque es una alianza de políticos que han ocupado cargos públicos en el pasado. A excepción de Luis Fernando Camacho quien antes de ser candidato en 2019 y 2020, ocupó el cargo de Presidente del Comité Cívico Pro Santa Cruz.",
    actores: ["Samuel Doria Medina", "Jorge Tuto Quiroga Ramírez", "Amparo Ballivián Cuellar", "Tomás Monasterio"],
  },
  {
    name: "Bloque Liberal-libertario",
    image: null,
    description:
      "En este bloque se encuentra caracterizado por tener alianzas independientes pero que comparten el discurso ideológico liberal-libertario. Se trata de precandidatos independientes pero que comparten el discurso ideológico liberal-libertario.",
    actores: ["Branko Marinkovic", "Jaime Dunn", "José Carlos Sánchez Berzaín"],
  },
  {
    name: "Bloque Evista",
    image: "fpv",
    description:
      "Este bloque está dirigido por Evo Morales quien a la fecha se encuentra inhabilitado en conformidad con el Auto Constitucional 0063/2024 emitido por Tribunal Constitucional cuando aún los magistrados de este tribunal no se encontraban auto prorrogados.",
    actores: ["Evo Morales", "Andrónico Rodríguez"],
  },
  {
    name: "Bloque MAS-IPSP",
    image: "mas-ipsp",
    description:
      "Este bloque está encabezado por la directiva renovada del partido político MAS-IPSP y el presidente Luis Arce Catacora. Aún no se ha definido un binomio para las elecciones, pero seguro se va a participar.",
    actores: ["Luis Arce Catacora"],
  },
  {
    name: "Bloque Independiente",
    image: "independiente",
    description:
      "En este bloque no existen alianzas ni un horizonte ideológico en común. Existen varios actores y actoras pero muchos de ellos aún no han cobrado relevancia política.",
    actores: ["Manfred Reyes Villa", "Chi Hyung Chung", "Rodrigo Paz"],
  },
]

export default function Home() {
  const [expandedFeature, setExpandedFeature] = useState<string | null>(null)
  const [expandedRisks, setExpandedRisks] = useState<string | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const toggleFeature = (name: string) => {
    setExpandedFeature(expandedFeature === name ? null : name)
  }

  const toggleRisks = (name: string) => {
    setExpandedRisks(expandedRisks === name ? null : name)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === bloques.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? bloques.length - 1 : prev - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      nextSlide()
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right
      prevSlide()
    }
  }

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 8000)
    return () => clearInterval(interval)
  }, [])

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

            {/* Quick Links to About and Contact */}
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/about">
                <Button variant="outline" size="lg" className="group relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-md"></div>
                  <Users className="mr-2 h-5 w-5 transition-transform group-hover:scale-110 duration-300" />
                  <span className="relative z-10">Quiénes Somos</span>
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="group relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-md"></div>
                  <MessageSquare className="mr-2 h-5 w-5 transition-transform group-hover:scale-110 duration-300" />
                  <span className="relative z-10">Buzón de Sugerencias</span>
                </Button>
              </Link>
            </div>
          </div>

          <div className="mt-16 space-y-8">
            {features.map((feature) => (
              <div key={feature.name} className="p-6 border rounded-lg shadow-md">
                <h3 className="text-xl font-semibold flex items-center font-round">
                  <Info className="mr-2 text-blue-500" /> {feature.name}
                </h3>
                <p className="text-base text-gray-600 mt-2">{feature.description}</p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="mt-2 text-base"
                  onClick={() => toggleFeature(feature.name)}
                >
                  {expandedFeature === feature.name ? "Menos Info" : "Más Info"}
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  className="ml-2 text-base"
                  onClick={() => toggleRisks(feature.name)}
                >
                  Red Flag
                </Button>
                {expandedFeature === feature.name && (
                  <div className="mt-2 text-base text-gray-800">{feature.moreInfo}</div>
                )}

                {/* Display Risks */}
                {expandedRisks === feature.name && (
                  <div className="mt-2 flex space-x-8">
                    {/* My Redflags Column */}
                    <div className="flex-1">
                      <h4 className="font-semibold text-red-700 text-lg">Mis Redflags</h4>
                      <ul className="mt-2 list-disc list-inside text-red-700 bg-red-50 p-2 rounded-lg text-base">
                        {feature.risks.map((risk, index) => (
                          <li key={index}>{risk}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Their Redflags Column */}
                    <div className="flex-1">
                      <h4 className="font-semibold text-red-700 text-lg">Sus Redflags</h4>
                      <ul className="mt-2 list-disc list-inside text-red-700 bg-red-50 p-2 rounded-lg text-base">
                        {feature.myrisk.map((myrisk, index) => (
                          <li key={index}>{myrisk}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
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

          <div id="parties" className="mt-16 sm:mt-20">
            <h2 className="text-3xl font-bold mb-6 text-center font-round">PARTIDOS POLITICOS</h2>
            <h3 className="text-2xl font-bold mb-6 text-center">
              Este espacio se llenará a medida que candidatos y alianzas presenten información oficial
            </h3>
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

            {/* Carousel */}
            <div className="relative max-w-3xl mx-auto">
              <div
                className="overflow-hidden"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {bloques.map((bloque, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <Card className="border-foreground/20 h-full shadow-lg hover:shadow-xl transition-shadow">
                        <CardContent className="p-6">
                          <h3 className="text-2xl font-semibold mb-4 text-center">{bloque.name}</h3>

                          <div className="aspect-video relative mb-4 bg-gray-100 rounded-md overflow-hidden">
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
                                <p className="text-green-800 font-semibold text-xl">(FPV)</p>
                              </div>
                            ) : bloque.image === "mas-ipsp" ? (
                              <div className="absolute inset-0 flex items-center justify-center bg-blue-50">
                                <p className="text-blue-800 font-semibold text-xl">Logo del MAS-IPSP</p>
                              </div>
                            ) : bloque.image === "independiente" ? (
                              <div className="absolute inset-0 flex items-center justify-center">
                                <p className="text-gray-800 font-semibold text-xl">Manfred Reyes Villa y otros</p>
                              </div>
                            ) : (
                              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                                <p className="text-gray-600 font-semibold text-xl">{bloque.name}</p>
                              </div>
                            )}
                          </div>

                          <p className="text-lg mb-4 text-gray-700">{bloque.description}</p>

                          <h4 className="font-semibold text-lg mb-2">Los actores políticos son:</h4>
                          <ul className="list-disc list-inside text-lg">
                            {bloque.actores.map((actor, idx) => (
                              <li key={idx} className="mb-1">
                                {actor}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md z-10 transition-all hover:scale-110"
                aria-label="Anterior bloque"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md z-10 transition-all hover:scale-110"
                aria-label="Siguiente bloque"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Dots Indicator */}
              <div className="flex justify-center mt-6 space-x-2">
                {bloques.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      currentSlide === index ? "bg-primary w-6" : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Ir al bloque ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button variant="outline" className="text-base">
                Ver análisis completo
              </Button>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Button
              className="bg-gray-900 hover:bg-gray-950 text-white font-bold py-4 px-10 rounded-lg shadow-lg transform transition-transform hover:scale-105 text-xl"
              onClick={() => window.open("https://www.example.com/contra-desinformacion", "_blank")}
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

