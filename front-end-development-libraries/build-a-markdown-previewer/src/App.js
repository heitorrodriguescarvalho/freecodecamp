import Editor from "./components/Editor";
import Previewer from "./components/Previewer";

function App() {
  return (
    <div className="App">
      <Editor className="editor" />
      <Previewer className="previewer" />
    </div>
  );
}

export default App;
