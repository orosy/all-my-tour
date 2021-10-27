import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ApplyNav from './ApplyNav';
import AvailableLanguages from './AvailableLanguages';
import Certificate from './Certificate';
import ProfileImageUpload from './ProfileImageUpload';
import Introduce from './Introduce';
import AddHomepage from './AddHomepage';
import InputBoxDiv from './CommonComponent/InputBoxDiv';
import ImageUpload from './CommonComponent/ImageUpload';
import ListAvailableTours from './ListAvailableTours';
import TourSpecialty from './TourSpecialty';
import TourServiceArea from './TourServiceArea';
import ProductForm from './ProductForm';
import BankAccountInformation from './BankAccountInformation';
import useApplyInputs from 'hooks/useApplyInputs';
import { useHistory, useLocation } from 'react-router';
import { useApplyContext } from 'contexts/Context';
import { NAME_NICKNAME_LIST, ID_CARD_DATA, BANK_BOOK_DATA } from './data';
import {
  MAKER_APPLY_API,
  MAKER_DRAFT_API,
  MAKER_REVISE_API,
  BASE_URL,
} from '../../config';

const MakersApply = () => {
  const [makerInfo, setMakerInfo, onChange] = useApplyInputs({
    makerName: '',
    makerNickname: '',
    makerIntroduce: '',
  });
  const [makerProfileImage, setMakerProfileImage] = useState({
    file: '',
    previewURL: '',
  });
  const [idCardImage, setIdCardImage] = useState({
    file: '',
    previewURL: '',
  });
  const [bankBookImage, setBankBookImage] = useState({
    file: '',
    previewURL: '',
  });
  const [tourType, setTourType] = useState({
    type: '',
    peopleNum: 0,
    loadsNum: 0,
  });
  const [bankAccount, setBankAccount] = useState({
    bankAccountName: '',
    bankAccountNumber: '',
    bankAccountHolder: '',
  });
  const [languages, setLanguages] = useState([]);
  const [certificateImage, setCertificateImage] = useState([]);
  const [pageList, setPageList] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [specialtyList, setSpecialtyList] = useState([]);
  const [tourServiceAreaModal, setTourServiceAreaModal] = useState(false);
  const [productForm, setProductForm] = useState('');
  const [mode, setMode] = useState('apply');
  const { serviceAreaList, setServiceAreaList } = useApplyContext();

  const profileImageRef = useRef();
  const idCardRef = useRef();
  const bankBookRef = useRef();

  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    setServiceAreaList([]);
    location.mode && setMode(location.mode);
    if (mode === 'modify') {
      axios
        .get(MAKER_REVISE_API, {
          headers: {
            Authorization: localStorage.getItem('access_token'),
          },
        })
        .then(response => {
          const profileImage = new File(
            [response.data.MESSAGE.profile],
            [
              response.data.MESSAGE.profile_name
                .split('/')
                .splice(1, response.data.MESSAGE.idcard_name.length)
                .join(''),
            ],
            {
              type: `image/${response.data.MESSAGE.profile_name
                .split('.')
                .pop()
                .toLowerCase()}`,
            }
          );
          setMakerProfileImage({
            file: profileImage,
            previewURL: `${BASE_URL}${response.data.MESSAGE.profile_url}`,
          });
          const idCard = new File(
            [response.data.MESSAGE.idcard],
            [
              response.data.MESSAGE.idcard_name
                .split('/')
                .splice(1, response.data.MESSAGE.idcard_name.length)
                .join(''),
            ],
            {
              type: `image/${response.data.MESSAGE.idcard_name
                .split('.')
                .pop()
                .toLowerCase()}`,
            }
          );
          setIdCardImage({
            file: idCard,
            previewURL: `${BASE_URL}${response.data.MESSAGE.idcard_url}`,
          });
          const bankBook = new File(
            [response.data.MESSAGE.bankbook],
            [
              response.data.MESSAGE.bankbook_name
                .split('/')
                .splice(1, response.data.MESSAGE.idcard_name.length)
                .join(''),
            ],
            {
              type: `image/${response.data.MESSAGE.idcard_name
                .split('.')
                .pop()
                .toLowerCase()}`,
            }
          );
          setBankBookImage({
            file: bankBook,
            previewURL: `${BASE_URL}${response.data.MESSAGE.bankbook_url}`,
          });
          const certificate = new File(
            [response.data.MESSAGE.evidence[0].evidence_image],
            [
              response.data.MESSAGE.evidence[0].evidence_name
                .split('/')
                .slice(
                  1,
                  response.data.MESSAGE.evidence[0].evidence_name.length
                )
                .join(''),
            ],
            {
              type: `image/${response.data.MESSAGE.idcard_name
                .split('.')
                .pop()
                .toLowerCase()}`,
            }
          );
          setCertificateImage([
            {
              file: certificate,
              fileSection: response.data.MESSAGE.evidence[0].evidence_kind,
            },
          ]);
          setBankAccount({
            bankAccountName: response.data.MESSAGE.bank,
            bankAccountNumber: response.data.MESSAGE.account_number,
            bankAccountHolder: response.data.MESSAGE.account_holder,
          });
          setMakerInfo({
            makerName: response.data.MESSAGE.makername,
            makerNickname: response.data.MESSAGE.makernickname,
            makerIntroduce: response.data.MESSAGE.introduce,
          });
          setTourType({
            type: response.data.MESSAGE.tour[0],
            peopleNum: response.data.MESSAGE.limit_people,
            loadsNum: response.data.MESSAGE.limit_load,
          });
          setSpecialtyList(response.data.MESSAGE.category);
          setLanguages(response.data.MESSAGE.language);
          setProductForm(response.data.MESSAGE.productform);
          setServiceAreaList(response.data.MESSAGE.region);
          setPageList(response.data.MESSAGE.sns);
        })
        .catch(error => {
          console.log(error.response);
          if (error.response) {
            alert('올바르지 않은 접근입니다!');
            history.push('/');
          }
        });
    }
  }, [setMakerInfo, setServiceAreaList, history, mode, location.mode]);

  const handelValueSelect = (e, state, setState) => {
    const { value } = e.target;
    if (state.includes(value) || !value) return;
    setState(state.concat(value));
  };

  const handleImageUploadClick = (e, setState) => {
    if (!e.target.value) {
      setState({ file: '', previewURL: '' });
      return;
    }
    const reader = new FileReader();
    const file = e.target.files[0];
    if (handleFileSizeCheck(file.size)) return;
    reader.onloadend = () => {
      setState({ file: file, previewURL: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const handelCertificateUploadClick = (e, fileSection) => {
    if (!e.target.value) {
      setCertificateImage(
        certificateImage.map(data =>
          data.fileSection === fileSection ? { ...data, file: '' } : data
        )
      );
      return;
    }
    const file = e.target.files[0];
    if (handleFileSizeCheck(file.size)) return;
    setCertificateImage(
      certificateImage.map(data =>
        data.fileSection === fileSection ? { ...data, file: file } : data
      )
    );
  };

  const handleFileSizeCheck = fileSize => {
    const maxSize = 10 * 1024 * 1024;
    if (fileSize > maxSize) {
      alert('10MB 이하 파일만 업로드 가능합니다.');
      return false;
    }
  };

  const handleRefUploadClick = (e, ref) => {
    e.preventDefault();
    ref.current.click();
  };

  const handleHomepageValueChange = e => {
    setInputValue(e.target.value);
  };

  const handleAddressAddClick = () => {
    if (!inputValue) return;
    if (pageList.includes(inputValue)) {
      alert('중복된 url이 있습니다!');
      return;
    }
    setPageList([...pageList, inputValue]);
    setInputValue('');
  };

  const handleSubmitBlock = e => {
    e.preventDefault();
  };

  const handleInputAddressClick = () => {
    if (inputValue) return;
    setInputValue('https://');
  };

  const handleDeleteClick = (e, state, setState) => {
    const selectedValue = e.target.firstChild.data;
    const result = state.filter(data => {
      return data !== selectedValue;
    });
    setState(result);
  };

  const handleRemoveHomepageClick = e => {
    const id = e.target.parentElement.id;
    const result = pageList.filter(page => {
      return page !== pageList[id];
    });
    setPageList(result);
  };

  const handleCertificateChange = e => {
    const { value } = e.target;
    for (let certificate of certificateImage) {
      if (certificate.fileSection === value || !value) {
        return;
      }
    }
    const result = { fileSection: value, file: '' };
    setCertificateImage([...certificateImage, result]);
  };

  const handleCertificateDelete = fileSection => {
    const result = certificateImage.filter(certificate => {
      return fileSection !== certificate.fileSection;
    });
    setCertificateImage(result);
  };

  const clickTourType = e => {
    const selectedTour = e.target.firstChild.data;
    if (selectedTour === tourType.type) return;
    selectedTour === '워킹투어' || selectedTour === '액티비티'
      ? setTourType({ type: selectedTour, peopleNum: 0, loadsNum: 0 })
      : setTourType({ ...tourType, type: selectedTour });
  };

  const handleProductFormClick = e => {
    const selectedForm = e.target.firstChild.data;
    if (selectedForm === productForm) return;
    setProductForm(selectedForm);
  };

  const handleTourNumChange = (e, target) => {
    const value = e.target.value;
    setTourType({ ...tourType, [target]: value });
  };

  const handleOpenModal = () => {
    setTourServiceAreaModal(!tourServiceAreaModal);
  };

  const handleBankSelect = e => {
    const selectedValue = e.target.value;
    setBankAccount({ ...bankAccount, bankAccountName: selectedValue });
  };

  const handleBankAccountChange = e => {
    const { name, value } = e.target;
    const numberValue = value.replace(/[^0-9]/g, '');
    name === 'bankAccountNumber'
      ? setBankAccount({ ...bankAccount, [name]: numberValue })
      : setBankAccount({ ...bankAccount, [name]: value });
  };

  const handleDeleteImageClick = (e, setState) => {
    e.stopPropagation();
    if (window.confirm('등록된 이미지를 삭제하시겠습니까?')) {
      setState({ file: '', previewURL: '' });
    }
  };

  const handleSubmitClick = () => {
    if (
      !makerInfo.makerName ||
      !makerInfo.makerNickname ||
      !makerInfo.makerIntroduce ||
      !makerProfileImage.file ||
      !idCardImage.file
    ) {
      alert('필수 값을 모두 입력해 주세요!');
      return;
    }
    if (
      bankAccount.bankAccountName ||
      bankAccount.bankAccountNumber ||
      bankAccount.bankAccountHolder
    ) {
      if (
        !bankAccount.bankAccountName ||
        !bankAccount.bankAccountNumber ||
        !bankAccount.bankAccountHolder
      )
        alert('계좌정보를 모두 입력해주세요!');
    }
    setCertificateImage(
      certificateImage.filter(certificate => {
        return certificate.file !== '';
      })
    );
    handleFileUpload(MAKER_APPLY_API);
  };

  const handleDraftClick = e => {
    e.preventDefault();
    handleFileUpload(MAKER_DRAFT_API);
  };

  const handleReviseClick = e => {
    e.preventDefault();
    handleFileUpload(MAKER_REVISE_API);
  };

  const handleFileUpload = API => {
    const formData = new FormData();
    formData.append('profile', makerProfileImage.file);
    formData.append('idcard', idCardImage.file);
    formData.append('bankbook', bankBookImage.file);
    formData.append(
      'evidence_image',
      certificateImage[0] ? certificateImage[0].file : ''
    );
    const data = {
      makernickname: makerInfo.makerNickname,
      makername: makerInfo.makerName,
      introduce: makerInfo.makerIntroduce,
      language: languages,
      sns_address: pageList,
      status: '심사 진행 중',
      bank: bankAccount.bankAccountName,
      account_number: bankAccount.bankAccountNumber,
      account_holder: bankAccount.bankAccountHolder,
      productform: productForm,
      evidence_kind: certificateImage[0] ? certificateImage[0].fileSection : '',
      region: serviceAreaList,
      category: specialtyList,
      limit_people: tourType.peopleNum,
      limit_load: tourType.loadsNum,
      tour: tourType.type,
      serviceAreaList: serviceAreaList,
    };
    formData.append('data', [JSON.stringify(data)]);
    axios
      .post(API, formData, {
        headers: {
          Authorization: localStorage.getItem('access_token'),
        },
      })
      .then(res => {
        if (res.data.MESSAGE === 'DRAFT_CREATED') {
          alert('임시저장을 완료했습니다.');
          history.push('/');
        } else if (res.data.MESSAGE === 'CREATED') {
          alert('지원서 제출을 완료했습니다.');
          history.push('/applydone');
        } else if (res.data.MESSAGE === 'SUCCESS') {
          alert('지원서 수정을 완료했습니다.');
          history.push('/applydone');
        } else {
          alert('에러가 발생했습니다!');
          history.push('/');
        }
      })
      .catch(error => {
        if (error.response.data.MESSAGE === 'ENTER_REQUIRED_VALUES') {
          alert('필수 값을 모두 입력해 주세요!');
        } else {
          alert('에러가 발생했습니다!');
          history.push('/');
        }
      });
  };

  return (
    <MakersApplyWrapper onSubmit={handleSubmitBlock}>
      <ApplyNav
        mode={mode}
        onSubmitClick={handleSubmitClick}
        onDraftClick={handleDraftClick}
        onReviseClick={handleReviseClick}
      />
      <Content>
        {NAME_NICKNAME_LIST.map(data => {
          return (
            <FlexSpaceBetween key={data.id}>
              <InputBoxDiv
                data={data}
                onChange={onChange}
                value={makerInfo[data.name]}
              />
            </FlexSpaceBetween>
          );
        })}
        <FlexSpaceBetween>
          <ProfileImageUpload
            makerProfileImage={makerProfileImage}
            ref={profileImageRef}
            onClick={e => handleImageUploadClick(e, setMakerProfileImage)}
            imageUploadClick={e => handleRefUploadClick(e, profileImageRef)}
            onDeleteImageClick={e =>
              handleDeleteImageClick(e, setMakerProfileImage)
            }
          />
        </FlexSpaceBetween>
        <FlexSpaceBetween>
          <Introduce
            onChange={onChange}
            makerIntroduceLength={makerInfo.makerIntroduce.length}
            value={makerInfo.makerIntroduce}
          />
        </FlexSpaceBetween>
        <FlexSpaceBetween>
          <Certificate
            certificateImage={certificateImage}
            onCertificateUploadClick={handelCertificateUploadClick}
            onCertificateChange={handleCertificateChange}
            onCertificateDelete={handleCertificateDelete}
          />
        </FlexSpaceBetween>
        <FlexSpaceBetween>
          <AddHomepage
            inputValue={inputValue}
            onHomepageValueChange={handleHomepageValueChange}
            onInputAddressClick={handleInputAddressClick}
            onAddressAddClick={handleAddressAddClick}
            pageList={pageList}
            onRemoveHomepageClick={handleRemoveHomepageClick}
          />
        </FlexSpaceBetween>
        <FlexSpaceBetween>
          <AvailableLanguages
            onSelect={e => handelValueSelect(e, languages, setLanguages)}
            languages={languages}
            removeLanguage={handleDeleteClick}
            setLanguages={setLanguages}
          />
        </FlexSpaceBetween>
        <FlexSpaceBetween>
          <ImageUpload
            ref={idCardRef}
            image={idCardImage}
            onChange={e => handleImageUploadClick(e, setIdCardImage)}
            onRefUploadClick={e => handleRefUploadClick(e, idCardRef)}
            onDeleteImageClick={e => handleDeleteImageClick(e, setIdCardImage)}
            data={ID_CARD_DATA}
          />
        </FlexSpaceBetween>
        <FlexSpaceBetween>
          <ImageUpload
            ref={bankBookRef}
            image={bankBookImage}
            onChange={e => handleImageUploadClick(e, setBankBookImage)}
            onRefUploadClick={e => handleRefUploadClick(e, bankBookRef)}
            onDeleteImageClick={e =>
              handleDeleteImageClick(e, setBankBookImage)
            }
            data={BANK_BOOK_DATA}
          />
        </FlexSpaceBetween>
        <FlexSpaceBetween>
          <ListAvailableTours
            tourType={tourType}
            clickTourType={clickTourType}
            onTourNumChange={handleTourNumChange}
          />
        </FlexSpaceBetween>
        <FlexSpaceBetween>
          <TourSpecialty
            specialtyList={specialtyList}
            setSpecialtyList={setSpecialtyList}
            selectValue={e =>
              handelValueSelect(e, specialtyList, setSpecialtyList)
            }
            removeLanguage={handleDeleteClick}
          />
        </FlexSpaceBetween>
        <FlexSpaceBetween>
          <TourServiceArea
            handleOpenModal={handleOpenModal}
            tourServiceAreaModal={tourServiceAreaModal}
          />
        </FlexSpaceBetween>
        <FlexSpaceBetween>
          <ProductForm
            productForm={productForm}
            onProductFormClick={handleProductFormClick}
          />
        </FlexSpaceBetween>
        <FlexSpaceBetween>
          <BankAccountInformation
            onBankSelect={handleBankSelect}
            onBankAccountChange={handleBankAccountChange}
            bankAccount={bankAccount}
          />
        </FlexSpaceBetween>
      </Content>
    </MakersApplyWrapper>
  );
};

export default MakersApply;

const MakersApplyWrapper = styled.form`
  display: flex;
  justify-content: center;
  padding-top: 6rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 1024px;
`;

const FlexSpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 4rem 0rem;
`;
