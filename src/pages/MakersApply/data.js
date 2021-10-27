export const LANGUAGE_LIST = [
  { id: 1, language: '영어' },
  { id: 2, language: '일본어' },
  { id: 3, language: '중국어' },
  { id: 4, language: '기타' },
];

export const CERTIFICATE_LIST = [
  { id: 1, language: '운전면허증' },
  { id: 2, language: '한국관광통역관리사' },
  { id: 3, language: '사업자 등록증' },
  { id: 4, language: '기타' },
];

export const NAME_NICKNAME_LIST = [
  {
    id: 1,
    title: '메이커 이름',
    placeholder: '메이커 이름을 입력해주세요.',
    name: 'makerName',
    type: 'text',
  },
  {
    id: 2,
    title: '메이커 닉네임',
    placeholder: '메이커 닉네임 입력해주세요.',
    name: 'makerNickname',
    type: 'text',
  },
];

export const ID_CARD_DATA = {
  title: '신분증',
  desc: '메이커 본인 확인을 위해 대표 구성원 1인의 신분증 사본을 등록해주세요.',
  required: true,
};

export const BANK_BOOK_DATA = {
  title: '통장사본',
  desc: '가이드 투어 이후 정산받을 통장의 사본을 등록해주세요.',
  required: false,
};

export const TOUR_TYPE_LIST = [
  { id: 1, content: '차량투어' },
  { id: 2, content: '워킹투어' },
  { id: 3, content: '액티비티' },
];

export const MAXIMUM_NUMBER_PEOPLE_BOARD = [
  { id: 1, number: 5 },
  { id: 2, number: 9 },
  { id: 3, number: 12 },
  { id: 4, number: 15 },
  { id: 5, number: '기타' },
];

export const MAXIMUM_NUMBER_LOADS = [
  { id: 1, number: 5 },
  { id: 2, number: 9 },
  { id: 3, number: 12 },
  { id: 4, number: 15 },
  { id: 5, number: '기타' },
];

export const TOUR_SPECIALTY_LIST = [
  { id: 1, content: 'Adventure' },
  { id: 2, content: 'Culture' },
  { id: 3, content: 'Nightlife' },
  { id: 4, content: 'K-pop' },
  { id: 5, content: 'Festival' },
  { id: 6, content: 'Experience' },
  { id: 7, content: 'History' },
  { id: 8, content: 'DIY' },
  { id: 9, content: '기타' },
];

export const SERVICE_AREA_LIST = [
  {
    id: 1,
    serviceArea: '서울',
    areaList: [
      { id: 1, area: '서울 전체' },
      { id: 2, area: '인천' },
      { id: 3, area: '강서' },
      { id: 4, area: '강북' },
      { id: 5, area: '강남' },
      { id: 6, area: '강동' },
    ],
  },
  {
    id: 2,
    serviceArea: '경기도',
    areaList: [
      { id: 1, area: '경기도 전체' },
      { id: 2, area: '가평' },
      { id: 3, area: '광명' },
      { id: 4, area: '수원' },
      { id: 5, area: '파주' },
      { id: 6, area: '포천' },
    ],
  },
  {
    id: 3,
    serviceArea: '경상도',
    areaList: [
      { id: 1, area: '경상도 전체' },
      { id: 2, area: '부산/서면' },
      { id: 3, area: '대구' },
      { id: 4, area: '울산' },
      { id: 5, area: '경주' },
      { id: 6, area: '포항' },
      { id: 7, area: '거제' },
      { id: 8, area: '통영' },
    ],
  },
  {
    id: 4,
    serviceArea: '강원도',
    areaList: [
      { id: 1, area: '강원도 전체' },
      { id: 2, area: '강릉' },
      { id: 3, area: '삼척' },
      { id: 4, area: '속초/양양' },
      { id: 5, area: '인제' },
      { id: 6, area: '평창' },
      { id: 7, area: '원주' },
      { id: 8, area: '태백' },
    ],
  },
  {
    id: 5,
    serviceArea: '전라도',
    areaList: [
      { id: 1, area: '전라도 전체' },
      { id: 2, area: '나주' },
      { id: 3, area: '담양' },
      { id: 4, area: '목포' },
      { id: 5, area: '보성' },
      { id: 6, area: '여수' },
      { id: 7, area: '완도' },
    ],
  },
  {
    id: 6,
    serviceArea: '충청도',
    areaList: [
      { id: 1, area: '충청도 전체' },
      { id: 2, area: '단양' },
      { id: 3, area: '충주' },
      { id: 4, area: '당진' },
      { id: 5, area: '보령' },
      { id: 6, area: '천안' },
      { id: 7, area: '태안' },
    ],
  },
  {
    id: 7,
    serviceArea: '제주도',
    areaList: [
      { id: 1, area: '제주도 전체' },
      { id: 2, area: '제주시' },
      { id: 3, area: '서귀포시' },
      { id: 4, area: '중문' },
      { id: 5, area: '우도' },
    ],
  },
];

export const PRODUCT_FORM_LIST = [
  { id: 1, form: '크리에이팅 상품' },
  { id: 2, form: '맞춤형 상품' },
  { id: 3, form: '기획 상품 가이딩' },
];

export const BANK_LIST = [
  { id: 1, name: 'NH농협' },
  { id: 2, name: 'KB국민' },
  { id: 3, name: '신한' },
  { id: 4, name: '우리' },
  { id: 5, name: '하나' },
  { id: 6, name: 'IBK기업' },
];
