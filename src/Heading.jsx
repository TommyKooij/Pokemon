import React, { useEffect, useState } from "react";

const Heading = () => {
  cons[(naam, setNaam)] = useState("Tom Kooij");

  /*useEffect(() => {
    console.log("Er gebeurt iets!");
  });*/

  useEffect(() => {
    console.log("Naam aangepast naar:", naam);
  }, [naam]);

  return (
    <div>
      <div>Mijn naam is: {naam}</div>;
      <button onClick={() => setNaam("Tom")}>Naam aanpassen</button>
    </div>
  );
};

export default Heading;
