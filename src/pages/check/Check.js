import React from "react";

export default function Verify() {
  return (
    <div>
      {/* Your existing content for the Verify page */}
      {/* Add an iframe to display verify.html */}
      <iframe
        src="/check.html"
        title="Check_It_Out"
        style={{ width: "100%", height: "100vh", border: "none" }}
      ></iframe>
    </div>
  );
}
