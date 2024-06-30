import Games from "./components/Games";
import Header from "./components/Header";
import Footer from "./components/Footer";

import usePlayersData from "./hooks/usePlayersData";
export default function App() {
  const { players, loading } = usePlayersData();
  loading ? console.log("load") : console.log(players);
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto flex-grow flex flex-col items-center justify-center">
        {loading ? <div>loading</div> : <Games />}
      </main>
      <Footer />
    </div>
  );
}
