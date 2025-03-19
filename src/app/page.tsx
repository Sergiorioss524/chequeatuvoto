"use client";

import type React from "react";

import { useState, useEffect } from "react";
import {
  Info,
  Users,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  Vote,
  History,
  UserCheck,
  FileCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import Link from "next/link";

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
    myrisk: [
      "El OEP no brinda información digerible ni en medios de comunicación abiertos.",
    ],
    icon: Vote,
    image: "/placeholder.svg?height=200&width=400",
    color: "bg-blue-50",
  },
  {
    name: "¿Conozco a TODOS los binomios presidenciales? ¿Conozco sus historiales políticos?",
    description:
      "Es imprescindible conocer a todos los candidatos y sus historiales políticos.",
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
    description:
      "Es clave investigar sus antecedentes y evitar votar solo por propaganda.",
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
    description:
      "Es importante saber si las propuestas son factibles y tienen fundamentos sólidos.",
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
];
const timelineEvents = [
  {
    date: "19 de abril",
    title: "Convocatoria de elecciones",
    description:
      "Fecha de convocatoria oficial para las elecciones presidenciales.",
  },
  {
    date: "20 de mayo",
    title: "Inscripción de candidaturas",
    description:
      "Apertura del período de inscripción para los candidatos presidenciales y legislativos.",
  },
  {
    date: "17 de agosto",
    title: "Elecciones presidenciales y legislativas",
    description:
      "Día en que se llevarán a cabo las elecciones presidenciales y legislativas.",
  },
  {
    date: "19 de octubre",
    title: "Segunda vuelta presidencial",
    description:
      "Fecha programada para la segunda vuelta presidencial, en caso de ser necesaria.",
  },
];

const bloques = [
  {
    name: "Bloque de Unidad Opositora",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yO4Gno13323yOVqAYAa1unTxKWak1h.png",
    description:
      "Este bloque es una alianza de políticos que han ocupado cargos públicos en el pasado. A excepción de Luis Fernando Camacho quien antes de ser candidato en 2019 y 2020, ocupó el cargo de Presidente del Comité Cívico Pro Santa Cruz.",
    actores: [
      "Samuel Doria Medina",
      "Jorge Tuto Quiroga Ramírez",
      "Amparo Ballivián Cuellar",
      "Tomás Monasterio",
    ],
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
];

export default function Home() {
  const [expandedFeature, setExpandedFeature] = useState<string | null>(null);
  const [expandedRisks, setExpandedRisks] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const toggleFeature = (name: string) => {
    setExpandedFeature(expandedFeature === name ? null : name);
  };

  const toggleRisks = (name: string) => {
    setExpandedRisks(expandedRisks === name ? null : name);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === bloques.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? bloques.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      nextSlide();
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right
      prevSlide();
    }
  };

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />
      <main className="py-16 px-4 sm:px-8">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl font-bold font-round">
              TE AYUDAMOS A INFORMARTE ANTES DE VOTAR
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-gray-600 font-round">
              Bienvenidos y bienvenidas a este espacio apartidista donde te
              brindamos una guía para votar conscientemente y con información
              verificada.
            </p>

            <div className="mt-16 space-y-10">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="p-8 border rounded-lg shadow-md overflow-hidden"
                >
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
                        <Info className="mr-3 text-blue-500 flex-shrink-0 h-6 w-6" />
                        <span>{feature.name}</span>
                      </h3>
                      <p className="text-xl text-gray-600 mb-6">
                        {feature.description}
                      </p>
                      <div className="mt-4 flex flex-wrap justify-center gap-4">
                        <Button
                          variant="ghost"
                          size="lg"
                          className="text-lg font-medium px-6"
                          onClick={() => toggleFeature(feature.name)}
                        >
                          {expandedFeature === feature.name
                            ? "Menos Info"
                            : "Más Info"}
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
                    <div className="mt-6 text-lg text-gray-800 border-t pt-6">
                      {feature.moreInfo}
                    </div>
                  )}

                  {/* Display Risks */}
                  {expandedRisks === feature.name && (
                    <div className="mt-6 flex flex-col md:flex-row gap-6 md:space-x-8 border-t pt-6">
                      {/* My Redflags Column */}
                      <div className="flex-1">
                        <h4 className="font-semibold text-red-700 text-xl mb-3">
                          Mis Redflags
                        </h4>
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
                        <h4 className="font-semibold text-red-700 text-xl mb-3">
                          Redflags
                        </h4>
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
            <h2 className="text-3xl font-bold mb-6 font-round">
              ELECCIONES PRESIDENCIALES Y LEGISLATIVAS
            </h2>
            <div className="relative border-l border-foreground/20">
              {timelineEvents.map((event, index) => (
                <div key={index} className="mb-8 ml-4">
                  <div className="absolute w-3 h-3 bg-foreground/20 rounded-full mt-1.5 -left-1.5 border border-background"></div>
                  <Card className="border-foreground/20">
                    <CardContent className="p-4">
                      <time className="mb-1 text-base font-normal text-foreground/60">
                        {event.date}
                      </time>
                      <h3 className="text-xl font-semibold">{event.title}</h3>
                      <p className="mt-2 text-base text-foreground/80">
                        {event.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div id="bloques-preelectorales" className="mt-16 sm:mt-20">
            <h2 className="text-3xl font-bold mb-6 text-center font-round">
              BLOQUES PREELECTORALES
            </h2>
            <div className="mb-6 text-center max-w-3xl mx-auto">
              <p className="text-lg text-gray-600">
                Aclaramos que no todos los actores políticos mencionados han
                confirmado su precandidatura o están legalmente habilitados, sin
                embargo, este es un panorama general del escenario preelectoral
                hasta marzo del 2025.
              </p>
            </div>

            {/* Carousel */}
            <div className="relative max-w-5xl mx-auto">
              <div
                className="overflow-hidden px-12"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <div
                  className="flex gap-4 transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(calc(-${currentSlide * 33.33}% - ${currentSlide * 1}rem))`,
                  }}
                >
                  {/* Display the last items at the beginning for circular effect */}
                  {bloques.slice(-1).map((bloque, index) => (
                    <div
                      key={`before-${index}`}
                      className="w-1/3 flex-shrink-0 p-2 opacity-70"
                    >
                      <Card className="border-foreground/20 h-full shadow hover:shadow-md transition-all">
                        <CardContent className="p-4">
                          <h3 className="text-lg font-semibold mb-2 text-center truncate">
                            {bloque.name}
                          </h3>

                          <div className="aspect-video relative mb-3 bg-gray-100 rounded-md overflow-hidden">
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
                                <p className="text-green-800 font-semibold text-sm">
                                  (FPV)
                                </p>
                              </div>
                            ) : bloque.image === "mas-ipsp" ? (
                              <div className="absolute inset-0 flex items-center justify-center bg-blue-50">
                                <p className="text-blue-800 font-semibold text-sm">
                                  Logo del MAS-IPSP
                                </p>
                              </div>
                            ) : bloque.image === "independiente" ? (
                              <div className="absolute inset-0 flex items-center justify-center">
                                <p className="text-gray-800 font-semibold text-sm">
                                  Manfred Reyes Villa y otros
                                </p>
                              </div>
                            ) : (
                              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                                <p className="text-gray-600 font-semibold text-sm">
                                  {bloque.name}
                                </p>
                              </div>
                            )}
                          </div>

                          <p className="text-sm mb-3 text-gray-700 line-clamp-3">
                            {bloque.description}
                          </p>

                          <h4 className="font-semibold text-sm mb-1">
                            Actores políticos:
                          </h4>
                          <ul className="list-disc list-inside text-sm">
                            {bloque.actores.slice(0, 2).map((actor, idx) => (
                              <li key={idx} className="mb-1 truncate">
                                {actor}
                              </li>
                            ))}
                            {bloque.actores.length > 2 && (
                              <li className="text-primary cursor-pointer hover:underline">
                                +{bloque.actores.length - 2} más
                              </li>
                            )}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  ))}

                  {/* Main carousel items */}
                  {bloques.map((bloque, index) => (
                    <div key={index} className="w-1/3 flex-shrink-0 p-2">
                      <Card
                        className={`border-foreground/20 h-full shadow hover:shadow-md transition-all ${currentSlide === index ? "ring-2 ring-primary" : ""}`}
                      >
                        <CardContent className="p-4">
                          <h3 className="text-lg font-semibold mb-2 text-center truncate">
                            {bloque.name}
                          </h3>

                          <div className="aspect-video relative mb-3 bg-gray-100 rounded-md overflow-hidden">
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
                                <p className="text-green-800 font-semibold text-sm">
                                  (FPV)
                                </p>
                              </div>
                            ) : bloque.image === "mas-ipsp" ? (
                              <div className="absolute inset-0 flex items-center justify-center bg-blue-50">
                                <p className="text-blue-800 font-semibold text-sm">
                                  Logo del MAS-IPSP
                                </p>
                              </div>
                            ) : bloque.image === "independiente" ? (
                              <div className="absolute inset-0 flex items-center justify-center">
                                <p className="text-gray-800 font-semibold text-sm">
                                  Manfred Reyes Villa y otros
                                </p>
                              </div>
                            ) : (
                              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                                <p className="text-gray-600 font-semibold text-sm">
                                  {bloque.name}
                                </p>
                              </div>
                            )}
                          </div>

                          <p className="text-sm mb-3 text-gray-700 line-clamp-3">
                            {bloque.description}
                          </p>

                          <h4 className="font-semibold text-sm mb-1">
                            Actores políticos:
                          </h4>
                          <ul className="list-disc list-inside text-sm">
                            {bloque.actores.slice(0, 2).map((actor, idx) => (
                              <li key={idx} className="mb-1 truncate">
                                {actor}
                              </li>
                            ))}
                            {bloque.actores.length > 2 && (
                              <li className="text-primary cursor-pointer hover:underline">
                                +{bloque.actores.length - 2} más
                              </li>
                            )}
                          </ul>

                          {currentSlide === index && (
                            <Button
                              variant="outline"
                              size="sm"
                              className="w-full mt-3 text-xs"
                            >
                              Ver detalles
                            </Button>
                          )}
                        </CardContent>
                      </Card>
                    </div>
                  ))}

                  {/* Display the first items at the end for circular effect */}
                  {bloques.slice(0, 2).map((bloque, index) => (
                    <div
                      key={`after-${index}`}
                      className="w-1/3 flex-shrink-0 p-2 opacity-70"
                    >
                      <Card className="border-foreground/20 h-full shadow hover:shadow-md transition-all">
                        <CardContent className="p-4">
                          <h3 className="text-lg font-semibold mb-2 text-center truncate">
                            {bloque.name}
                          </h3>

                          <div className="aspect-video relative mb-3 bg-gray-100 rounded-md overflow-hidden">
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
                                <p className="text-green-800 font-semibold text-sm">
                                  (FPV)
                                </p>
                              </div>
                            ) : bloque.image === "mas-ipsp" ? (
                              <div className="absolute inset-0 flex items-center justify-center bg-blue-50">
                                <p className="text-blue-800 font-semibold text-sm">
                                  Logo del MAS-IPSP
                                </p>
                              </div>
                            ) : bloque.image === "independiente" ? (
                              <div className="absolute inset-0 flex items-center justify-center">
                                <p className="text-gray-800 font-semibold text-sm">
                                  Manfred Reyes Villa y otros
                                </p>
                              </div>
                            ) : (
                              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                                <p className="text-gray-600 font-semibold text-sm">
                                  {bloque.name}
                                </p>
                              </div>
                            )}
                          </div>

                          <p className="text-sm mb-3 text-gray-700 line-clamp-3">
                            {bloque.description}
                          </p>

                          <h4 className="font-semibold text-sm mb-1">
                            Actores políticos:
                          </h4>
                          <ul className="list-disc list-inside text-sm">
                            {bloque.actores.slice(0, 2).map((actor, idx) => (
                              <li key={idx} className="mb-1 truncate">
                                {actor}
                              </li>
                            ))}
                            {bloque.actores.length > 2 && (
                              <li className="text-primary cursor-pointer hover:underline">
                                +{bloque.actores.length - 2} más
                              </li>
                            )}
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
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 text-gray-800 p-2 rounded-full shadow-md z-10 transition-all hover:scale-110"
                aria-label="Anterior bloque"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 text-gray-800 p-2 rounded-full shadow-md z-10 transition-all hover:scale-110"
                aria-label="Siguiente bloque"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* Dots Indicator */}
              <div className="flex justify-center mt-4 space-x-1.5">
                {bloques.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-2 rounded-full transition-all ${
                      currentSlide === index
                        ? "bg-primary w-4"
                        : "bg-gray-300 w-2 hover:bg-gray-400"
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

          <div id="parties" className="mt-16 sm:mt-20">
            <h2 className="text-3xl font-bold mb-6 text-center font-round">
              {" "}
              CANDIDATOS
            </h2>
            <h3 className="text-2xl  mb-6 text-center">
              Este espacio se llenará a medida que se oficialicen los candidatos
              y candidatas.
            </h3>
            <h3 className="text-2xl mb-6 text-center">
              Aquí encontrarás información sobre procesos penales, denuncias
              contra ellos y ellas, y su recorrido político en general.
            </h3>
          </div>

          <div id="parties" className="mt-16 sm:mt-20">
            <h2 className="text-3xl font-bold mb-6 text-center font-round">
              PARTIDOS POLÍTICOS, AGRUPACIONES CIUDADANAS Y ORGANIZACIONES DE
              NACIONES Y PUEBLOS IOC
            </h2>
            <h3 className="text-2xl mb-6 text-center">
              Este espacio se llenará a medida que se oficialicen las
              candidaturas.
            </h3>
            <h3 className="text-2xl  mb-6 text-center">
              Aquí encontrarás información sistematizada sobre sus propuestas de
              gobierno.
            </h3>
          </div>

          <div className="mt-16 text-center">
            <Button
              className="bg-gray-900 hover:bg-gray-950 text-white font-bold py-4 px-10 rounded-lg shadow-lg transform transition-transform hover:scale-105 text-xl"
              onClick={() =>
                window.open(" https://chequeabolivia.bo/ ", "_blank")
              }
            >
              Lucha contra la desinformación
            </Button>
            <p className="mt-3 text-base text-gray-600">
              Únete a nuestra campaña para combatir las noticias falsas y la
              desinformación electoral
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
