import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./srore/srore.ts";
import "./index.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark", // Темный режим
    primary: {
      main: "#00B956", // Зеленый цвет КиноПоиск
    },
    secondary: {
      main: "#FFFFFF", // Белый цвет для контраста
    },
    background: {
      default: "#121212", // Фоновый цвет для темного режима
      paper: "#1C1C1C", // Цвет бумаги для элементов интерфейса
    },
    text: {
      primary: "#FFFFFF", // Основной текст белого цвета
      secondary: "rgba(255, 255, 255, 0.7)", // Второстепенный текст менее яркий
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </Provider>
);
