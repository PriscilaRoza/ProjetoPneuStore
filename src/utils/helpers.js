import { useState } from "react";

function HandleVisibility() {
  const [active, setActive] = useState(false);
  const handleActive = () => {
    setActive(!active);
  };
  return { handleActive, active };
}

export { HandleVisibility };
