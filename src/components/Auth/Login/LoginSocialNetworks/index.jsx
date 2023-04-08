import { DevicePhoneMobileIcon } from "@heroicons/react/24/outline";

import facebookLogo from "../../../../assets/logos/facebook.svg";
import appleLogo from "../../../../assets/logos/apple.svg";
import googleLogo from "../../../../assets/logos/google.svg";

import { LinkButton } from "../../../Global/LinkButton";

export function LoginSocialNetworks() {
  return (
    <ul className="flex flex-wrap items-center justify-between gap-4">
      <li>
        <LinkButton
          src={facebookLogo}
          alt="Logo Facebook"
          backgroundColorName="facebook"
        />
      </li>
      <li>
        <LinkButton
          src={appleLogo}
          alt="Logo Apple"
          backgroundColorName="black"
        />
      </li>
      <li>
        <LinkButton src={googleLogo} alt="Logo Google" />
      </li>
      <li>
        <LinkButton alt="Ícone de celular">
          <DevicePhoneMobileIcon className="h-8 aspect-square" />
        </LinkButton>
      </li>
    </ul>
  );
}
