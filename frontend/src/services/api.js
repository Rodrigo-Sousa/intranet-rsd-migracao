export async function sendConfidentialMessage(data) {
    const response = await fetch('http://localhost:333/confidential', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    });

    if(!response.ok){
        throw new Error('Erro ao enviar mensagem');
    }

    return response.json();
}