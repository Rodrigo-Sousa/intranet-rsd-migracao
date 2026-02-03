export default function Header(){
    return (
        <header style={{
            height: '60px',
            backgroundColor: '#1f2937',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            padding: '0 20px',
            justifyContent: 'space-between'
        }}>
            <strong>Intranet RSD</strong>
            <span>Usuário Logado</span>
        </header>
    )
}