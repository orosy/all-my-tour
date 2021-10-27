const MYPAGE_LIST = [
  {
    id: 1,
    name: '알림',
    icon: 'fas fa-chevron-right',
  },
  {
    id: 2,
    name: '메세지',
    icon: 'fas fa-chevron-right',
  },
  {
    id: 3,
    name: '투어 관리',
    icon: 'fas fa-chevron-right',
  },
  {
    id: 4,
    name: '투어 등록하기',
    icon: 'fas fa-chevron-right',
  },
  {
    id: 5,
    name: '정산 관리',
    icon: 'fas fa-chevron-right',
  },
  {
    id: 6,
    name: '설정',
    icon: 'fas fa-chevron-right',
  },
  {
    id: 7,
    name: '로그아웃',
    icon: 'fas fa-chevron-right',
    signout: () => {
      localStorage.removeItem('access_token');
    },
  },
];

export default MYPAGE_LIST;
