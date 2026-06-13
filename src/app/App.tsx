import Layout from "../widgets/layout/Layout"
import { AppRouter } from "./routes/AppRouter"

function App() {
  return (
    <div>
      <Layout>
        <AppRouter />
      </Layout>
    </div>
  )
}

export default App
