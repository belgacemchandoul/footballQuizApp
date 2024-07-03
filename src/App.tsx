import Games from "./components/Games";
import Layout from "./components/Layout";
import Title from "./components/Title";

export default function App() {
  return (
    <Layout>
      <Title title="home page" />
      <Games />
    </Layout>
  );
}
