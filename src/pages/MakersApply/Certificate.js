import React, { useRef } from 'react';
import styled from 'styled-components';
import { CERTIFICATE_LIST } from './data';

const Certificate = ({
  certificateImage,
  onCertificateUploadClick,
  onCertificateChange,
  onCertificateDelete,
}) => {
  const certificateRef = useRef([]);

  const imageUploadClick = (e, num) => {
    e.preventDefault();
    certificateRef.current[num].click();
  };

  return (
    <>
      <ContentTitle>
        증빙서류
        <DuplicateSelectionAvailable>중복선택 가능</DuplicateSelectionAvailable>
        <ContentDesc>
          영역에 대한 전문성을 입증할 수 있는 서류를 등록해주세요
        </ContentDesc>
      </ContentTitle>
      <FlexColumn>
        <ComboBox id="license" name="license" onChange={onCertificateChange}>
          <option value="">자격증을 선택해주세요</option>
          {CERTIFICATE_LIST.map(language => {
            return (
              <option key={language.id} value={language.language}>
                {language.language}
              </option>
            );
          })}
        </ComboBox>
        {certificateImage.map((certificateImage, index) => {
          return (
            <ButtonWrapper key={index}>
              <Button
                key={index}
                onClick={e => imageUploadClick(e, index)}
                file={certificateImage}
              >
                {certificateImage ? (
                  certificateImage.file ? (
                    <FlexSpaceAround>
                      <FlexSpaceAround>
                        <Icon src="images/paper-clip.png" />
                        <ImageName>{certificateImage.file.name}</ImageName>
                      </FlexSpaceAround>
                      {(certificateImage.file.size / 1048576).toFixed(2) + 'MB'}
                    </FlexSpaceAround>
                  ) : (
                    `${certificateImage.fileSection} 이미지 파일 업로드`
                  )
                ) : (
                  `${certificateImage.fileSection} 이미지 파일 업로드`
                )}
              </Button>
              <RealImageUpload
                type="file"
                accept=".jpg, .jpeg, .png, .pdf"
                onChange={e =>
                  onCertificateUploadClick(e, certificateImage.fileSection)
                }
                ref={elem => (certificateRef.current[index] = elem)}
              />
              <DeleteButton
                onClick={() =>
                  onCertificateDelete(certificateImage.fileSection)
                }
              >
                -
              </DeleteButton>
            </ButtonWrapper>
          );
        })}
        <ContentDesc>
          <div>! 최신 버전의 자격증 사본을 제출하세요.</div>
          <div>! JPG,JPEG,PNG,PDF/10MB 이하 파일 1개만 업로드 가능합니다.</div>
        </ContentDesc>
      </FlexColumn>
    </>
  );
};

export default Certificate;

const ContentTitle = styled.div`
  font-size: 1.2rem;
`;

const DuplicateSelectionAvailable = styled.span`
  padding-left: 5px;
  font-size: 0.8rem;
  color: gray;
`;

const ContentDesc = styled.div`
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: gray;
`;

const ComboBox = styled.select`
  width: 500px;
  height: 50px;
  border-color: #dddddd;
  font-size: 1rem;
  text-align: center;
  color: gray;
`;

const Button = styled.button`
  width: 440px;
  height: 50px;
  color: white;
  background-color: ${props =>
    props.file && props.file.file ? 'black' : '#dddddd'};
  padding: 0rem 1rem;
  font-size: 1rem;
  cursor: pointer;
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RealImageUpload = styled.input`
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
  margin: 0 1rem;
`;

const ImageName = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
  width: 250px;
`;

const DeleteButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border: 1px solid #dddddd;
  font-size: 35px;
  color: gray;
  cursor: pointer;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 500px;
  margin-top: 0.3rem;
`;
