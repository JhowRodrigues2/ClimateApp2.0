import AditionalInformation from "./components/AdditionalInformation";
import TemperatureNow from "./components/TemperatureNow";
import GlobalProvider from "./context";
import { AppContainer } from "./styles/GlobalStyles";

function App() {
  return (
    <GlobalProvider>
      <AppContainer>
        <TemperatureNow />
        <AditionalInformation/>
      </AppContainer>
    </GlobalProvider>
  );
}

export default App;
