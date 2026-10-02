import Link from "next/link"
import {
  Accessibility,
  AlertTriangle,
  ArrowLeft,
  Ellipsis,
  MoveUpRight,
  Signpost,
  Waves,
} from "lucide-react"

import { ReportForm } from "@/components/report-form"
import { SiteHeader } from "@/components/site-header"

const incidentTypes = [
  { icon: Accessibility, label: "Elevador fora de funcionamento" },
  { icon: Waves, label: "Escada rolante fora de funcionamento" },
  { icon: AlertTriangle, label: "Falta de sinalização" },
  { icon: MoveUpRight, label: "Problemas no acesso (rampas, pisos, etc.)" },
  { icon: Ellipsis, label: "Outros problemas" },
]

export default function ReportPage() {
  return (
    <main className="site-frame">
      <SiteHeader currentPath="/denunciar" />
      <section className="page-surface inner-page" aria-labelledby="report-title">
        <div className="report-heading">
          <Link className="back-link" href="/">
            <ArrowLeft size={14} /> Voltar para o início
          </Link>
          <span className="eyebrow">Sua comunidade agradece</span>
          <h1 className="page-heading" id="report-title">Fazer uma denúncia</h1>
          <p className="page-intro">
            Nos ajude a manter as informações sempre atualizadas. Informe um
            problema de acessibilidade em uma estação.
          </p>
        </div>
        <div className="report-layout">
          <ReportForm />
          <aside className="report-aside">
            <section className="incident-list" aria-labelledby="incident-title">
              <h2 id="incident-title">Tipos de incidentes</h2>
              <ul>
                {incidentTypes.map(({ icon: Icon, label }) => (
                  <li key={label}><span><Icon size={16} /></span>{label}</li>
                ))}
              </ul>
            </section>
            <section className="important-note">
              <span className="note-icon"><Signpost size={17} /></span>
              <div>
                <h2>Importante</h2>
                <p>
                  Sua denúncia será analisada e poderá ajudar outras pessoas a
                  planejarem seus trajetos com mais segurança e autonomia.
                </p>
              </div>
            </section>
          </aside>
        </div>
      </section>
    </main>
  )
}