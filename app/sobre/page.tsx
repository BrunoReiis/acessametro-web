import Image from "next/image"
import {
  Goal,
  HeartHandshake,
  Radio,
} from "lucide-react"

import { SiteHeader } from "@/components/site-header"

const principles = [
  {
    icon: Goal,
    title: "Nossa história",
    text: "O AcessaMetrô surgiu da necessidade de tornar o transporte público mais acessível, inclusivo e transparente.",
  },
  {
    icon: Radio,
    title: "Nosso objetivo",
    text: "Facilitar o acesso a informações de acessibilidade, promovendo mais autonomia para todos.",
  },
  {
    icon: HeartHandshake,
    title: "Nosso impacto",
    text: "Acreditamos em um transporte público mais acessível e colaborativo, onde todos possam se deslocar com liberdade.",
  },
]

export default function AboutPage() {
  return (
    <main className="site-frame">
      <SiteHeader currentPath="/sobre" />
      <section className="page-surface inner-page" aria-labelledby="about-title">
        <div className="about-hero">
          <div className="about-copy">
            <span className="eyebrow">Sobre o AcessaMetrô</span>
            <h1 className="page-heading" id="about-title">
              Transformando o transporte público em uma experiência mais acessível.
            </h1>
            <p>
              O AcessaMetrô surgiu a partir da identificação de um problema
              real: a falta de informações confiáveis e atualizadas sobre
              acessibilidade no transporte público.
            </p>
            <p>
              Queremos transformar essa realidade com o apoio da tecnologia e
              da comunidade, promovendo mais autonomia, inclusão e segurança
              para todas as pessoas que dependem do transporte público.
            </p>
          </div>
          <Image
            className="about-photo"
            src="https://images.unsplash.com/photo-1765816602345-dcf6857c52c7?auto=format&fit=crop&w=1600&q=85"
            alt="Estação de metrô moderna com escadas e escadas rolantes"
            width={1600}
            height={1067}
            unoptimized
            priority
          />
        </div>
        <div className="about-cards">
          {principles.map(({ icon: Icon, title, text }) => (
            <article className="info-card" key={title}>
              <div className="info-card-title">
                <span className="feature-icon"><Icon size={21} /></span>
                <h3>{title}</h3>
              </div>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}