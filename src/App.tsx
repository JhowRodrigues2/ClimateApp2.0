import TemperatureNow from "./components/TemperatureNow";
import GlobalProvider from "./context";
import { AppContainer } from "./styles/GlobalStyles";

function App() {
  return (
    <GlobalProvider>
      <AppContainer>
        <TemperatureNow />
      </AppContainer>
    </GlobalProvider>
  );
}

export default App;
