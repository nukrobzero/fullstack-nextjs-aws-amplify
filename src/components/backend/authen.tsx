import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

export default function Authen() {
  return (
    <div className="h-screen">
      <Authenticator hideSignUp={true} className="h-screen">
        {({ signOut, user }) => (
          <main>
            <h1>Hello, </h1>
            <button onClick={signOut}>Sign out</button>
          </main>
        )}
      </Authenticator>
    </div>
  );
}
