import MainArticle from "./components/MainArticle"
import NewContainer from "./components/NewContainer"
import Noticias from "./components/Noticias"
import Header from "./components/Header"

function App() {
  

  return (
    <main className="px-4 pt-6">
      <Header />

      <div className="sm:flex sm:gap-8 pt-6">
        <MainArticle />
        <div className="pt-9 sm:pt-0">
          <NewContainer />
        </div>
      </div>
      <Noticias />
    </main>
  )
}

export default App
