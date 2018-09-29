interface IPeople {
    id: string;
    name: string;
    role: string;
    role2?: string;
    subject: string;
    email: string;
    url: string;
    thought: string;
    videoUrl: string;
    videoOrder: string;
    profileImage: any;
    inActiveProfileImage: any;
}

// tslint:disable:object-literal-sort-keys
const peopleData: IPeople[] = [
    {
        "id": "P1",
        "name": "권솔이",
        "role": "UXUI",
        "subject": "우리가족 숙면을 위한 베개추천 서비스,헬로우필로우 ",
        "email": "iam.sollee@gmail.com",
        "url": "",
        "thought": "평생 대학생이고 싶었는데..졸업이네요! 수고하셨어요~",
        "videoUrl": "https://youtu.be/7tVASM9VTkE",
        "videoOrder": "상단",
        "profileImage": "./image/people/p1.jpg",
        "inActiveProfileImage": "./image/people/p1_.jpg",
        "role2": ""
    },
    {
        "id": "P2",
        "name": "권임선",
        "role": "브랜드",
        "subject": "나만의 유니크함을 찾아주는커스터마이징색조화장 브랜드",
        "email": "iskwon92@naver.com",
        "url": "https://www.behance.net/iskwon92f7dd",
        "thought": "벌써 졸업하네용.. 다들 수고많으셨구 졸업축하드려요(~˘▾˘)~",
        "videoUrl": "",
        "videoOrder": "",
        "profileImage": "./image/people/p2.jpg",
        "inActiveProfileImage": "./image/people/p2_.jpg",
        "role2": "브랜딩"
    },
    {
        "id": "P3",
        "name": "중도포기",
        "role": "",
        "subject": "",
        "email": "",
        "url": "",
        "thought": "",
        "videoUrl": "",
        "videoOrder": "",
        "profileImage": "./image/people/p3.jpg",
        "inActiveProfileImage": "./image/people/p3_.jpg",
        "role2": ""
    },
    {
        "id": "P4",
        "name": "김규리",
        "role": "UXUI",
        "subject": "룸메이트 매칭어플 '서울메이트'",
        "email": "helloimkyuri@gmail.com",
        "url": "",
        "thought": "적게 일하고 많이 버세요~♣ ♧ ",
        "videoUrl": "",
        "videoOrder": "",
        "profileImage": "./image/people/p4.jpg",
        "inActiveProfileImage": "./image/people/p4_.jpg",
        "role2": ""
    },
    {
        "id": "P5",
        "name": "김다솜",
        "role": "캐릭터",
        "subject": "엉망진창 프렌즈",
        "email": "cn7185@naver.com",
        "url": "",
        "thought": "소감 정하는게 작품주제 선정보다도 어렵네요 무사히 졸업하게되어서 다행입니다 ٩(๑❛ᴗ❛๑)۶♡",
        "videoUrl": "",
        "videoOrder": "",
        "profileImage": "./image/people/p5.jpg",
        "inActiveProfileImage": "./image/people/p5_.jpg",
        "role2": "도록"
    },
    {
        "id": "P6",
        "name": "김보민",
        "role": "브랜드",
        "subject": "내몸의 자유를 위한 한걸음 피임약 'tipp'",
        "email": "bomanbom@naver.com",
        "url": "https://www.behance.net/kk105383e3",
        "thought": "유일한 자랑인 튼튼한 장을 졸전에 두고갑니다",
        "videoUrl": "",
        "videoOrder": "",
        "profileImage": "./image/people/p6.jpg",
        "inActiveProfileImage": "./image/people/p6_.jpg",
        "role2": "웹/홍보"
    },
    {
        "id": "P7",
        "name": "김솔지",
        "role": "브랜드",
        "subject": "음성으로 참여하는 추리소설 제작 게임, Make A Mystery",
        "email": "jamjal777@gmail.com ",
        "url": "",
        "thought": "미제출",
        "videoUrl": "",
        "videoOrder": "",
        "profileImage": "./image/people/p7.jpg",
        "inActiveProfileImage": "./image/people/p7_.jpg",
        "role2": ""
    },
    {
        "id": "P8",
        "name": "김채은",
        "role": "캐릭터",
        "subject": "게임 캐릭터디자인",
        "email": "kimce96@gmail.com",
        "url": "",
        "thought": "미제출",
        "videoUrl": "",
        "videoOrder": "",
        "profileImage": "./image/people/p8.jpg",
        "inActiveProfileImage": "./image/people/p8_.jpg",
        "role2": ""
    },
    {
        "id": "P9",
        "name": "김해인",
        "role": "일러스트",
        "subject": "제작이 어려운영화",
        "email": "미제출",
        "url": "",
        "thought": "미제출",
        "videoUrl": "",
        "videoOrder": "",
        "profileImage": "./image/people/p9.jpg",
        "inActiveProfileImage": "./image/people/p9_.jpg",
        "role2": ""
    },
    {
        "id": "P10",
        "name": "김현지",
        "role": "패키지",
        "subject": "펄스널 퍼퓸 커스터마이징 브랜드패키지",
        "email": "hgim9508@gmail.com",
        "url": "",
        "thought": "1학년이 엊그제같은데 벌써 졸업이네요ㅠ 다들 수고하셨어요!!:)",
        "videoUrl": "",
        "videoOrder": "",
        "profileImage": "./image/people/p10.jpg",
        "inActiveProfileImage": "./image/people/p10_.jpg",
        "role2": ""
    },
    {
        "id": "P11",
        "name": "탈락",
        "role": "패키지",
        "subject": "복약순응도를높이는 약 패키지",
        "email": "gpdms9039@naver.com",
        "url": "",
        "thought": "미제출",
        "videoUrl": "",
        "videoOrder": "",
        "profileImage": "./image/people/p11.jpg",
        "inActiveProfileImage": "./image/people/p11_.jpg",
        "role2": ""
    },
    {
        "id": "P12",
        "name": "탈락",
        "role": "브랜드",
        "subject": "쿠킹박스",
        "email": "미제출",
        "url": "",
        "thought": "미제출",
        "videoUrl": "",
        "videoOrder": "",
        "profileImage": "./image/people/p12.jpg",
        "inActiveProfileImage": "./image/people/p12_.jpg",
        "role2": ""
    },
    {
        "id": "P13",
        "name": "김홍욱",
        "role": "패키지",
        "subject": "시선을 끄는 물 패키지",
        "email": "picassso77@daum.net",
        "url": "",
        "thought": "안돼 가지마",
        "videoUrl": "",
        "videoOrder": "",
        "profileImage": "./image/people/p13.jpg",
        "inActiveProfileImage": "./image/people/p13_.jpg",
        "role2": ""
    },
    {
        "id": "P14",
        "name": "김희정",
        "role": "브랜드",
        "subject": "함께 지키면 행복한 펫티켓 '지켜줄개'",
        "email": "khj0340@naver.com",
        "url": "",
        "thought": "모두 수고하셨어요^~^",
        "videoUrl": "",
        "videoOrder": "",
        "profileImage": "./image/people/p14.jpg",
        "inActiveProfileImage": "./image/people/p14_.jpg",
        "role2": ""
    },
    {
        "id": "P15",
        "name": "나슬기",
        "role": "캐릭터",
        "subject": "폐비닐 환경캠페인",
        "email": "war200@daum.net",
        "url": "",
        "thought": "ଘ(੭*ˊᵕˋ)੭* ੈ✩‧₊˚ 졸업길 축복을",
        "videoUrl": "",
        "videoOrder": "",
        "profileImage": "./image/people/p15.jpg",
        "inActiveProfileImage": "./image/people/p15_.jpg",
        "role2": ""
    },
    {
        "id": "P16",
        "name": "남정연",
        "role": "UXUI",
        "subject": "여성 청소년의 성경험이 불안하지 않게, It's OKAY",
        "email": "njy951106@naver.com",
        "url": "",
        "thought": "미제출",
        "videoUrl": "",
        "videoOrder": "",
        "profileImage": "./image/people/p16.jpg",
        "inActiveProfileImage": "./image/people/p16_.jpg",
        "role2": ""
    },
    {
        "id": "P17",
        "name": "남환희",
        "role": "일러스트",
        "subject": "HORN 게임컨셉 일러스트",
        "email": "whan915@naver.com",
        "url": "",
        "thought": "끝, 졸업",
        "videoUrl": "",
        "videoOrder": "",
        "profileImage": "./image/people/p17.jpg",
        "inActiveProfileImage": "./image/people/p17_.jpg",
        "role2": "위원장"
    },
    {
        "id": "P18",
        "name": "문예림",
        "role": "브랜드",
        "subject": "매일 파티가 열리는 게스트하우스 'Plarty Guesthouse'",
        "email": "0823nina@hanmail.net",
        "url": "",
        "thought": "이제 내 인생에 방학이 없다니.. 다들 졸업 축하해요 :D!",
        "videoUrl": "",
        "videoOrder": "",
        "profileImage": "./image/people/p18.jpg",
        "inActiveProfileImage": "./image/people/p18_.jpg",
        "role2": ""
    },
    {
        "id": "P19",
        "name": "중도포기",
        "role": "",
        "subject": "",
        "email": "",
        "url": "",
        "thought": "",
        "videoUrl": "",
        "videoOrder": "",
        "profileImage": "./image/people/p19.jpg",
        "inActiveProfileImage": "./image/people/p19_.jpg",
        "role2": ""
    },
    {
        "id": "P20",
        "name": "탈락",
        "role": "브랜드",
        "subject": "아동성교육의 시작, 청결 'arari'",
        "email": "acbir@naver.com",
        "url": "",
        "thought": "미제출",
        "videoUrl": "",
        "videoOrder": "",
        "profileImage": "./image/people/p20.jpg",
        "inActiveProfileImage": "./image/people/p20_.jpg",
        "role2": ""
    },
    {
        "id": "P21",
        "name": "박민정",
        "role": "브랜드",
        "subject": "맞춤 힐링 플라워샵 ‘힐링블라썸’",
        "email": "thecataracs1993@gmail.com",
        "url": "",
        "thought": "졸업 진짜 하는건가여???ㅎㅅㅎ",
        "videoUrl": "",
        "videoOrder": "",
        "profileImage": "./image/people/p21.jpg",
        "inActiveProfileImage": "./image/people/p21_.jpg",
        "role2": ""
    },
    {
        "id": "P22",
        "name": "박연수",
        "role": "패키지",
        "subject": "아프리카 아이들을 위한 비누패키지",
        "email": "rhadustn@naver.com",
        "url": "",
        "thought": "벌써 졸업이라니 소오름~! 전 아직 베이빈데 응애응애 졸업시켜줘여!",
        "videoUrl": "",
        "videoOrder": "",
        "profileImage": "./image/people/p22.jpg",
        "inActiveProfileImage": "./image/people/p22_.jpg",
        "role2": ""
    },
    {
        "id": "P23",
        "name": "탈락",
        "role": "패키지",
        "subject": "못해도 돼 '네일가든'",
        "email": "qqkffl5@naver.com",
        "url": "",
        "thought": "대학 졸업하려다 인생도 졸업하게 생겼어요.",
        "videoUrl": "",
        "videoOrder": "",
        "profileImage": "./image/people/p23.jpg",
        "inActiveProfileImage": "./image/people/p23_.jpg",
        "role2": ""
    },
    {
        "id": "P24",
        "name": "송지현",
        "role": "패키지",
        "subject": "비건 밀크 패키지",
        "email": "미제출",
        "url": "",
        "thought": "미제출",
        "videoUrl": "",
        "videoOrder": "",
        "profileImage": "./image/people/p24.jpg",
        "inActiveProfileImage": "./image/people/p24_.jpg",
        "role2": ""
    },
    {
        "id": "P25",
        "name": "신소영",
        "role": "브랜드",
        "subject": "고양이 사료브랜드 '냥냠'",
        "email": "ssy_05@naver.com",
        "url": "",
        "thought": "냥냠은 냥냠",
        "videoUrl": "",
        "videoOrder": "",
        "profileImage": "./image/people/p25.jpg",
        "inActiveProfileImage": "./image/people/p25_.jpg",
        "role2": ""
    },
    {
        "id": "P26",
        "name": "안지원",
        "role": "캐릭터",
        "subject": "캐릭터를 활용한 아동용 떡만들기 체험키트",
        "email": "t_c_e@naver.com",
        "url": "",
        "thought": "끝났다!",
        "videoUrl": "",
        "videoOrder": "",
        "profileImage": "./image/people/p26.jpg",
        "inActiveProfileImage": "./image/people/p26_.jpg",
        "role2": ""
    },
    {
        "id": "P27",
        "name": "안호정",
        "role": "UXUI",
        "subject": "브로드웨이 뮤지컬 티켓팅 App '티키티'",
        "email": "anho0713@naver.com",
        "url": "",
        "thought": "전 아직도 제가 뭘 해먹고 살지 모르겠어요- 다들 졸업축하합니다 ^^7",
        "videoUrl": "",
        "videoOrder": "",
        "profileImage": "./image/people/p27.jpg",
        "inActiveProfileImage": "./image/people/p27_.jpg",
        "role2": ""
    },
    {
        "id": "P28",
        "name": "이가현",
        "role": "브랜드",
        "subject": "한국 부티크호텔 '보라나'",
        "email": "merryoyan@gmail.com",
        "url": "",
        "thought": "👈귀여움으로 먹고 사시면 됩니당 (❀◕ω◕)♡",
        "videoUrl": "",
        "videoOrder": "",
        "profileImage": "./image/people/p28.jpg",
        "inActiveProfileImage": "./image/people/p28_.jpg",
        "role2": ""
    },
    {
        "id": "P29",
        "name": "이민정",
        "role": "UXUI",
        "subject": "디톡스주스 커스터마이징 서비스, PICK TOK",
        "email": "utr219@naver.com",
        "url": "",
        "thought": "다들 수고 많으셨습니당! 졸업축하드려욧!(*•̀ᴗ•́*)و ̑̑",
        "videoUrl": "https://youtu.be/KvhkOwL13ks",
        "videoOrder": "",
        "profileImage": "./image/people/p29.jpg",
        "inActiveProfileImage": "./image/people/p29_.jpg",
        "role2": ""
    },
    {
        "id": "P30",
        "name": "이서진",
        "role": "브랜드",
        "subject": "초심자를 위한생리컵",
        "email": "marianne_01@naver.com",
        "url": "",
        "thought": "졸업 축하드려요 수고하셨습니다.",
        "videoUrl": "",
        "videoOrder": "",
        "profileImage": "./image/people/p30.jpg",
        "inActiveProfileImage": "./image/people/p30_.jpg",
        "role2": ""
    },
    {
        "id": "P31",
        "name": "이슬기",
        "role": "UXUI",
        "subject": "인디뮤지션들의 모바일 라이브 앱",
        "email": "미제출",
        "url": "",
        "thought": "미제출",
        "videoUrl": "",
        "videoOrder": "",
        "profileImage": "./image/people/p31.jpg",
        "inActiveProfileImage": "./image/people/p31_.jpg",
        "role2": ""
    },
    {
        "id": "P32",
        "name": "중도포기",
        "role": "",
        "subject": "",
        "email": "",
        "url": "",
        "thought": "",
        "videoUrl": "",
        "videoOrder": "",
        "profileImage": "./image/people/p32.jpg",
        "inActiveProfileImage": "./image/people/p32_.jpg",
        "role2": ""
    },
    {
        "id": "P33",
        "name": "이연희",
        "role": "브랜드",
        "subject": "갱년기 엄마를 위한 딸의 선택",
        "email": "o.o2yeoni@gmail.com",
        "url": "",
        "thought": "(경) 졸 업 축 하 축 하 ㄱ-y~ (축)",
        "videoUrl": "",
        "videoOrder": "",
        "profileImage": "./image/people/p33.jpg",
        "inActiveProfileImage": "./image/people/p33_.jpg",
        "role2": ""
    },
    {
        "id": "P34",
        "name": "이예빈",
        "role": "브랜드",
        "subject": "꽃차 브랜딩",
        "email": "dodidoda@naver.com",
        "url": "",
        "thought": "미제출",
        "videoUrl": "",
        "videoOrder": "",
        "profileImage": "./image/people/p34.jpg",
        "inActiveProfileImage": "./image/people/p34_.jpg",
        "role2": ""
    },
    {
        "id": "P35",
        "name": "이원재",
        "role": "UXUI",
        "subject": "반려견과의 커뮤니케이션 서비스, pingpong",
        "email": "onetwojae@naver.com",
        "url": "",
        "thought": "미제출",
        "videoUrl": "https://youtu.be/NkyG99J2_Xs",
        "videoOrder": "1번과 2번 사이",
        "profileImage": "./image/people/p35.jpg",
        "inActiveProfileImage": "./image/people/p35_.jpg",
        "role2": ""
    },
    {
        "id": "P36",
        "name": "이윤이",
        "role": "UXUI",
        "subject": "더 똑똑한 처방전, CURE",
        "email": "helloyunique@gmail.com",
        "url": "",
        "thought": "모두 돈길만 걸으시길ㄱ-y~",
        "videoUrl": "수요일까지 작업하기로 웹 담당과 협의 완료",
        "videoOrder": "",
        "profileImage": "./image/people/p36.jpg",
        "inActiveProfileImage": "./image/people/p36_.jpg",
        "role2": ""
    },
    {
        "id": "P37",
        "name": "이지원",
        "role": "브랜드",
        "subject": "허브에 물들다",
        "email": "loveis1won@naver.com",
        "url": "",
        "thought": "미제출",
        "videoUrl": "",
        "videoOrder": "",
        "profileImage": "./image/people/p37.jpg",
        "inActiveProfileImage": "./image/people/p37_.jpg",
        "role2": ""
    },
    {
        "id": "P38",
        "name": "이현희",
        "role": "브랜드",
        "subject": "프로농구 사회공헌 브랜드",
        "email": "hheelee2@gmail.com",
        "url": "",
        "thought": "모어 카페인",
        "videoUrl": "",
        "videoOrder": "",
        "profileImage": "./image/people/p38.jpg",
        "inActiveProfileImage": "./image/people/p38_.jpg",
        "role2": ""
    },
    {
        "id": "P39",
        "name": "이혜빈",
        "role": "UXUI",
        "subject": "현관 속, 가족의 커뮤니케이션을 위한 서비스",
        "email": "heabi1210@naver.com",
        "url": "",
        "thought": "미제출",
        "videoUrl": "",
        "videoOrder": "",
        "profileImage": "./image/people/p39.jpg",
        "inActiveProfileImage": "./image/people/p39_.jpg",
        "role2": ""
    },
    {
        "id": "P40",
        "name": "이혜지",
        "role": "일러스트",
        "subject": "지친 사람들을위한 힐링게임Wanderlog",
        "email": "heyjilee@naver.com",
        "url": "",
        "thought": "다들 고생 많으셨어요! 나는 아직 학생이고싶은데...\n적게 일하고 많이 벌게 해주세요 :)",
        "videoUrl": "https://youtu.be/IBryomDdxjo",
        "videoOrder": "1-2사이",
        "profileImage": "./image/people/p40.jpg",
        "inActiveProfileImage": "./image/people/p40_.jpg",
        "role2": "부위원장"
    },
    {
        "id": "P41",
        "name": "전채린",
        "role": "패키지",
        "subject": "신세계를 탐험하는 모두에게, 모두컵",
        "email": "zitten440@naver.com ",
        "url": "",
        "thought": "모두 행복하세요^^",
        "videoUrl": "",
        "videoOrder": "",
        "profileImage": "./image/people/p41.jpg",
        "inActiveProfileImage": "./image/people/p41_.jpg",
        "role2": ""
    },
    {
        "id": "P42",
        "name": "탈락",
        "role": "브랜드",
        "subject": "쌈장",
        "email": "미제출",
        "url": "",
        "thought": "미제출",
        "videoUrl": "",
        "videoOrder": "",
        "profileImage": "./image/people/p42.jpg",
        "inActiveProfileImage": "./image/people/p42_.jpg",
        "role2": ""
    },
    {
        "id": "P43",
        "name": "정소원",
        "role": "UXUI",
        "subject": "간편한 외화교환 서비스 COINT",
        "email": "wishu707@naver.com",
        "url": "",
        "thought": "모두 수고하셨습니당!",
        "videoUrl": "",
        "videoOrder": "",
        "profileImage": "./image/people/p43.jpg",
        "inActiveProfileImage": "./image/people/p43_.jpg",
        "role2": ""
    },
    {
        "id": "P44",
        "name": "정윤성",
        "role": "브랜드",
        "subject": "3일안에 끝내는 한국사, 3일국사",
        "email": "buanr123@naver.com",
        "url": "",
        "thought": "미제출",
        "videoUrl": "",
        "videoOrder": "",
        "profileImage": "./image/people/p44.jpg",
        "inActiveProfileImage": "./image/people/p44_.jpg",
        "role2": ""
    },
    {
        "id": "P45",
        "name": "정은아",
        "role": "캐릭터",
        "subject": "재난안전본부캐릭터 디자인",
        "email": "penguin9621@naver.com",
        "url": "",
        "thought": "졸업시켜주세요...",
        "videoUrl": "",
        "videoOrder": "",
        "profileImage": "./image/people/p45.jpg",
        "inActiveProfileImage": "./image/people/p45_.jpg",
        "role2": ""
    },
    {
        "id": "P46",
        "name": "최규배",
        "role": "일러스트",
        "subject": "Lo-Fi Music Channel, 900P",
        "email": "chlrbqo@naver.com",
        "url": "",
        "thought": "허리 한번씩 폅시다",
        "videoUrl": "1-2 사이\nhttps://youtu.be/OKOlc5f1HQ0 \n2-3 사이\nhttps://youtu.be/Wb0OfQof8W0 \n3-4 사이\nhttps://youtu.be/XKHUvgTxLio ",
        "videoOrder": "",
        "profileImage": "./image/people/p46.jpg",
        "inActiveProfileImage": "./image/people/p46_.jpg",
        "role2": ""
    },
    {
        "id": "P47",
        "name": "최유현",
        "role": "캐릭터",
        "subject": "밤샘의 부정적 인식 개선을 위한 캐릭터 브랜드, STARRIES",
        "email": "choichoi.hi@gmail.com",
        "url": "",
        "thought": "미제출",
        "videoUrl": "",
        "videoOrder": "",
        "profileImage": "./image/people/p47.jpg",
        "inActiveProfileImage": "./image/people/p47_.jpg",
        "role2": ""
    },
    {
        "id": "P48",
        "name": "한효진",
        "role": "패키지",
        "subject": "시리얼패키지",
        "email": "hyojin950509@daum.net",
        "url": "",
        "thought": "미제출",
        "videoUrl": "",
        "videoOrder": "",
        "profileImage": "./image/people/p48.jpg",
        "inActiveProfileImage": "./image/people/p48_.jpg",
        "role2": "총무"
    },
    {
        "id": "P49",
        "name": "중도포기",
        "role": "",
        "subject": "",
        "email": "",
        "url": "",
        "thought": "",
        "videoUrl": "",
        "videoOrder": "",
        "profileImage": "./image/people/p49.jpg",
        "inActiveProfileImage": "./image/people/p49_.jpg",
        "role2": ""
    }
];

const transformedImage = peopleData.map(people => {
    const { profileImage, inActiveProfileImage } = people;
    return {
        ...people,
        profileImage: require(profileImage),
        inActiveProfileImage: require(inActiveProfileImage)
    };
})

export { IPeople };
export default transformedImage;
