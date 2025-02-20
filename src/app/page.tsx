"use client"

import { useState } from "react"
import {
  ChevronDown,
  ChevronUp,
  Info,
  AlertTriangle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PoliticalPartyCarousel } from "./components/political-party-carousel"
import { Navbar } from "./components/navbar"
import { Footer } from "./components/footer"

const features = [
  {
    name: "¿Sé para qué son estas elecciones? ¿Entiendo la importancia de mi voto?",
    description:
      "Este 2025 elegiremos al Presidente, Vicepresidente y representantes de la Asamblea Legislativa Plurinacional.",
    moreInfo:"Este 2025, además de elegir al próximo Presidente y Vicepresidente del país, elegiremos a los representantes de la Asamblea Legislativa Plurinacional. Ellos básicamente se encargan de aprobar, proponer y crear leyes. En total elegiremos 130 diputados y diputadas y 36 senadores y senadoras, las y los candidatos varían según tu departamento y tu provincia. Elegiremos a la gente que dirigirá el destino de cada uno de nosotros durante 5 años porque de las decisiones políticas dependen nuestros ingresos económicos, nuestra salud, nuestra educación, nuestra seguridad y mucho más. Estas elecciones son delicadas porque vivimos una crisis política, económica y ambiental que se acentúa mes a mes, y que la sentimos todos.",
    risks: [
      "Pienso que la política no me afecta.",
      "Voto solo porque es obligatorio.",
      "Creo que mi voto no hace la diferencia.",
      "Solo busco soluciones urgentes en mi candidato.",
      "No encuentro información clara del OEP.",
    ],
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
  },
  {
    name: "¿Conozco a los candidatos a parlamentarios que representarán mi departamento y provincia?",
    moreInfo:
      "Los parlamentarios que son los miembros de la Asamblea Legislativa Plurinacional, o sea diputados y senadores son usualmente líderes más o menos cercanos a nosotros. Es fundamental intentar indagar en su historial político, informarse no solo con propaganda hecha por ellos mismos. ",
    description:
      "Es clave investigar sus antecedentes y evitar votar solo por propaganda.",
    risks: [
      "No sé quién es mi representante.",
      "Nunca participó en política antes y parece que solo busca trabajo.",
      "Solo repite el discurso de su partido.",
      "Solo existe información de él en propaganda política.",
    ],
  },
  {
    name: "¿Las propuestas de los candidatos son realistas y están bien fundamentadas?",
    description:
      "Es importante saber si las propuestas son factibles y tienen fundamentos sólidos.",
    moreInfo:
      "Es fundamental entender que nos están prometiendo, y más importante aún saber qué responden cuando alguien les pregunta el “cómo” lograrlo”. Muchas veces votar es una apuesta a ciegas, a veces dejamos al tink’azo votar pero es posible salir de la intuición intentando buscar el sentido lógico de la propuesta, es decir, qué si la posibilidad de lograr esas propuestas son reales.Es importante conocer sus propuestas para tener una idea general de cómo será el gobierno al menos en temas generales cómo:Trabajo y oportunidades, Salud, Educación, Justicia, Seguridad",
    risks: [
      "Solo me informo en redes sociales y en contenido que me gusta.",
      "Las propuestas solo atienden temas urgentes.",
      "Las propuestas son contradictorias o poco viables.",
      "El discurso se basa solo en ataques a otros candidatos.",
    ],
  },
];
const timelineEvents = [
  {
    date: "January 2023",
    title: "Launch of Real-Time Analytics",
    description: "Introduced our cutting-edge real-time analytics feature, enabling instant insights for our users.",
  },
  {
    date: "March 2023",
    title: "Event Tracking Enhancement",
    description: "Expanded our event tracking capabilities to cover a wider range of user interactions.",
  },
  {
    date: "June 2023",
    title: "A/B Testing Beta",
    description:
      "Rolled out the beta version of our A/B testing tool, allowing users to experiment with different designs.",
  },
  {
    date: "September 2023",
    title: "Funnel Analysis Integration",
    description: "Integrated advanced funnel analysis tools to help users optimize their conversion paths.",
  },
  {
    date: "December 2023",
    title: "Comprehensive Dashboard Update",
    description: "Launched a major update to our dashboard, bringing all features together for a seamless experience.",
  },
]

export default function Home() {
  const [expandedFeature, setExpandedFeature] = useState<string | null>(null)
  const [expandedRisks, setExpandedRisks] = useState<string | null>(null)

  const toggleFeature = (name: string) => {
    setExpandedFeature(expandedFeature === name ? null : name)
  }

  const toggleRisks = (name: string) => {
    setExpandedRisks(expandedRisks === name ? null : name)
  }


  return (
    <>
      <Navbar />
      <main className="py-16 px-4 sm:px-8">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl font-bold">
              TE AYUDAMOS A INFORMARTE ANTES DE VOTAR
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-600">
              Bienvenidos y bienvenidas a este espacio apartidista donde te brindamos una guía para votar conscientemente y con información verificada.
            </p>
          </div>

          <div className="mt-16 space-y-8">
            {features.map((feature) => (
              <div key={feature.name} className="p-6 border rounded-lg shadow-md">
                <h3 className="text-lg font-semibold flex items-center">
                  <Info className="mr-2 text-blue-500" /> {feature.name}
                </h3>
                <p className="text-sm text-gray-600 mt-2">{feature.description}</p>
                <Button variant="ghost" size="sm" className="mt-2" onClick={() => toggleFeature(feature.name)}>
                  {expandedFeature === feature.name ? "Menos Info" : "Más Info"}
                </Button>
                <Button variant="destructive" size="sm" className="ml-2" onClick={() => toggleRisks(feature.name)}>
                  Red Flag
                </Button>
                {expandedFeature === feature.name && <div className="mt-2 text-sm text-gray-800">{feature.moreInfo}</div>}
                {expandedRisks === feature.name && (
                  <ul className="mt-2 list-disc list-inside text-red-700 bg-red-50 p-2 rounded-lg">
                    {feature.risks.map((risk, index) => <li key={index}>{risk}</li>)}
                  </ul>
                )}
              </div>
            ))}
          </div>
          <div id="timeline" className="mt-16 sm:mt-20 max-w-2xl mx-auto">
<h2 className="text-2xl font-bold mb-6">Feature Timeline</h2>
<div className="relative border-l border-foreground/20">
  {timelineEvents.map((event, index) => (
    <div key={index} className="mb-8 ml-4">
      <div className="absolute w-3 h-3 bg-foreground/20 rounded-full mt-1.5 -left-1.5 border border-background"></div>
      <Card className="border-foreground/20">
        <CardContent className="p-4">
          <time className="mb-1 text-sm font-normal text-foreground/60">{event.date}</time>
          <h3 className="text-lg font-semibold">{event.title}</h3>
          <p className="mt-2 text-sm text-foreground/80">{event.description}</p>
        </CardContent>
      </Card>
    </div>
  ))}
</div>
</div>

<div id="parties" className="mt-16 sm:mt-20">
<h2 className="text-2xl font-bold mb-6 text-center">Political Parties</h2>
<PoliticalPartyCarousel />
</div>
        </div>
      </main>
      <Footer />
    </>
  )
}

/* <div id="timeline" className="mt-16 sm:mt-20 max-w-2xl mx-auto">
<h2 className="text-2xl font-bold mb-6">Feature Timeline</h2>
<div className="relative border-l border-foreground/20">
  {timelineEvents.map((event, index) => (
    <div key={index} className="mb-8 ml-4">
      <div className="absolute w-3 h-3 bg-foreground/20 rounded-full mt-1.5 -left-1.5 border border-background"></div>
      <Card className="border-foreground/20">
        <CardContent className="p-4">
          <time className="mb-1 text-sm font-normal text-foreground/60">{event.date}</time>
          <h3 className="text-lg font-semibold">{event.title}</h3>
          <p className="mt-2 text-sm text-foreground/80">{event.description}</p>
        </CardContent>
      </Card>
    </div>
  ))}
</div>
</div>

<div id="parties" className="mt-16 sm:mt-20">
<h2 className="text-2xl font-bold mb-6 text-center">Political Parties</h2>
<PoliticalPartyCarousel />
</div>
*/
