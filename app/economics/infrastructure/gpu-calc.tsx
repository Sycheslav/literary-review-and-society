"use client";

import { useState } from "react";

const n = (v: string) => (v === "" ? NaN : Number(v));
const rub = (v: number) => (Number.isFinite(v) ? v.toLocaleString("ru-RU", { maximumFractionDigits: 0 }) : "—");

/** Две независимые оценки: аренда по GPU·ч и энергия собственного сервера. Ставки вводит пользователь. */
export default function GpuCalc() {
  const [gpus, setGpus] = useState("2");
  const [hours, setHours] = useState("100");
  const [rate, setRate] = useState("");
  const [kw, setKw] = useState("");
  const [tariff, setTariff] = useState("");

  const gpuHours = n(gpus) * n(hours);
  const rent = gpuHours * n(rate);
  const energy = n(kw) * n(hours);
  const energyCost = energy * n(tariff);

  return (
    <div className="econ-grid econ-grid-gpu">
      <div className="econ-card is-surface">
        <h3>Аренда GPU</h3>
        <div className="calc-fields calc-fields-pad">
          <label className="econ-field">
            Физических GPU
            <input type="number" min={0} value={gpus} onChange={(e) => setGpus(e.target.value)} />
          </label>
          <label className="econ-field">
            Часов работы
            <input type="number" min={0} value={hours} onChange={(e) => setHours(e.target.value)} />
          </label>
          <label className="econ-field">
            Ставка за GPU·ч
            <input type="number" min={0} step="any" value={rate} placeholder="из счёта" onChange={(e) => setRate(e.target.value)} />
            <span className="econ-field-hint">в любой валюте</span>
          </label>
        </div>
        <p className="mt-sm">
          <b>{Number.isFinite(gpuHours) ? gpuHours.toLocaleString("ru-RU") : "—"} GPU·ч</b> → {rate ? rub(rent) : "введите ставку"}
        </p>
        <p className="econ-field-hint">Если тариф указан за узел целиком, введите 1 GPU и ставку узла — не умножайте её на число GPU.</p>
      </div>
      <div className="econ-card is-surface">
        <h3>Энергия своего сервера</h3>
        <div className="calc-fields calc-fields-pad">
          <label className="econ-field">
            Измеренная мощность, кВт
            <input type="number" min={0} step="any" value={kw} placeholder="ваттметр" onChange={(e) => setKw(e.target.value)} />
            <span className="econ-field-hint">вся система под нагрузкой, не TDP</span>
          </label>
          <label className="econ-field">
            Тариф за кВт·ч
            <input type="number" min={0} step="any" value={tariff} placeholder="из договора" onChange={(e) => setTariff(e.target.value)} />
          </label>
        </div>
        <p className="mt-sm">
          <b>{kw ? `${rub(energy)} кВт·ч` : "—"}</b> за {hours || "—"} ч → {kw && tariff ? rub(energyCost) : "введите мощность и тариф"}
        </p>
        <p className="econ-field-hint">Амортизация, обслуживание и простой — отдельно. Итог можно внести в калькулятор как «Прочие расходы».</p>
      </div>
    </div>
  );
}
