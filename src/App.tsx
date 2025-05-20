import Title from "./components/Title";
import OrderList from "./views/OrderList";
import { AppContainer } from "./index.style";

const App = () => {
  return (
    <AppContainer>
      <Title />
      <OrderList />
    </AppContainer>
  );
};

export default App;
