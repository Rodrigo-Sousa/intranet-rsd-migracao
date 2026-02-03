export default function MessageItem({message}){
    return(
        <div style={{padding: '8px', borderBottom: '1px solid #ccc'}}>
            {message.text}
        </div>
    )
}