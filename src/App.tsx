import Games from "./components/Games";
import Layout from "./components/Layout";
import Title from "./components/Title";

export default function App() {
  return (
    <Layout>
      <Title
        title="Welcome to FootyQuizMaster"
        description="Dive into the ultimate football trivia experience! Test your knowledge with challenging questions covering every corner of the beautiful game, from legendary players and iconic matches to thrilling moments and surprising stats."
      />
      <Games />
    </Layout>
  );
}
