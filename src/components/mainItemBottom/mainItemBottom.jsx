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
} from "./mainItemBottom.styled";

export const MainItemBottom = ({ img, title, subtitle, desc, marginTop }) => {
  return (
    <MainTtem style={{ marginTop: marginTop }}>
      <MainItemRight>
        <MainItemImg src={img} alt="Photo cars" />

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
