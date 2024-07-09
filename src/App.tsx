import { lazy, Suspense } from "react";
const Games = lazy(() => import("./components/Games"));
const Layout = lazy(() => import("./components/Layout"));
const Title = lazy(() => import("./components/Title"));
const LoadingSpinner = lazy(() => import("./components/LoadingSpinner"));
export default function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Layout>
        <Title
          title="Welcome to FootyQuizMaster"
          description="Dive into the ultimate football trivia experience! Test your knowledge with challenging questions covering every corner of the beautiful game, from legendary players and iconic matches to thrilling moments and surprising stats."
        />
        <Games />
      </Layout>
    </Suspense>
  );
}
