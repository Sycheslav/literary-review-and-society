import { models, snapshotDate } from "@/lib/economics";
import Calculator from "./calculator";

export const metadata = { title: "Калькулятор эксперимента — Экономика" };

export default function CalculatorPage() {
  return (
    <>
      <h1 className="page-title">Калькулятор эксперимента</h1>
      <p className="section-lead">
        Приблизительная смета расходов на API по сохранённому снимку тарифов. Начните с готового сценария
        и поменяйте параметры; ссылка на расчёт откроет его у коллеги в том же виде. Значения по умолчанию
        демонстрационные, их нужно заменить замерами пилота.
      </p>
      <div style={{ marginTop: 28 }}>
        <Calculator models={models} snapshotDate={snapshotDate} />
      </div>
    </>
  );
}
