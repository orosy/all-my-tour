import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { color } from 'styles/color';
import StyledButton from 'components/CommonStyled/StyledButton';
import MYPAGE_LIST from './data';
import axios from 'axios';
import { MYPAGE_USER_API } from 'config';

const MyPage = () => {
  const history = useHistory();

  const [userName, setUserName] = useState('메이커');
  const [userEmail, setUserEmail] = useState('');
  const [isMaker, setIsMaker] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('access_token');

    axios
      .get(
        MYPAGE_USER_API,
        {
          headers: {
            Authorization: token,
          },
        },
        { withCredentials: true }
      )
      .then(res => {
        setUserName(res.data.Result.name);
        setUserEmail(res.data.Result.email);
        setIsMaker(res.data.Result.is_maker);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <MyPageContainer>
      <MyPageWrapper>
        <MyPageProfile>
          {!!isMaker ? (
            <>
              <MakerContainer>
                <MakerName>{`${userName}`}</MakerName>
                <MakerEmail>{`${userEmail}`}</MakerEmail>
                <MakerIconsContainer>
                  <MakerIcons>
                    <i className="fab fa-instagram-square"></i>
                  </MakerIcons>
                  <MakerIcons>
                    <i className="fab fa-facebook-square"></i>
                  </MakerIcons>
                  <MakerIcons>
                    <i className="fab fa-youtube"></i>
                  </MakerIcons>
                </MakerIconsContainer>
              </MakerContainer>
              <ApplyBtn
                onClick={() => {
                  history.push({
                    pathname: '/makersapply',
                    mode: 'modify',
                  });
                }}
              >
                메이커 정보 수정하기
              </ApplyBtn>
            </>
          ) : (
            <>
              <RegisterMaker>{`${userName}님, 메이커 등록이 아직이시군요!`}</RegisterMaker>
              <CompleteMaker>
                {`메이커 등록을 완료하고, ${userName}님만의 투어를 만들어보세요.`}
              </CompleteMaker>
              <ApplyBtn
                onClick={() => {
                  history.push({
                    pathname: '/makersapply',
                    mode: 'apply',
                  });
                }}
              >
                메이커 지원하기
              </ApplyBtn>
            </>
          )}
        </MyPageProfile>
        <MyPageAdmin>
          {MYPAGE_LIST.map(item => {
            return (
              <MyPageNotice key={item.id}>
                <MyPagePTag>{item.name}</MyPagePTag>
                <MyPageArrow
                  onClick={() => {
                    if (item.signout) {
                      const confirmBox =
                        window.confirm('로그아웃 하시겠습니까?');
                      if (confirmBox === true) {
                        item.signout();
                        history.push('/');
                      }
                    }
                  }}
                >
                  <i className={item.icon}></i>
                </MyPageArrow>
              </MyPageNotice>
            );
          })}
        </MyPageAdmin>
      </MyPageWrapper>
    </MyPageContainer>
  );
};

const MyPageContainer = styled.div`
  width: 1024px;
  margin: 8rem auto 5rem;
`;

const MyPageWrapper = styled.div``;

const MyPageProfile = styled.div`
  margin-top: 10rem;
  color: ${color.DARKGRAY};
`;

const RegisterMaker = styled.p`
  display: flex;
  justify-content: center;
  font-size: 1.2rem;
`;

const MakerContainer = styled.div`
  width: 700px;
  margin: 5rem 0 0 17rem;
`;

const MakerName = styled.p`
  font-size: 1.2rem;
`;

const MakerEmail = styled.p`
  font-size: 1rem;
  font-weight: 300;
`;

const MakerIconsContainer = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const MakerIcons = styled.div`
  margin-right: 1rem;
  font-size: 1.6rem;
  color: ${color.DARKGRAY};
  cursor: pointer;
`;

const CompleteMaker = styled.p`
  display: flex;
  justify-content: center;
  margin-top: 0.4rem;
  font-weight: 300;
`;

const ApplyBtn = styled(StyledButton)`
  display: block;
  margin: 2rem auto 0;
  padding: 1.4rem 10rem;
  background: ${color.WHITE};
  color: ${color.DARKGRAY};
  border: 1px solid ${color.LIGHTGRAY};
`;

const MyPageAdmin = styled.div`
  width: 700px;
  margin: 4rem auto 0;
`;

const MyPageNotice = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: 4;
  border-bottom: 1px solid ${color.DISABLED};
`;

const MyPagePTag = styled.p`
  padding-left: 1rem;
  color: ${color.DARKGRAY};
`;

const MyPageArrow = styled.div`
  padding-right: 1rem;
  color: ${color.LIGHTGRAY};
  cursor: pointer;
`;

export default MyPage;
