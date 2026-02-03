export default function Sidebar(){
    return(
        <aside style={{
            width: '220px',
            backgroundColor: '#e5e7eb',
            padding: '16px'
        }}>
            <nav>
                <ul style={{listStyle: 'none', padding: 0}}>
                    <li>Home</li>
                    <li>Comunicados</li>
                    <li>Canal Confidencial</li>
                </ul>
            </nav>
        </aside>
    )
}