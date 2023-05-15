import EmblemCar from "../../assets/images/logo.png";
import {
  EmblemBottom,
  EmblemLink,
  EmblemLogo,
  EmblemText,
} from "./emblem.styled";

export const Emblem = () => {
  return (
    <EmblemBottom>
      <EmblemLink href="#">
        <EmblemLogo src={EmblemCar} />

        <EmblemText>HONGQI</EmblemText>
      </EmblemLink>
    </EmblemBottom>
  );
};
