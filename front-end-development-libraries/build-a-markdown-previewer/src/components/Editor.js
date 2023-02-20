import { useDispatch, useSelector } from "react-redux";
import { setText } from "../features/text/text-slice";
import { setEditorSize } from "../features/sizeComponents/editor-size-slice";

function Editor() {
  const text = useSelector((state) => state.text.value);
  const editorSize = useSelector((state) => state.editorSize.value);
  const previewerSize = useSelector((state) => state.previewerSize.value);

  const dispatch = useDispatch();

  function handleChange(event) {
    const newText = event.target.value;
    dispatch(setText(newText));
  }

  function handleClick() {
    dispatch(setEditorSize());
  }

  return (
    <div
      className={`editor ${editorSize ? "fullSize" : "smallSize"}`}
      style={{ display: previewerSize ? "none" : "block" }}
    >
      <div className="title-line">
        <h2>Editor</h2>
        <button onClick={handleClick}>
          <i
            className={`fa ${editorSize ? "fa-compress" : "fa-arrows-alt"}`}
          ></i>
        </button>
      </div>
      <div className="textarea-container">
        <textarea value={text} onChange={handleChange}></textarea>
      </div>
    </div>
  );
}

export default Editor;
