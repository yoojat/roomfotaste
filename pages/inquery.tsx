import styled from "styled-components";
import DefaultContentLayout from "../components/defaultContent";
import Divider from "../components/Divider";

const ReserveationHeaderContainer = styled.div`
  margin-top: 30px;
  text-align: center;
  margin-bottom: 30px;
`;

const KakaoButton = styled.a`
  border: none;
  font-weight: 800;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
  margin: 10px;
  width: 160px;
  display: inline-block;
  padding: 10px;
  border: 1px solid black;
`;
const NaverButton = styled.a`
  border: none;
  font-weight: 800;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
  margin: 10px;
  width: 160px;
  display: inline-block;
  padding: 10px;
  border: 1px solid black;
`;

const Spacer = styled.div`
  margin-top: 70px;
`;

const ReservationContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const ReservationContentCol = styled.div`
  padding: 20px;
  width: 100%;
  max-width: 600px;
  @media screen and (max-width: 992px) {
    max-width: inherit;
  }
`;
const ReservationContentRow = styled.div`
  /* background-color: #e27a68; */
  border: 2px solid white;
  border-top: 1px solid black;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 100px;
  line-height: 25px;
  word-break: keep-all;
`;

const Table = styled.table`
  width: 100%;
  * {
    border: 1px solid black;
  }
  td {
    padding: 5px;
  }
`;

const Inquery = () => {
  return (
    <DefaultContentLayout
      title={
        <>
          소중한 공간의
          <br />
          특별한 주인공이 되어주세요.
        </>
      }
      photoUrl="/indexPhotos/7.jpg"
      seoTitle="문의"
    >
      <Spacer />

      <ReserveationHeaderContainer>
        <Divider />
        <Spacer />

        <KakaoButton target={"_blank"} href="https://pf.kakao.com/_VCxnsb/chat">
          카카오톡 문의
        </KakaoButton>
        {/* <NaverButton
          target={'_blank'}
          href='https://booking.naver.com/booking/10/bizes/719763'
        >
          네이버 예약
        </NaverButton> */}
        <Spacer />
        <Divider />
      </ReserveationHeaderContainer>
      <ReservationContentContainer>
        <ReservationContentCol>
          <ReservationContentRow>
            <p>안내사항</p>
            <p>
              <ul>
                <li>
                  - 서동여관 그림의 방은 환경을 위해, 일회용 어메니티를 제공하지
                  않습니다.
                </li>
                <li>
                  - 주방에서 간단한 조리는 가능하지만, 너무 냄새나는 음식은
                  자제바랍니다.
                </li>
                <li>
                  - 공간 사용 후, 전열기기 전원을 꺼주시고, 설거지와 정리정돈
                  부탁드립니다.
                </li>
                <li>- 숙소에 반려동물은 동반 불가합니다.</li>
                <li>
                  - 침구류는 이용 전후 항상 깨끗하게 소독, 세탁하고 있습니다.
                </li>
                <li>
                  - 무인으로 운영되는 공간의 특성상, 방범을 위해 CCTV가
                  설치되어있습니다.
                </li>
                <li>
                  - 방역업체와의 계약을 통해, 주기적으로 소독 작업을 하고
                  있습니다.
                </li>
                <li>- 내부에 화장실이 있습니다.</li>
                <li>
                  주차는 지하주차장을 이용해주세요! 단, 주차시 미리
                  연락부탁드립니다!
                </li>
              </ul>
              <br />
              <br />
            </p>
          </ReservationContentRow>
          <ReservationContentRow>
            <ul>
              <li>**[공통 비치 품목]**</li>
              <li>- 수건, 물티슈, 드라이기(JMW), 휴지, 치약</li>
              <li> &nbsp;&nbsp;(수건은 1인 3장/1박 당 제공합니다)</li>
              <li>
                - 손 세정제, 폼 클렌징, 샴푸, 바디워시, 컨디셔너, 샤워타월 등{" "}
              </li>
              <li>- 그릇, 수저, 냄비, 팬, 와인잔, 오프너 등</li>
              <li>
                - 공기청정기, 비데, 전신거울, 무드등, 옷걸이, 양키캔들 워머 등
              </li>
              <li>- 가습기, 냉장고, 가스렌지, 전자렌지</li>
            </ul>
          </ReservationContentRow>
          <ReservationContentRow>
            <ul>
              <li>**[취향의방 전용]**</li>
              <li>- 2인용 쇼파, 소형 테이블, 빔 프로젝트</li>
              <li>- 퀸 사이즈 침대(2인)+싱글 사이즈 침대(1인)</li>
              <li>- 침구 세트(안방+작은방 / 배게, 이불)</li>
              <li>
                &nbsp;&nbsp; (안방 수납장과 작은방 침대 수납장에 침구류가
                있습니다.)
              </li>
              <li>- 원피스 1~97권, 무라카미하루키 책들, 보드게임, 빈백 등</li>
            </ul>
          </ReservationContentRow>
        </ReservationContentCol>
      </ReservationContentContainer>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d814.892894912934!2d129.09660176292584!3d35.217138962793804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356893bb7df20ff1%3A0x587edfd9dd9a1fb2!2z67aA7IKw6rSR7Jet7IucIOq4iOygleq1rCDshJzrj5nroZw5MeuyiOq4uCA3!5e0!3m2!1sko!2skr!4v1640074496992!5m2!1sko!2skr"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
      ></iframe>
    </DefaultContentLayout>
  );
};

export default Inquery;
