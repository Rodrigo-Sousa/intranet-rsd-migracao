import MessageItem from './MessageItem.jsx';
export default function MessageList(){
    const messages = [
        {id: 1, text: 'Mensagem confidencial 1'},
        {id: 2, text: 'Mensagem confidencial 2'},
    ];

    return(
        <div>
            {messages.map(msg => (
                <MessageItem key={msg.id} message={msg} />
            ))}
        </div>
    )
}