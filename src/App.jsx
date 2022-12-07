import Todos from './components/Todos';
import Header from './components/Header';
import './styles/index.sass';
import AddTodo from './components/AddTodo';

function App() {
  return (
    <div className="App">
      <Header />
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
