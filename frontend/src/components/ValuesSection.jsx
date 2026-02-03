export default function ValuesSection() {
  return (
    <section className="py-12 bg-white">
      <h2 className="text-2xl font-bold text-center mb-6">
        Nossos Valores
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="p-6 shadow rounded">Ética</div>
        <div className="p-6 shadow rounded">Transparência</div>
        <div className="p-6 shadow rounded">Compromisso</div>
      </div>
    </section>
  );
}
