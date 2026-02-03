import { useState } from "react";
import { birthdays } from "./bithdays.data";
import BirthdayCard from "./BirthdayCard";

export default function BirthdaySection() {
  const [month, setMonth] = useState("janeiro");

  const filtered = birthdays.filter(b => b.month === month);

  return (
    <section id="niver-area" className="container">
      <h3 className="text-xl font-bold mb-4">
        Aniversariantes do mês 🎂
      </h3>

      <div className="mb-3 flex gap-2">
        {["janeiro", "fevereiro", "março"].map(m => (
          <button
            key={m}
            onClick={() => setMonth(m)}
            className="px-3 py-1 border rounded"
          >
            {m}
          </button>
        ))}
      </div>

      <div className="row">
        {filtered.length === 0 && (
          <p>Nenhum aniversariante neste mês.</p>
        )}

        {filtered.map(p => (
          <BirthdayCard key={p.id} person={p} />
        ))}
      </div>
    </section>
  );
}
