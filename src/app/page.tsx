"use client"

import { useState } from "react"
import {
  Monitor,
  MousePointerClick,
  PieChartIcon as ChartPie,
  FlaskConical,
  ChevronDown,
  ChevronUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PoliticalPartyCarousel } from "./components/political-party-carousel"
import { Navbar } from "./components/navbar"
import { Footer } from "./components/footer"

const features = [
  {
    name: "Real-Time Analytics",
    description: "Monitor user activity and track key metrics in real time.",
    icon: Monitor,
    moreInfo:
      "Our real-time analytics provide instant insights into user behavior, allowing you to make quick decisions and optimize your website on the fly.",
    risks: "Potential for data overload and misinterpretation of short-term trends.",
  },
  {
    name: "Event Tracking",
    description: "Easily track user interactions such as clicks, form submissions, and video plays.",
    icon: MousePointerClick,
    moreInfo:
      "With our advanced event tracking, you can monitor every user interaction, giving you a comprehensive view of how users engage with your site.",
    risks: "Privacy concerns and the need for user consent in data collection.",
  },
  {
    name: "A/B Testing",
    description: "Run experiments to compare different versions of your pages or features.",
    icon: FlaskConical,
    moreInfo:
      "Our A/B testing tools allow you to experiment with different designs and content, helping you optimize for the best user experience and conversion rates.",
    risks: "Potential for inconclusive results if not properly designed or with insufficient sample sizes.",
  },
  {
    name: "Funnel Analysis",
    description: "Identify drop-offs in your conversion funnel and optimize the user journey.",
    icon: ChartPie,
    moreInfo:
      "Our funnel analysis tools help you visualize and understand where users are dropping off in your conversion process, allowing you to make targeted improvements.",
    risks: "Over-optimization may lead to a less natural user experience.",
  },
]

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
  const [activeRisk, setActiveRisk] = useState<string | null>(null)

  const toggleFeature = (name: string) => {
    setExpandedFeature(expandedFeature === name ? null : name)
  }

  const scrollToRisks = (name: string) => {
    setActiveRisk(name)
    const risksSection = document.getElementById("risks-section")
    if (risksSection) {
      risksSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <Navbar />
      <main className="py-16">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto lg:text-center">
            <h1 className="text-3xl font-bold sm:text-4xl">Features you need to understand your website traffic</h1>
            <p className="mt-4 text-lg text-foreground/60">
              From real-time insights to in-depth user tracking, get the tools to make smarter, data-driven decisions.
            </p>
          </div>

          <div id="features" className="mt-16 sm:mt-20 lg:mt-24 max-w-4xl mx-auto">
            <div className="grid gap-8 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-12">
                  <div className="font-semibold mb-2">
                    <div className="absolute left-0 top-0 flex w-8 h-8 items-center justify-center rounded-lg border border-foreground/20">
                      <feature.icon aria-hidden="true" className="h-4 w-4" />
                    </div>
                    {feature.name}
                  </div>
                  <div className="text-sm text-foreground/60">{feature.description}</div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="mt-2 p-0 h-auto"
                    onClick={() => toggleFeature(feature.name)}
                  >
                    {expandedFeature === feature.name ? (
                      <>
                        Less Info <ChevronUp className="ml-1 h-3 w-3" />
                      </>
                    ) : (
                      <>
                        More Info <ChevronDown className="ml-1 h-3 w-3" />
                      </>
                    )}
                  </Button>
                  {expandedFeature === feature.name && (
                    <div className="mt-2 text-sm text-foreground/80">{feature.moreInfo}</div>
                  )}
                  <Button
                    variant="link"
                    size="sm"
                    className="mt-2 p-0 h-auto text-destructive"
                    onClick={() => scrollToRisks(feature.name)}
                  >
                    View Risks
                  </Button>
                </div>
              ))}
            </div>
          </div>

          <div id="risks-section" className="mt-16 sm:mt-20 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Feature Risks</h2>
            {features.map((feature) => (
              <div
                key={feature.name}
                className={`mb-6 p-4 border rounded-lg ${
                  activeRisk === feature.name ? "border-destructive" : "border-foreground/20"
                }`}
              >
                <h3 className="text-lg font-semibold mb-2">{feature.name}</h3>
                <p className="text-sm text-foreground/80">{feature.risks}</p>
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

