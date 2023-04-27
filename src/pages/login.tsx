import React from "react";
import { Authenticator } from "@aws-amplify/ui-react";

export default function Login() {
  return (
    <div className="App">
      <section className="bg-gray-50 h-screen dark:bg-gray-900">
        <div>
          <Authenticator hideSignUp={true} className="h-screen"></Authenticator>
        </div>
      </section>
    </div>
  );
}
