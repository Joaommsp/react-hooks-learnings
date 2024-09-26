import AppRoutes from "./routes";

import { UserProvider } from "./pages/UserProvider";

function App() {
  return (
    <UserProvider>
        <AppRoutes />
    </UserProvider>
  );
}

export default App;
