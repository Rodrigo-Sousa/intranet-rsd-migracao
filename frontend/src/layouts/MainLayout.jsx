import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      
      <Header />

      {/* Espaço para header fixo */}
      <main className="flex-1 pt-16 p-6 bg-gray-50">
        {children}
      </main>

      <Footer />
    </div>
  );
}
