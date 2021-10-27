export const BASE_URL = 'http://';

// 로그인, 회원가입
export const SIGN_IN_API = `${BASE_URL}/users/login`;
export const SIGN_UP_API = `${BASE_URL}/users/signup`;

// 아이디 중복확인
export const EMAIL_DUPE_CHECK = `${BASE_URL}/users/signup/email/duplicate`;

// 휴대폰 인증
export const PHONE_MATCH_CHECK = `${BASE_URL}/users/signup/phone/match`;

// 비밀번호 찾기
export const PW_EMAIL_API = `${BASE_URL}/users/sendemail`;
export const PW_AUTH_API = `${BASE_URL}/users/auth`;

// 비밀번호 재설정
export const PW_NEWPW_API = `${BASE_URL}/users/newpw`;

// 메이커스
export const MAKER_APPLY_API = `${BASE_URL}/makers/apply`;
export const MAKER_DRAFT_API = `${BASE_URL}/makers/draft`;
export const MAKER_REVISE_API = `${BASE_URL}/makers/revise`;

// 마이페이지
export const MYPAGE_USER_API = `${BASE_URL}/users`;
