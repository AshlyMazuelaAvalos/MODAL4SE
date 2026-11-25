import type { NavLink } from "@/domain/models";
import modellogo from "../../../assets/icons/isotipo.svg";
import anidlogo from "../../../assets/icons/LOGOS MINCIENCIA + ANID 2026_PLUMA-BLANCO.svg";
import { Icon } from "../atoms/Icon";

interface FooterProps {
  brand: string;
  links: NavLink[];
}

export function Footer({ brand, links }: FooterProps) {
  return (
    <footer className="relative overflow-hidden pt-4 pb-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mt-16 flex flex-col items-center gap-8 text-center">
          <img src={anidlogo} alt="" className="anid-footer" />
          <p>
            Financiado por la Agencia Nacional de Investigación y Desarrollo,
            ANID/FONDECYT Iniciación 2025
          </p>
          <img src={modellogo} alt="" className="h-24 w-24" />
          <p className="text-2xl font-extrabold tracking-tight">
            {brand.slice(0, -4)}
            <span className="text-primary">{brand.slice(-4)}</span>
          </p>
          <p className="text-secondary">
            Ingeniería de Software Dirigida por Modelos e Inteligencia
            Artificial.
          </p>

          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-foreground/70 transition-colors duration-300 hover:text-secondary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="mailto:contacto@example.com"
            className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-secondary"
          >
            <Icon name="mail" size={16} />
            rene.noel@uv.cl
          </a>

          <p className="text-xs text-foreground/50">
            © 2026 MODAL 4SE · Universidad de Valparaíso. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
