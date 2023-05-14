import {
  MainItemContent,
  MainItemContentRightDesc,
  MainItemContentRightHover,
  MainItemContentRightSubtitle,
  MainItemContentRightTitle,
  MainItemImg,
  MainItemRight,
  MainItemSubtitle,
  MainItemTitle,
  MainTtem,
} from "./mainListToLeft.styled";

export const MainItemToLeft = ({ img, namePhoto, title, subtitle, desc }) => {
  return (
    <MainTtem>
      <MainItemRight>
        <MainItemImg src={img} alt={namePhoto} />

        <MainItemContentRightHover>
          <MainItemContentRightTitle>{title}</MainItemContentRightTitle>

          <MainItemContentRightSubtitle>
            {subtitle}
          </MainItemContentRightSubtitle>

          <MainItemContentRightDesc>{desc}</MainItemContentRightDesc>
        </MainItemContentRightHover>
      </MainItemRight>

      <MainItemContent>
        <MainItemTitle>{title}</MainItemTitle>

        <MainItemSubtitle>{subtitle}</MainItemSubtitle>
      </MainItemContent>
    </MainTtem>
  );
};
