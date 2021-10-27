import React from 'react';
import styled from 'styled-components';

const ImageUpload = React.forwardRef(
  ({ image, onChange, onRefUploadClick, data, onDeleteImageClick }, ref) => {
    const { title, required, desc } = data;
    const { file, previewURL } = image;
    return (
      <>
        <ContentTitle>
          {title}
          {required && <Required>*</Required>}
          <ContentDesc>{desc}</ContentDesc>
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
              onChange={onChange}
              ref={ref}
            />
            <Button onClick={onRefUploadClick} file={image.file}>
              {image.file ? (
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

export default ImageUpload;

const ContentTitle = styled.div`
  font-size: 1.2rem;
`;

const Required = styled.span`
  color: red;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;
`;

const Button = styled.button`
  width: 364px;
  height: 50px;
  color: ${props => (props.file ? 'white' : 'gray')};
  background-color: ${props => (props.file ? 'black' : '#f2f4fa')};
  border: 1px solid #dddddd;
  font-size: 1rem;
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
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
  width: 150px;
`;
