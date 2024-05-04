import 'bootstrap/dist/css/bootstrap.min.css';
import MainRouter from './routes/MainRouter';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <div>
        <MainRouter />
      </div>
    </CartProvider>

  );
}

export default App;
