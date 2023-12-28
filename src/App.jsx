import { Header } from "./Header";
import './global.css';
import Button from './Button';
import styles from './App.module.css'; // Crie um novo arquivo App.module.css


function App() {

  return (
    <div>
      <Header />
      <div className={styles.buttonContainer}>
        <Button text="Adicionar novo paciente" />
        <Button text="Acessar ficha de pacientes" />
      </div>

    </div>

  )
}

export default App
