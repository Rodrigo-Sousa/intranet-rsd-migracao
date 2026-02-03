const services = [
  {
    title: 'Lista de Ramais',
    icon: '📱',
    description: 'Lista de ramais internos',
    link: '/ramais'
  },
  {
    title: 'Sistema ERP',
    icon: '🧩',
    description: 'Portal ERP System',
    link: 'https://google.com'
  }
]

export default function ServicesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <div key={i} className="p-6 shadow rounded-lg text-center">
            <div className="text-4xl">{s.icon}</div>
            <h4 className="mt-4 font-bold">{s.title}</h4>
            <p className="text-sm mt-2">{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
