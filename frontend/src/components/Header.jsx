export default function Header(){
    return (
        <header className="navbar navbar-dark bg-dark fixed-top">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src="/logo-rsd.png" alt="RSD" height="32" />
                </a>

                <nav className="navbar-nav flex-row gap-3">
                    <a className="nav-link" href="https://www.adpweb.com.br">Acesso ADP</a>
                    <a className="nav-link" href="#contact-form">Canal Confidencial</a>
                </nav>
            </div>
        </header>
    )
}