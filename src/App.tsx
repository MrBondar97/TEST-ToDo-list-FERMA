import './global.css';
import { Content } from "./Componets/Content/Content";
import { Header } from "./Componets/Header/Header"
import { BodyApp } from './Componets/Content/content.styled';

export const App = () => (
    <BodyApp className="App">
      <Header />
      <Content />
    </BodyApp>
)
