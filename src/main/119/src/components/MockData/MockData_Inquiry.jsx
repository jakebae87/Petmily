// Mock Data
const mockData = [
    {
        id: 0,
        subject: '유통기한 확인요청',
        username: '배**',
        productName: '데이스포 장영양제 250g',
        hit: '45',
        contents: `데이스포에 유통기한이 적혀있는데, 섭취할 수 있는 기간이 얼마나 되나요?
                    \n날짜 살짝 지나도 괜찮겠죠?`,
        createDate: new Date('2023-08-19 00:00:00')
    },
    {
        id: 1,
        subject: '너무 배고픈데 사람이 먹어도 되나요?',
        username: '김**',
        productName: '애견비책 오리 연어 화식사료 120g x 10',
        hit: '11',
        contents: `애들 사료사느라 제가 먹을 밥이 없네요.
                    \n연어 조리안해도 바로 먹어도 될까요?`,
        createDate: new Date('2023-07-25 00:00:00')
    },
    {
        id: 2,
        subject: '배송 언제 되나요?',
        username: '최**',
        productName: 'NPABC-844-A-반려동물 사각캔 닭고기+소고기 100gx24',
        hit: '52',
        contents: `주문한지 하루나 지났는데, 아직도 도착을 안했어요.
                    \n빨리 좀 보내주세요!!!`,
        createDate: new Date('2023-06-05 00:00:00')
    },
    {
        id: 3,
        subject: '어린이가 사용해도 될까요?',
        username: '은**',
        productName: '기둥 컴팩트 애견배변판 배변용품 반려동물 애완',
        hit: '25',
        contents: `동물을 너무 좋아해서 강아지랑 같이 배변활동하려고 하네요.
                    \n대소변 같이하면 어린이가 병에 걸릴까요?
                    \n부끄럽지만 질문드려요.`,
        createDate: new Date('2022-12-29 00:00:00')
    },
    {
        id: 4,
        subject: '강아지가 좀 커요. 착용 가능할까요?',
        username: '박**',
        productName: 'gooby 메모리폼 스텝인 하네스 편안한 강아지 가슴줄',
        hit: '105',
        contents: `4살 도베르만이에요.
                    \n제품 사용해도 안끊어질까요?
                    \n착용하고 있는 사진은 조그마한 불독인데, 20키로가 넘는 도베르만도 가능한지 궁금해요.`,
        createDate: new Date('2022-12-11 00:00:00')
    }
];

export default mockData;