import { Provider } from "react-redux";
import { AppRouter } from "./routes/AppRouter";
import { store } from "./store/store";

function CalendarApp() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default CalendarApp;
