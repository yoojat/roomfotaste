import styled from "styled-components";
import DefaultContentLayout from "../components/defaultContent";
import DefaultContent from "../components/defaultContent";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  transition: background-image 3s;
`;

const ImageContainer = styled.div``;

const Img = styled.div<{ imgUrl: string }>`
  width: 100%;
  height: 100vh;
  background-image: url(${(props) => props.imgUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  transition: opacity 2s;
  position: absolute;
`;

const Title = styled.div`
  z-index: 998;
  position: absolute;
  top: 33vh;
  font-size: 13px;
  word-spacing: 5px;
  right: 2%;

  @media screen and (min-width: 992px) {
    right: 7%;
    top: 35vh;
    font-size: 15px;
    word-spacing: 3px;
  }

  color: white;
  letter-spacing: 4px;
  line-height: 20px;
  text-align: right;
  p {
    padding: 10px;
  }
`;

const Div = styled.div`
  p {
    margin-bottom: 20px;
  }
`;

const Prologue = () => {
  const TitleSrc = () => (
    <Div>
      <p>
        간혹,
        <br />
        집밖 보다는 내방 침대에 누워
        <br />
        하루를 보내고 싶을때가 있죠.
        <br />
      </p>
      <p>
        그렇다고 멍하니 스마트폰만 보다
        <br /> 저녁쯤 되면,
        <br />
        하루가 그냥 저물어 간 것에
        <br />
        후회가 될때가 많았어요.
      </p>
      <p>
        나만의 공간에서,
        <br />
        좀 더 다채롭게 쉼을 즐기고 싶다는 생각이
        <br />
        취향의방으로 이어지게 되었습니다.
      </p>
      <p>
        90년대 부산의 감성을 온전히 머금은
        <br />
        제법 오래된 고택에 여러분을 초대합니다
      </p>
    </Div>
  );
  return (
    <DefaultContentLayout
      title={<TitleSrc />}
      photoUrl="/indexPhotos/24.jpg"
      seoTitle="프롤로그"
    ></DefaultContentLayout>
  );
};

export default Prologue;
