// genere le composant collapse

import { Collapsible } from "react-collapse";
import React, { useState, useRef } from "react";

function Collapse() {
  const [state, setState] = useState(false);

  return (
    <section>
      <button
        onClick={() => {
          setState(!state);
        }}
      >
        Toggle
      </button>
      <Collapsible
        expanded={state}
        style={{ overflow: "hidden", transition: "0.3s" }}
      >
        ...content...
      </Collapsible>
    </section>
  );
}

export {Collapse}