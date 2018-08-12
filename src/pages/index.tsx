import React from "react";
import Link from "gatsby-link";
import styled from 'styled-components';

import { InfoSection } from '../components';

const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    overflow-x: auto;
    overflow-y: auto;
    background-color: #f0f9fc;
`;

const MainView = styled.div`
  position: relative;
  width: 100%;
  min-height: 1024px;
  background-color: #eee;
`;

const Main1Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 1075px;
`;

const Main2Image = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 2;
  width: 1303px;
`;

const Main3Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Main4ImageView = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 234px;
  height: 236px;
  margin-left: -400px;
  margin-top: 50px;
  z-index: 3;
`;

const Main4Image = styled.img`
  width: 234px;
  height: 236px;
`;

const Main5ImageView = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 142px;
  height: 142px;
  margin-top: -250px;
    margin-left: 150px;
  z-index: 4;
`;

const Main5Image = styled.img`
  width: 142px;
  height: 142px;
`;

const Main6ImageView = styled.div`
  position: absolute;
  top: 324px;
  left: 50%;
  width: 213px;
  height: 317px;
  margin-left: -106px;
  z-index: 10;
`;

const Main6Image = styled.img`
  width: 213px;
  height: 317px;
`;

const IntroView = styled.div`
  position: relative;
  width: 100%;
  min-height: 2145px;
`;

const Intro1Image = styled.img`
  position: absolute;
  top: 249px;
  right: 49px;
  width: 213px;
  height: 375px;
`;

const Section1 = styled.div`
  position: relative;
  height: 386px;
`;

const IntroSection1Text = styled(InfoSection)`
  position: absolute;
  bottom: 0;
  right: 68px;
  width: 500px;
`;

const Section2 = styled.div`
  padding-top: 60px;
  padding-left: 57px;
`;

const IntroSection2Image1 = styled.img`
width: 443px;
height: 608px;
    box-shadow: 2px 2px 10px #6fc7e2;
`;

const IntroSection2Image2 = styled.img`
width: 443px;
height: 608px;
margin-left: 25px;
    box-shadow: 2px 2px 10px #6fc7e2;
`;

const Section3 = styled.div`
  padding-top: 226px;
  height: 491px;
`;

const IntroSection3Text = styled(InfoSection)`
  margin-right: 104px;
  width: 461px;
  float: right;
`;

const Section4 = styled.div`
  height: 300px;
  padding-left: 102px;
`;

const IntroSection4Text1 = styled(InfoSection)`
  display: inline-block;
  width: 461px;
`;

const IntroSection4Text2 = styled(InfoSection)`
  display: inline-block;
  width: 461px;
  height: 100%;
  margin-right: 101px;
  float: right;
`;

const Section5 = styled.div`
  padding-left: 102px;
`;

const IntroSection5Text = styled(InfoSection)`

`;

const Intro1BottmImageView = styled.div`
   position: absolute;
  bottom: 361px;
  left: 50%;
  width: 213px;
  height: 375px;
  margin-left: -106px;
`;

const Intro1BottomImage = styled.img`
  width: 213px;
  height: 375px;
`;

const IndexPage = () => (
  <Container>
    <MainView>
      <Main1Image src={require("./images/main-1@2x.png")} />
      <Main2Image src={require("./images/main-2@2x.png")} />
      <Main3Image src={require("./images/main-3@2x.png")} />
      <Main4ImageView>
        <Main4Image src={require("./images/main-4@2x.png")} />
      </Main4ImageView>
      <Main5ImageView>
        <Main5Image src={require("./images/main-5@2x.png")} />
      </Main5ImageView>
      <Main6ImageView>
        <Main6Image src={require("./images/main-6@2x.png")} />
      </Main6ImageView>
    </MainView>
    <IntroView>
      <Section1>
        <IntroSection1Text
          hideTitle={true} hideDivier={true}
          content={`아이디어의 시작점인 ‘물음(why)’에 관한 주제이다.
새로운 도전을 하게 될 신예들의 당돌함을 보여줌과
동시에 크리에이터의 기본적인 자세를 잊지 말자는
다짐이기도 하다.`} />
      </Section1>
      <Section2>
        <IntroSection2Image1 src={require("./images/intro-section-2-1@2x.png")} />
        <IntroSection2Image2 src={require("./images/intro-section-2-2@2x.png")} />
      </Section2>
      <Section3>
        <IntroSection3Text
          hideTitle={false}
          hideDivier={false}
          dividerWidth={461}
          title={`전시 일정`}
          content={`10.11 Thu - 10.16 Tue
10:00a.m. - 20 :00p.m.`} />
      </Section3>
      <Section4>
        <IntroSection4Text1
          title="교통편"
          hideDivier={false}
          hideTitle={false}
          dividerWidth={461}
          content={`한양대(17017) 일반 10-1, 직행 3100, 3101

한양대입구(17018) 일반 10-1

한양대정문(17311) 직행 3100, 3101,3102

한양대게스트하우스(17361,17368) 일반 10-1 직행 3102`} />
        <IntroSection4Text2
          title="장소" hideDivier={false} hideTitle={false}
          dividerWidth={461}
          content={`한양대학교 에리카 캠퍼스 정문 아고라`}
        />
      </Section4>
      <Section5>
        <IntroSection5Text hideTitle={true}
          hideDivier={false}
          dividerWidth={51}
          content={`4호선 한대앞역 셔틀버스 이용`} />
      </Section5>
      <Intro1Image src={require("./images/intro-1@2x.png")} />
      <Intro1BottmImageView>
        <Intro1BottomImage src={require("./images/intro-1@2x.png")} />
      </Intro1BottmImageView>
    </IntroView>
  </Container>
);

export default IndexPage;
