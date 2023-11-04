import React from "react";

export default function Verify() {
 
  const flaskAppUrl = "http://127.0.0.1:8080"; // Replace with the actual URL of your Flask app

  return (
    <div>

      <iframe
        src={flaskAppUrl}
        title="Check_It_Out"
        style={{ width: "100%", height: "100vh", border: "none" }}
      ></iframe>
    </div>
  );
}
