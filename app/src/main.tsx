import { createRoot } from "react-dom/client";
import { createThirdwebClient } from "thirdweb";
import { ThirdwebProvider } from "thirdweb/react";
import App from "./App.tsx";
import "./index.css";

const client = createThirdwebClient({
clientId: "bb8b5526e837f863682b561154141366",
});

createRoot(document.getElementById("root")!).render(
<ThirdwebProvider>
    <App thirdwebClient={client} />
</ThirdwebProvider>
);