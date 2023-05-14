import EmblemCar from "../../assets/images/logo.png";
import { EmblemBottom, EmblemLogo, EmblemText } from "./emblem.styled";

export const Emblem = () => {
  return (
    <EmblemBottom>
      <EmblemLogo src={EmblemCar} />

      <EmblemText>HONGQI</EmblemText>
    </EmblemBottom>
  );
};
