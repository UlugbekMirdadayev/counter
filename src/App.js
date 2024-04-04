import React, { useEffect, useMemo } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { setCount } from "./redux/count";
import { setLang } from "./redux/lang";
import { useStoreState } from "./redux/selector";
import locale from "./localization/locale.json";

function App() {
  const states = useStoreState();
  const dispatch = useDispatch();

  const langData = useMemo(() => locale[states.lang], [states.lang]);

  const handleDecreaseCount = (count) => {
    dispatch(setCount(count));
  };

  const handleIncreaseCount = (count) => {
    dispatch(setCount(count));
  };

  useEffect(() => {
    document.title = langData.document_title;
  }, [langData.document_title]);

  return (
    <div className="App">
      <button onClick={() => handleDecreaseCount(states.count + 1)}>
        {langData.decrease}
      </button>
      <h1>{states.count}</h1>
      <button onClick={() => handleIncreaseCount(states.count - 1)}>
        {langData.increase}
      </button>

      <h1>{langData.name}</h1>

      <button onClick={() => dispatch(setLang("uz"))}>UZ</button>
      <button onClick={() => dispatch(setLang("ru"))}>Ру</button>
      <button onClick={() => dispatch(setLang("en"))}>En</button>
    </div>
  );
}

export default App;
