import { marked } from "marked";
import { useDispatch, useSelector } from "react-redux";
import { setPreviewerSize } from "../features/sizeComponents/previewer-size-slice";

function Previewer() {
  const text = useSelector((state) => state.text.value);
  const previewerSize = useSelector((state) => state.previewerSize.value);
  const editorSize = useSelector((state) => state.editorSize.value);

  const dispatch = useDispatch();

  function handleClick() {
    dispatch(setPreviewerSize());
  }
  console.log(marked.parse(text));

  return (
    <div
      className={`previewer ${previewerSize ? "fullSize" : "smallSize"}`}
      style={{ display: editorSize ? "none" : "block" }}
    >
      <div className="title-line">
        <h2>Previewer</h2>
        <button onClick={handleClick}>
          <i
            className={`fa ${previewerSize ? "fa-compress" : "fa-arrows-alt"}`}
          ></i>
        </button>
      </div>
      <div
        className="preview-container"
        dangerouslySetInnerHTML={{ __html: marked.parse(text) }}
      ></div>
    </div>
  );
}

export default Previewer;
