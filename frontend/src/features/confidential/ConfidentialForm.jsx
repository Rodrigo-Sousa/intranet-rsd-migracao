import { useState } from 'react'
import { sendMessage } from './confidential.service'

export default function ConfidentialForm() {
  const [form, setForm] = useState({ assunto: '', mensagem: '' })

  async function handleSubmit(e) {
    e.preventDefault()
    await sendMessage(form)
    alert('Mensagem enviada com sucesso')
  }

  return (
    <section id="contact-form" className="py-20 bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-white p-8 shadow rounded"
      >
        <input
          placeholder="Assunto"
          className="w-full border p-2 mb-4"
          onChange={e => setForm({ ...form, assunto: e.target.value })}
        />

        <textarea
          placeholder="Mensagem"
          className="w-full border p-2 mb-4"
          onChange={e => setForm({ ...form, mensagem: e.target.value })}
        />

        <button className="w-full bg-gray-900 text-white py-2">
          Enviar
        </button>
      </form>
    </section>
  )
}
