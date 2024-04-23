import styled from "styled-components";
import DefaultContentLayout from "../components/defaultContent";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // This only needs to be imported once in your app
import { useState } from "react";
import useScroll from "../hooks/useScroll";
import Divider from "../components/Divider";

const ContentContainer = styled.div`
  max-width: 1280px;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
`;

const ContentItem = styled.div`
  text-align: center;
`;

const TextContainer = styled.div`
  margin-top: 10px;
  max-width: 1280px;
  p {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Space = styled.div`
  width: 100%;
  height: 100px;
`;

const PhotoSection = styled.div`
  display: flex;
  justify-content: right;
`;

const PhotoContainer = styled.div`
  display: flex;
  justify-content: right;
  flex-wrap: wrap;
  width: 80%;
  min-width: 600px;
  @media screen and (max-width: 992px) {
    width: 100%;
    min-width: inherit;
  }
  max-width: 1100px;
  margin-bottom: 30px;
`;

const PhotoItem = styled.div<{ photoUrl: string; innerWidth: number }>`
  background-image: url(${(props) => props.photoUrl});
  width: 30%;
  height: 240px;
  @media screen and (max-width: 992px) {
    width: 100%;
    height: ${(props) => (props.innerWidth * 6) / 10}px;
  }
  background-size: cover;
  margin-left: 10px;
  margin-top: 10px;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }

  @media screen and (max-width: 992px) {
    cursor: inherit;
    &:hover {
      opacity: inherit;
    }
  }
`;
const TextContentCol = styled.div`
  padding: 20px;
  width: 100%;
  max-width: 600px;
  @media screen and (max-width: 992px) {
    max-width: inherit;
  }
`;

const TextContentRow = styled.div`
  /* background-color: #e27a68; */
  border: 2px solid white;
  border-top: 1px solid black;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 100px;
  line-height: 25px;
`;

// 992px

const images = [
  "/indexPhotos/24.jpg",
  "/indexPhotos/2.JPG",
  "/indexPhotos/11.jpg",
  "/indexPhotos/29.jpg",
  "/indexPhotos/13.jpg",
  "/indexPhotos/1.JPG",
  "/indexPhotos/15.jpg",
  "/indexPhotos/31.jpg",
  "/indexPhotos/9.jpg",
];

const Yoohee = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isPhotoPopUp, setIsPhotoPopUp] = useState(false);
  const { innerWidth } = useScroll();
  const TitleSrc = () => (
    <div>
      다양한 공간에서의
      <br />
      즐길거리와 분위기를 모두 경험할 수 있는 공간
    </div>
  );

  return (
    <DefaultContentLayout
      title={<TitleSrc />}
      photoUrl="/indexPhotos/14.jpg"
      seoTitle="즐길거리"
    >
      <ContentContainer>
        <Space />
        <Divider />
        <ContentItem>공간도 이미지</ContentItem>
        <Divider />
        <Space />
        <ContentItem>
          <PhotoSection>
            <PhotoContainer>
              {images.map((image, index) => (
                <PhotoItem
                  key={index}
                  photoUrl={image}
                  innerWidth={innerWidth}
                  onClick={() => {
                    if (innerWidth > 992) {
                      setIsPhotoPopUp(true);
                      setPhotoIndex(index);
                    }
                  }}
                />
              ))}
            </PhotoContainer>
          </PhotoSection>
        </ContentItem>

        <TextContainer>
          <TextContentCol>
            <TextContentRow>
              <p>
                서동여관 취향의 방은
                <br />
                소설, 만화, 음악, 영화, 게임 등을 한 공간내에서 즐길 수 있도록
                만들어졌습니다.
              </p>

              <p>
                너무 산만해질까 하는 걱정이 앞서,
                <br />
                전체적인 색감을 통일하여, 일정한 분위기를 연출해 봤습니다.
              </p>

              <p>
                하나의 공간 내에서 다양한 취미를 즐기며,
                <br />
                빠르게 시간이 흘러가는 걸 경험 하실겁니다.
              </p>

              <p>
                가끔은,
                <br />
                베란다로 나와, 눈앞에 펼쳐진 이 동네를 멍하니 바라보는 것도
                추천드립니다.
              </p>
            </TextContentRow>
            <TextContentRow>
              <p> 공유주방 서동부엌을 이용하실 수 있습니다(별도 비용).</p>
              <p>
                사랑하는 이들과 함께 맛있는 식사를 하며 오붓한 시간을 가지시기
                바랍니다.
              </p>
              <p>하지만, 취향의방과는 걸어서 15분 정도에 위치해 있습니다. </p>
              <p>이 점을 고려하여 이용을 권유드립니다.</p>
            </TextContentRow>
            <TextContentRow>
              <p>오티티룸 서동영화를 이용하실 수 있습니다(별도 비용).</p>
              <p>여행을 통해, 지친 하루를 한편의 영화로 달래보는건 어떨까요?</p>
              <p>서동영화 또한, 걸어서 15분 정도가 소요됩니다.</p>
              <p>이 동네를 즐기시기에는 딱 적당한 거리겠지만,</p>
              <p>걷는 것에 익숙하지 않다면 먼 거리라고 봐져요!</p>
            </TextContentRow>
            <TextContentRow>
              <p>공유서재 서동문방을 이용하실 수 있습니다(별도 비용)</p>
              <p>한권의 책을 읽거나 미뤄둔 일을 하기에 적당한 공간입니다.</p>
              <p>서동고개 버스정류장 옆 서동문방을 많이 애용해주세요.</p>
            </TextContentRow>
          </TextContentCol>
        </TextContainer>
        <TextContainer></TextContainer>
      </ContentContainer>
      {isPhotoPopUp && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsPhotoPopUp(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </DefaultContentLayout>
  );
};

export default Yoohee;
