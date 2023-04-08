import "./index.css";

import { LoginHeader } from "../../components/Auth/Login/LoginHeader";
import { LoginSocialNetworks } from "../../components/Auth/Login/LoginSocialNetworks";
import { Divider } from "../../components/Global/Divider";
import { LoginForm } from "../../components/Auth/Login/LoginForm";
import { SignUpLink } from "../../components/Auth/Login/SignUpLink";

export function Login() {
  return (
    <>
      <LoginHeader />

      <div className="flex flex-col gap-2.5 max-w-md mt-5 mb-2.5 px-2.5 mx-auto md:mt-10">
        <p className="text-sm font-bold text-center">
          Para continuar, faça login no Spotify.
        </p>

        <LoginSocialNetworks />

        <Divider text="ou" />

        <LoginForm />

        <Divider className="mt-3 mb-5" />

        <SignUpLink />
      </div>
    </>
  );
}
