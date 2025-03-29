import { SafeAreaProvider } from "react-native-safe-area-context";
import LoginScreen from "./screens/LoginScreen";
import ContactScreen from "./screens/ContactScreen";

function App() {
  return (
    <SafeAreaProvider>
      <LoginScreen />
      <ContactScreen />
    </SafeAreaProvider>
  );
}

export default App;