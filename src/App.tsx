// 引入routes组件
import routes from "./routes";
import { useRoutes  } from "react-router-dom";
import "./App.css";

function App() {
  const element = useRoutes(routes);
  return (
    <div className="App">
      {element}
    </div>
  );
}
 
export default App;