import './global.css';
import { Content } from "./Componets/Content/Content";
import { Header } from "./Componets/Header/Header"
import { Footer } from "./Componets/Footer/Footer"

export const App = () => (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
)
