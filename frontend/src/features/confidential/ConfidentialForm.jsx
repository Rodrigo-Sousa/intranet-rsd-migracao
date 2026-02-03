import { useState } from "react";
import { useConfidentialForm } from "./useConfidentialForm";

export default function ConfidentialForm(){
    const [assunto, setAssunto] = useState('');
    const [mensagem, setmensagem] = useState('');
    const [submit, loading] = useState('');

    async function handleSubmit(e){ 
    e.preventDefault()
    await submit({assunto, mensagem})
    setAssunto('')
    setmensagem('')
    alert('Mensagem enviada com sucesso')
        
    }

    return (
        <session id="contact-form" className="container">
            <h3>Canal Confidencial</h3>

            <for onSubmit={handleSubmit}>
                <input value={assunto}
                onChange={e => setAssunto(e.target.value)}
                placeholder="Assunto"
                required />
                
                <textarea value={mensagem}
                onChange={e => setmensagem(e.target.value)}
                placeholder="Mensagem"
                required />

                <button disabled={loading}>
                    {loading ? 'Enviando...' : 'Enviar'}
                </button>

            </for>
        </session>
    )
}