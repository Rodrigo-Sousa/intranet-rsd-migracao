import { useState } from "react";

export default function MessageComposer(){
    const [text, setText] = useState('');

    return(
        <div style={{marginTop: '12px'}}>
            <textarea value={text}
            onChange={e => setText(e.target.value)} placeholder="Digite sua mensagem..."
            style={{width: '100%', height: '80px'}}
            />
            <button style={{marginTop: '8px'}}>Enviar</button>
        </div>
    )
}