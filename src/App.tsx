import Games from "./components/Games";
import Header from "./components/Header";
import Footer from "./components/Footer";
export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto flex-grow flex flex-col items-center justify-center">
        <Games />
      </main>
      <Footer />
    </div>
  );
}
