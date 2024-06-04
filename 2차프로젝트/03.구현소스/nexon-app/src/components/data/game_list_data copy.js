// 게임 데이터
const gameData = [
    {
        idx: "1",
        게임명: "던전앤파이터",
        대표이미지: "https://rs.nxfs.nexon.com/gameusr/19/7/Ymo429175605814.png",
        장르: "ACTION RPG",
        홈페이지: "https://df.nexon.com/",
        외부링크: "없음",
        플랫폼: "",
        txt: "화려한 액션과 압도적인 타격감, 마음을 울리는 음악과 영화 같은 스토리가 공존하는 곳.흥미진진한 모험이 가득한 아라드로 여러분을 초대합니다.",
        
        이미지:[
            "",
            "",
            "",
            "",
        ]
    },
    {
        idx: "2",
        게임명: "FC 온라인",
        대표이미지: "https://rs.nxfs.nexon.com/gameusr/23/9/BlEa21085006355.png",
        장르: "스포츠",
        홈페이지: "https://fconline.nexon.com",
        외부링크: "https://www.youtube.com/channel/UC9otskL_kd-0CDib_5Lj-mQ",
        플랫폼: "",
        txt: "",
        이미지:[
            "",
            "",
            "",
            "",
        ]
    },
    {
        idx: "3",
        게임명: "메이플스토리",
        대표이미지: "https://rs.nxfs.nexon.com/gameusr/24/4/NYKt18112820955.png",
        장르: "RPG",
        홈페이지: "http://maplestory.nexon.com",
        외부링크: "https://www.youtube.com/@MapleStoryKR",
        플랫폼: "",
        txt: "세계 최초의 횡스크롤 MMORPG, 다채로운 필드에서의 여행과 모험, 끊임없는 즐거움과 스스로 만들어가는 이야기, 상상 속의 세계",
        이미지:[
            "",
            "",
            "",
            "",
        ]
    },
    {
        idx: "4",
        게임명: "블루아카이브",
        대표이미지: "https://rs.nxfs.nexon.com/gameusr/22/10/S3Pv20055317789.jpg",
        장르: "수집형RPG",
        홈페이지: "https://bluearchive.nexon.com",
        외부링크: "https://forum.nexon.com/bluearchive/",
        플랫폼: "",
        txt: "개인 화기와 스마트폰은 학생들의 필수 아이템! 학원 도시 소녀들의 우정과 사랑, 감동의 밀리터리 액션!"
        ,
        이미지:[
            "",
            "",
            "",
            "",
        ]
    },
    {
        idx: "5",
        게임명: "서든어택",
        대표이미지: "https://rs.nxfs.nexon.com/bannerusr/24/5/jhep22142329810.jpg",
        장르: "FPS",
        홈페이지: "https://sa.nexon.com/main/index.aspx",
        외부링크: "없음",
        플랫폼: "",
        txt: "전 중인 아프리카의 국가, 탄지리로 공화국에서 대규모 유전 지대가 발견된다. 이후 치안유지를 위해 주둔하고 있던 UN군이 반군에 의해 피습되는 사건이 벌어지자 잔호크 중령이 이끄는 특수부대, 사일런트 폭스(레드팀)가 반군 세력을 척살하기 위해 탄지리로에 투입된다. 하지만 잔호크의 특수부대는 정보 수집 중 UN군을 공격한 것은 반군이 아닌 탄지리로 정부군이라는 사실을 알게 되었고, 잔호크는 이것이 강대국의 개입으로 내전에서 승리하려는 탄지리로 정부군과 탄지리로에서 발견된 유전 지대를 손에 넣으려는 강대국들의 음모에서 비롯된 일임을 깨닫는다. 거기에 부대가 탄지리로 정부군의 반군 소탕을 가장한 민간인 학살에까지 동원되기에 이르자 잔호크와 그의 부대는 결국 반군 측에 가담하게 된다. 이 일로 전쟁 여론이 커지게 되자, 강대국에서는 치안 유지를 위한 경찰 부대를 가장한 특수부대(블루팀)을 보내 반군과 잔호크의 부대를 소탕하려 하는데...",
        이미지:[
            "",
            "",
            "",
            "",
        ]
    },
    {
        idx: "6",
        게임명: "마비노기",
        대표이미지: "https://rs.nxfs.nexon.com/gameusr/19/7/QYiB29175929811.png",
        장르: "RPG",
        홈페이지: "https://mabinogi.nexon.com/page/main/index.asp",
        외부링크: "https://x.com/Nexon_Mabinogi",
        플랫폼: "",
        txt: "지루하게 반복되는 싸움 대신 누구나 쉽게 교감과 소통, 이해와 사랑이 있는 판타지 세계에서의 낭만 ",
        이미지:[
            "",
            "",
            "",
            "",
        ]
    },

    {
        idx: "7",
        게임명: "메이플스토리 월드",
        대표이미지: "https://rs.nxfs.nexon.com/bannerusr/24/4/fZ3b25180147404.jpg",
        장르: "샌드박스",
        홈페이지: "https://abr.na.nexon.com/a9phpk",
        외부링크: "https://www.youtube.com/c/MapleStoryWorlds",
        플랫폼: "",
        txt: "메이플스토리에 무궁무진한 상상을 더하다! 메이플로 가득한 새로운 세상 메이플스토리 월드에서 다양한 콘텐츠를 플레이해 보세요!",
        이미지:[
            "",
            "",
            "",
            "",
        ]
    },

    {
        idx: "8",
        게임명: "데이브 더 다이버",
        대표이미지: "https://rs.nxfs.nexon.com/gameusr/22/9/UpmG06122150734.png",
        장르: "어드벤처 RPG",
        홈페이지: "https://mintrocketgames.com/ko/davethediver/platform",
        외부링크: "https://www.youtube.com/channel/UCA_ypVDKXfdRphpL_EpIOKg",
        플랫폼: "",
        txt: "게임을 만들 때 고려해야 할 것이 수백가지가 있습니다. 하지만 가장 중요한 본질은 재미입니다. 우리는 성공의 방정식이라 여겨졌던 기존의 관습을 과감하게 내려놓고 오직 그 재미에만 집요하게 집중해 보기로 했습니다.  ",
        이미지:[
            "",
            "",
            "",
            "",
        ]
    },
    {
        idx: "9",
        게임명: "엘소드",
        대표이미지: "https://rs.nxfs.nexon.com/bannerusr/24/5/6SYj22164926360.png",
        장르: "ACTION RPG",
        홈페이지: "https://elsword.nexon.com/Events2024/0523/Update?ST=nexon&PS=S1&BN=Card",
        외부링크: "https://www.youtube.com/channel/UCHUbqFpvmXbSGgmHKxOJCeQ",
        플랫폼: "",
        txt: "‘엘’과 생명의 대륙, 엘리오스어둠이 사라지지 않고, 파도가 날뛰며 땅은 메말라 있던 혼돈의 대륙.이 거대한 대륙에서 생명의 흔적을 찾아보기란 쉬운 일이 아니었다.그러던 어느 날, 이 대륙에 여신 이스마엘이 내린 거대한 보석이 빛처럼 내려와 대륙의 한 복판에 자리를 잡게 된다.그 이후부터 대륙에는 엄청난 변화가 일어나기 시작한다.",
        이미지:[
            "",
            "",
            "",
            "",
        ]
    },
    {
        idx: "10",
        게임명: "카트라이더 러쉬플러스",
        대표이미지: "https://rs.nxfs.nexon.com/gameusr/22/10/Fupi20055414785.png",
        장르: "레이싱",
        홈페이지: "https://kartrush.nexon.com",
        외부링크: "https://forum.nexon.com/kartrush/",
        플랫폼: "",
        txt: "이제, 모바일로 카트라이더를 플레이하다! ",
        이미지:[
            "",
            "",
            "",
            "",
        ]
    },
    {
        idx: "11",
        게임명: "바람의나라",
        대표이미지: "https://rs.nxfs.nexon.com/gameusr/19/7/kV4G29180108505.png",
        장르: "RPG",
        홈페이지: "https://baram.nexon.com/",
        외부링크: "없음",
        플랫폼: "",
        txt: "고구려 시대를 배경으로 벌어지는 무휼과 연의 러브스토리, 수만가지의 울고 웃는 캐릭터로 무한 변신이 가능한 가상사회의 체험, 흥분과 기대감의 축제 한마당",
        이미지:[
            "",
            "",
            "",
            "",
        ]
    },

    {
        idx: "12",
        게임명: "크레이지 아케이드",
        대표이미지: "https://rs.nxfs.nexon.com/gameusr/24/5/ciSy08111440615.png",
        장르: "캐주얼",
        홈페이지: "https://ca.nexon.com/",
        외부링크: "https://www.youtube.com/channel/UC_VtxexDpPin8CqkxzVeMaQ",
        플랫폼: "",
        txt: "물풍선을 이용하여 상대를 물방울에 가두어터뜨리면 이기는 방식의 게임으로 누구나 부담 없이 손쉽게 즐길 수 있습니다. 여러 명이 한 맵에서 서로가 적이 되어 게임을 할 수도 있고, 팀을 나누어 게임을 할 수도 있습니다.",
        이미지:[
            "",
            "",
            "",
            "",
        ]
    },
];
