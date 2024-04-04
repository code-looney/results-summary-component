import Container from "./components/Container"
import Cards from "./components/Cards"

export default function App() {
  return (
    <Container className={`bg-main h-screen w-full grid place-content-center`}>
      <Cards />
    </Container>
  )
}