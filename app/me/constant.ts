import { Experience } from './components/experience';

export const WORK_EXPERIENCES: Experience[] = [
  {
    title: '(주)이제이엠컴퍼니',
    description: ['Frontend Lab.', '2024.11 - 현재'],
  },
  {
    title: 'Finddy Inc.',
    description: ['Tech lab. / 팀원', '2022.09 - 2024.10'],
    detail: [
      {
        title: '어카운즈 어드민 시스템 개발',
        description: [
          '간편송금 앱 어카운즈의 어드민 서비스 웹 프론트엔드 개발 담당',
          '프로젝트 구조 설계, AWS 배포 및 CodePipeline을 통한 CI/CD 설정 수행',
          '유저 관리, 금융거래 내역 조회, 공지사항 관리 등 주요 기능 개발을 통해 서비스 운영 효율성 및 사용자 경험 개선에 기여',
          '최신 기술 도입과 유지보수성 향상을 위해 React Router v6를 Tanstack Router로 리팩토링하여 타입 안전성과 개발 생산성을 높임',
          '사용기술: React, TypeScript, MUI, React Query, Tanstack Router, Context API',
        ],
      },
      {
        title: '어카운즈 홈페이지 개발',
        description: [
          '랜딩 페이지와 공지사항, FAQ, 이용약관 등 웹 프론트엔드 개발 담당',
          '사용자 인터랙션을 강화하기 위해 GSAP을 활용하여 애니메이션 구현하고 사용자 경험 향상',
          '사용기술: React, TypeScript, React Query, GSAP',
        ],
      },
    ],
  },
  {
    title: '잇다헬스케어',
    description: ['개발팀 / 팀원', '2021.12 - 2022.08'],
    detail: [
      {
        title: '비대면 협진 서비스 개발',
        description: [
          '원격 진료 플랫폼 개발에 참여',
          '코드 리뷰와 문서화 작업에 적극 참여하여 팀 내 지식 공유 및 개발 프로세스 개선에 기여하며, 이슈 트래킹과 프로젝트 관리를 위해 Azure Boards 도입',
          '사용기술: React, TypeScript, MUI, Context API',
        ],
      },
    ],
  },
  {
    title: '엘리스',
    description: ['프론트엔드 코치', '2021.09 - 2021.10'],
    detail: [
      {
        title: '코딩 부트캠프 프론트엔드 강의 제작',
        description: [
          'HTML, CSS, JavaScript, React, Redux에 대한 실습 강의를 진행',
          '교육생의 이해를 돕기 위해 주제별 학습 자료를 제작하고 공유해 학습 효과를 극대화',
          '코치 평가에서 직접 제작한 학습 자료와 강의 리딩 방식에 대해 높은 평가를 받았으며, 최고 평점의 코치로 선정됨',
        ],
      },
    ],
  },
];

export const EDUCATIONAL_EXPERIENCES: Experience[] = [
  {
    title: '엘리스',
    description: ['2020.12 - 2021.06'],
    detail: [
      {
        title: 'AI 트랙 1기 수료',
        description: [
          '6개월 동안 프론트, 백엔드, 머신러닝을 학습해 신입 개발자, 데이터분석가, 테크니컬 기획자가 되는 교육 과정',
          '기간 중 총 세개의 프로젝트를 진행함으로써 React와 JavaScript에 대해 학습',
        ],
      },
    ],
  },
  {
    title: '중앙대학교',
    description: ['2015.03 - 2020.02'],
    detail: [{ title: '지식경영학부 졸업' }],
  },
];
