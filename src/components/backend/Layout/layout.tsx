import { Authenticator } from "@aws-amplify/ui-react";
import { Auth } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import Sidebar from "./sidebar";
import { useEffect, useState } from "react";

interface Props {
  children: any;
}

export default function LayoutAdmin({ children }: Props) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function getCurrentUser() {
      try {
        const userData = await Auth.currentAuthenticatedUser();
        setUser(userData);
      } catch (error) {
        console.log("Error getting user", error);
      }
    }
    getCurrentUser();
  }, []);

  //console.log(user);

  return (
    <div className="">
      <Authenticator hideSignUp={true} className="h-screen">
        <main>
          <div className="flex flex-row">
            <Sidebar />
            <div className="max-w-screen-xl mx-auto p-4">{children}</div>
          </div>
        </main>
      </Authenticator>
    </div>
  );
}
