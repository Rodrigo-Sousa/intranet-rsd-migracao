// Estrutura fixa da página - Recebendo conteúdo dinâmico (children) evitando repetição de conteúdos Header/Sidebar em todas as páginas
import Header from './Header.jsx';
import Sidebar from './Sidebar.jsx';

export default function MainLayout({children}){
    return (
        <div style={{display: 'flex', flexDirection: 'column', height: '100vh'}}>
            <Header />
            <div style={{display: 'flex', flex: 1}}>
                <Sidebar />
                <main style={{flex: 1, padding: '16px', overflow: 'auto'}}>
                    {children}
                </main>
            </div>

        </div>
    )
}