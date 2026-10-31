import Link from "next/link";
import { formatSnapshotDate } from "@/lib/economics";
import "./economics.css";

export default function EconomicsLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="section page-top econ">
      <div className="container">
        <div className="econ-head">
          <nav className="crumbs" aria-label="Путь">
            <Link href="/">Главная</Link>
            <span aria-hidden="true">/</span>
            <Link href="/economics">Экономика</Link>
          </nav>
          <span className="econ-snap">Тарифы на {formatSnapshotDate()} · черновик для обсуждения</span>
        </div>
        {children}
      </div>
    </section>
  );
}
