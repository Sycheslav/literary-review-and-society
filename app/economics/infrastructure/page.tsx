import Link from "next/link";
import { evidenceById } from "@/lib/economics-evidence";
import { EvidenceCard } from "../ui";
import GpuCalc from "./gpu-calc";

export const metadata = { title: "Свои GPU и инфраструктура — Экономика" };

const EXAMPLES = ["arxiv-2407-04503", "github-teamcraft-bench-teamcraft", "arxiv-2606-07513"];

export default function InfrastructurePage() {
  return (
    <>
      <h1 className="page-title">Локальные модели и инфраструктура</h1>
      <p className="section-lead">
        На своих или арендованных GPU счёта за токены нет, зато есть аренда или энергия, обслуживание и
        доля стоимости оборудования. Главное — не посчитать одни и те же часы или расходы дважды.
      </p>

      <section className="econ-section mt-xl">
        <h2>Три варианта</h2>
        <div className="econ-grid mt-md">
          <div className="econ-card">
            <h3>Аренда вычислений</h3>
            <ul>
              <li>GPU·ч или узло·ч — по договору</li>
              <li>CPU, память, диски, передача данных</li>
              <li>простой: оплачивается, даже когда агенты ждут</li>
            </ul>
          </div>
          <div className="econ-card">
            <h3>Имеющееся оборудование</h3>
            <ul>
              <li>измеренная энергия всей системы</li>
              <li>обслуживание и администрирование</li>
              <li>отдельно — доля стоимости оборудования</li>
            </ul>
          </div>
          <div className="econ-card">
            <h3>Новая закупка</h3>
            <ul>
              <li>первоначальные вложения</li>
              <li>выбранный срок или объём использования</li>
              <li>сравнение с API — при равном качестве и скорости</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="econ-section">
        <h2>Быстрая оценка</h2>
        <p className="section-lead">Ставки не подставляются по умолчанию: введите значения из своего договора или счёта.</p>
        <GpuCalc />
      </section>

      <section className="econ-section">
        <h2>Как это выглядело у других</h2>
        <div className="econ-grid">
          {EXAMPLES.map((id) => {
            const e = evidenceById.get(id);
            return e ? <EvidenceCard key={id} e={e} /> : null;
          })}
        </div>
      </section>

      <section className="econ-section econ-prose">
        <h2 className="econ-h2">Правила</h2>
        <ul>
          <li>
            Различайте <b>число физических GPU</b>, <b>время работы узла</b> и <b>суммарные GPU·ч</b>. 8 GPU × 24 ч
            = 192 GPU·ч, но тариф «за узел в час» на 8 не умножается.
          </li>
          <li>Отделяйте обучение, подготовку данных, инференс и оценивание: в статьях они часто смешаны.</li>
          <li>TDP видеокарты — только грубое допущение; для энергии нужна измеренная мощность всей системы.</li>
          <li>Сравнение с API честно только при сопоставимых качестве, скорости, длине контекста и загрузке оборудования.</li>
        </ul>
        <p>
          Итог можно внести в <Link href="/economics/calculator">калькулятор</Link> как «Прочие расходы».
        </p>
      </section>
    </>
  );
}
