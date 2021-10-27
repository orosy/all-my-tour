import React from 'react';
import styled from 'styled-components';
import Required from './CommonComponent/Required';

const ProfileImageUpload = React.forwardRef(
  (
    { makerProfileImage, onClick, imageUploadClick, onDeleteImageClick },
    ref
  ) => {
    const { file, previewURL } = makerProfileImage;
    return (
      <>
        <ContentTitle>
          프로필 이미지
          <Required />
          <ContentDesc>
            메이커 본인 확인을 위해 창작자 개인이나 팀의 사진을 올려주세요.
            <br />
            추후 상품 업로드시, 수정가능합니다.
          </ContentDesc>
        </ContentTitle>
        <ContentImage>
          {file ? (
            file.name.split('.').pop().toLowerCase() === 'pdf' ? (
              <Image url="images/pdf.png" />
            ) : (
              <Image url={previewURL} />
            )
          ) : (
            <Image />
          )}
          <ButtonWrapper>
            <HideImageUpload
              type="file"
              accept=".jpg, .jpeg, .png, .pdf"
              onChange={onClick}
              ref={ref}
            />
            <Button onClick={imageUploadClick} file={file}>
              {file ? (
                <FlexSpaceAround>
                  <FlexSpaceAround>
                    <Icon src="images/paper-clip.png" />
                    <ImageName>{file.name}</ImageName>
                  </FlexSpaceAround>
                  <FlexSpaceAround>
                    {(file.size / 1048576).toFixed(2) + 'MB'}
                    <Icon
                      src="images/trash-bin.png"
                      onClick={e => onDeleteImageClick(e)}
                    />
                  </FlexSpaceAround>
                </FlexSpaceAround>
              ) : (
                '이미지 파일 업로드'
              )}
            </Button>
            <ContentDesc>
              <div>! 240px*240px 이상의 이미지로 업로드 해주세요.</div>
              <div>
                ! JPG,JPEG,PNG,PDF/10MB 이하 파일 1개만 업로드 가능합니다.
              </div>
            </ContentDesc>
          </ButtonWrapper>
        </ContentImage>
      </>
    );
  }
);

export default ProfileImageUpload;

const ContentTitle = styled.div`
  font-size: 1.2rem;
`;

const ContentDesc = styled.div`
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: gray;
`;

const ContentImage = styled.div`
  display: flex;
`;

const Image = styled.div`
  width: 120px;
  height: 120px;
  border: 1px solid #dddddd;
  background: url(${props => props.url});
  background-size: cover;
`;

const ButtonWrapper = styled.div`
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  width: 364px;
  height: 50px;
  padding: 0rem 1rem;
  font-size: 1rem;
  color: ${props => (props.file ? 'white' : 'gray')};
  background-color: ${props => (props.file ? 'black' : '#f2f4fa')};
  border: 1px solid #dddddd;
  cursor: pointer;
`;

const HideImageUpload = styled.input`
  display: none;
`;

const FlexSpaceAround = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin: 0rem 1rem;
`;

const ImageName = styled.div`
  width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
`;
