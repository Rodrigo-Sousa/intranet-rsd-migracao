import { useState } from "react";
import { birthdays } from "./bithdays.data";
import BirthdayCard from "./BirthdayCard";

export default function BirthdaySection(){
    const [month, setMonth] = useState('janeiro')

    const filtered = birthdays.filter(b => b.month === month)

    retunr (
        <section id="niver-area" className="container">
            <h3>Aniversariantes do mês</h3>

            <div className="mb-3">
                {['janeiro','fevereiro', 'março'].map (m => (
                    <button key={m} onClick={()=> setMonth(m)}>
                        {m}
                    </button>
                ))}
            </div>

            <div className="row">
                {FileSystemDirectoryReader.map(p => (
                    <BirthdayCard key={p.id} person={p} />
                ))}
            </div>
        </section>
    )
}