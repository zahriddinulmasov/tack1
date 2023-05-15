import { useTranslation } from "react-i18next";

import { Hero } from "../../containers/hero/hero";
import { ModalItemsMiddle } from "./model.styled";
import { MainItemToRight } from "../../components/MainItemToRight/MainItemToRight";
import { MainItemToLeft } from "../../components/mainListToLeft/mainListToLeft";
import { ModalItemsBySide } from "../../components/mainItemBySide/mainItemBySide";
import { ModalItemsBySideRight } from "../../components/ModelItemsBySideRight/ModalItemsBySideRight";
import { MainItemBottom } from "../../components/mainItemBottom/mainItemBottom";
import { Emblem } from "../../components/emblem/emblem";

import MaainItemImgCA770 from "../../assets/images/CA770.png";
import MaainItemImgCA760 from "../../assets/images/CA760.png";
import MaainItemImgCA7460 from "../../assets/images/CA7460.png";
import MaainItemImgCA773 from "../../assets/images/CA773.png";
import MaainItemImgCA630 from "../../assets/images/CA630.png";
import MaainItemImgCA7202E3 from "../../assets/images/CA7202E3.png";
import MaainItemImgH7 from "../../assets/images/H7.png";

export const Models = () => {
  const { t } = useTranslation();

  return (
    <>
      <Hero />
      
      <MainItemToRight
        img={MaainItemImgCA770}
        namePhoto="CA770"
        title="1965"
        subtitle="Hongi CA770"
        desc={t("pages.model.hongqiEvalution")}
      />

      <ModalItemsMiddle>
        <ModalItemsBySide
          img={MaainItemImgCA773}
          namePhoto="CA773"
          title="1968"
          subtitle="Hongi CA773"
          desc={t("pages.model.hongqiEvalution")}
        />

        <ModalItemsBySideRight
          img={MaainItemImgCA630}
          namePhoto="CA630"
          title="1980"
          subtitle="Hongi CA630"
          desc={t("pages.model.hongqiEvalution")}
          marginTop="80px"
        />
      </ModalItemsMiddle>

      <MainItemToRight
        img={MaainItemImgCA760}
        namePhoto="CA760"
        title="1984"
        subtitle="Hongi CA760"
        desc={t("pages.model.hongqiEvalution")}
      />
      <MainItemToLeft
        img={MaainItemImgCA7460}
        namePhoto="CA7460"
        title="1998"
        subtitle="Hongi CA7460"
        desc={t("pages.model.hongqiEvalution")}
      />
      <MainItemToRight
        img={MaainItemImgCA7202E3}
        namePhoto="CA7202E3"
        title="2000"
        subtitle="Hongi CA7202E3"
        desc={t("pages.model.hongqiEvalution")}
      />

      <MainItemBottom
        img={MaainItemImgH7}
        namePhoto="Hongi H7"
        title="2013"
        subtitle="Hongi H7"
        desc={t("pages.model.hongqiEvalution")}
      />

      <Emblem />
    </>
  );
};
