import { render } from "preact";

import preactLogo from "./assets/preact.svg";
import "./style.css";
import { useSize } from "./hooks/useSize";
import { useRef } from "preact/hooks";

export function App() {
  const resourceRef = useRef();
  const { width } = useSize(resourceRef);
  return (
    <div>
      <a href="https://preactjs.com" target="_blank">
        <img src={preactLogo} alt="Preact logo" height="160" width="160" />
      </a>
      <h1>Get Started building Vite-powered Preact Apps </h1>
      <section>
        <a ref={resourceRef} href="https://preactjs.com/tutorial" target="_blank" class="resource">
          <h2>Learn Preact</h2>
          <p>If you're new to Preact, try the interactive tutorial to learn important concepts</p>
        </a>
        <a href="https://preactjs.com/tutorial" target="_blank" class="resource">
          <h2>Learn Preact</h2>
          <p>If you're new to Preact, try the interactive tutorial to learn important concepts</p>
        </a>
        <a href="https://preactjs.com/tutorial" target="_blank" class="resource">
          <h2>Learn Preact</h2>
          <p>If you're new to Preact, try the interactive tutorial to learn important concepts</p>
        </a>
      </section>
			<button style={{ width }}>auto size button</button>
    </div>
  );
}


render(<App />, document.getElementById("app"));
