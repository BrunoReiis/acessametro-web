import { Code2, Monitor, Palette, UsersRound } from "lucide-react"
import Image from "next/image"

import { SiteHeader } from "@/components/site-header"

const team = [
  {
    name: "Bruno dos Reis Ferreira Santos",
    role: "FullStack",
    description: "Integra a experiência da interface aos serviços da aplicação, acompanhando o desenvolvimento de ponta a ponta.",
    contribution: "Front-end e back-end",
    icon: Code2,
    image: "photo-1500648767791-00dcc994a43e",
    position: "center 35%",
  },
  {
    name: "Vinícius de Freitas Ferreira",
    role: "FrontEnd",
    description: "Transforma os fluxos do produto em interfaces simples de entender e consistentes em cada tela.",
    contribution: "Interface e experiência visual",
    icon: Monitor,
    image: "photo-1506794778202-cad84cf45f1d",
    position: "center 35%",
  },
  {
    name: "Matheus Francisco",
    role: "UX / Funcionamento / Apoio ao Usuário",
    description: "Considera as necessidades de quem usa o app, da navegação à compreensão das informações.",
    contribution: "Experiência e apoio ao usuário",
    icon: UsersRound,
    image: "photo-1507003211169-0a1dd7228f2d",
    position: "center 32%",
  },
  {
    name: "Matheus de Oliveira",
    role: "FrontEnd / UI",
    description: "Organiza a interface para que cada informação fique clara, acessível e fácil de encontrar.",
    contribution: "Interface visual e organização",
    icon: Palette,
    image: "photo-1504257432389-52343af06ae3",
    position: "center 32%",
  },
]

export default function TeamPage() {
  return (
    <main className="site-frame">
      <SiteHeader currentPath="/equipe" />
      <section className="page-surface inner-page" aria-labelledby="team-title">
        <span className="eyebrow">Nossa equipe</span>
        <h1 className="page-heading team-heading" id="team-title">
          Conheça o time por trás do AcessaMetrô
        </h1>
        <p className="page-intro">
          Somos quatro integrantes que acreditam na tecnologia como ferramenta
          para um transporte público mais acessível, inclusivo e humano.
        </p>
        <div className="team-grid">
          {team.map(({ name, role, description, contribution, icon: Icon, image, position }, index) => (
            <article className="team-card" key={name}>
              <Image
                className="team-photo"
                src={`https://images.unsplash.com/${image}?auto=format&fit=crop&crop=faces&w=800&h=560&q=80`}
                alt={`Retrato de ${name}`}
                width={800}
                height={560}
                unoptimized
                loading={index === 0 ? "eager" : "lazy"}
                style={{ objectPosition: position }}
              />
              <div className="team-details">
                <h2>{name}</h2>
                <div className="team-role">{role}</div>
                <p>{description}</p>
                <div className="team-contribution">
                  <Icon size={18} />
                  <span>
                    <strong>No projeto</strong>
                    {contribution}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}