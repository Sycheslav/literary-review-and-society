import { models, snapshotDate } from "@/lib/economics";
import Calculator from "./calculator";

export const metadata = { title: "Калькулятор эксперимента — Экономика" };

export default function CalculatorPage() {
  return (
    <>
      <h1 className="page-title">Калькулятор эксперимента</h1>
      <p className="section-lead">
        Приблизительная смета API по сохранённому снимку тарифов. Выберите готовый сценарий, поменяйте
        параметры и отправьте коллеге ссылку — она восстановит расчёт. Это не счёт: исходные значения
        демонстрационные до замеров пилота.
      </p>
      <div style={{ marginTop: 28 }}>
        <Calculator models={models} snapshotDate={snapshotDate} />
      </div>
    </>
  );
}
