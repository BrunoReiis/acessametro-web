import Link from "next/link"
import { Accessibility, ArrowUpRight } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"

const navigation = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Denunciar", href: "/denunciar" },
  { label: "Equipe", href: "/equipe" },
]

export function SiteHeader({ currentPath }: { currentPath: string }) {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="AcessaMetrô, início">
        <span className="brand-mark">
          <Accessibility size={20} strokeWidth={2.5} />
        </span>
        <span>AcessaMetrô</span>
      </Link>
      <nav className="main-nav" aria-label="Navegação principal">
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={currentPath === item.href ? "page" : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <Link className={buttonVariants({ className: "header-cta" })} href="/denunciar">
        Acessar App <ArrowUpRight size={14} />
      </Link>
    </header>
  )
}