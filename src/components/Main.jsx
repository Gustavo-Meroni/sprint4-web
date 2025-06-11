import React from "react";

function Main({ children }) {
  return (
    <main className="flex flex-col gap-4 p-4">
      {children}
    </main>
  );
}

export default Main;
