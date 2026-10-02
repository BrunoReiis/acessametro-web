import Link from "next/link"
import {
  ArrowRight,
  BookOpenCheck,
  Check,
  ShieldCheck,
  UsersRound,
} from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"

const features = [
  {
    icon: BookOpenCheck,
    title: "Informações confiáveis",
    description: "Saiba as condições de acessibilidade das estações.",
  },
  {
    icon: UsersRound,
    title: "Comunidade ativa",
    description: "Contribua e ajude outras pessoas com suas avaliações.",
  },
  {
    icon: ShieldCheck,
    title: "Mais autonomia",
    description: "Planeje seu trajeto com mais segurança e facilidade.",
  },
]

export default function Home() {
  return (
    <main className="site-frame">
      <SiteHeader currentPath="/" />
      <section className="page-surface" aria-labelledby="home-title">
        <div className="hero-home">
          <div className="hero-copy">
            <span className="eyebrow">Transporte público mais acessível</span>
            <h1 id="home-title">
              Informação real para um trajeto <span>mais seguro e autônomo.</span>
            </h1>
            <p>
              O AcessaMetrô conecta você a informações de acessibilidade das
              estações, com dados da comunidade e em tempo real.
            </p>
            <div className="hero-actions">
              <Link className={buttonVariants({ className: "hero-button" })} href="/denunciar">
                Fazer uma denúncia <ArrowRight size={16} />
              </Link>
              <Link
                className={buttonVariants({ className: "hero-button", variant: "outline" })}
                href="/sobre"
              >
                Saiba mais
              </Link>
            </div>
            <div className="feature-strip">
              {features.map(({ icon: Icon, title, description }) => (
                <article className="feature-item" key={title}>
                  <span className="feature-icon"><Icon size={22} strokeWidth={2.4} /></span>
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="hero-visual" aria-label="Estação de transporte público">
            <div className="hero-photo" role="img" aria-label="Estação urbana" />
            <div className="status-float">
              <span className="status-check"><Check size={19} /></span>
              <span>
                <strong>Elevador em funcionamento</strong>
                <small>Estação Sé · atualizado agora</small>
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}