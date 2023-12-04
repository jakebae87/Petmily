// Mock Data
const mockData = [
    {
        id: 0,
        subject: '휴무 및 배송지연 안내',
        username: '펫밀리',
        hit: '44',
        contents: `상품을 인도받은 날로부터 7일 이내에 한해 계약에 관한 청약철회가 가능합니다.
                    \n펫밀리 고객센터(☎1644 - 9603), 카카오톡 상담톡(@펫밀리) 또는 홈페이지 Q & A게시판에 반품접수를 해주시면 수거 접수를 도와드리고 있습니다.
                    \n반품 상품이 도착 후 자체 검수가 완료되면 환불처리를 해드립니다.
                    \n단순변심으로 인하여 반품을 하시는 경우에는 상품 등의 반환에 필요한 비용을 고객님이 부담하셔야 합니다.
                    \n* 단, 제품은 개봉하시지 않은 새상품 상태일 경우에만 반품이 가능하오며
                    \n사용하신 제품은 단순변심, 사용감 불만족으로 인한 반품이 불가합니다!`,
        createDate: new Date('2023-08-21 00:00:00')
    },
    {
        id: 1,
        subject: '5일 어린이날 배송 지연 안내',
        username: '짭밀리',
        hit: '12',
        contents: `5월5일은 어린이 날입니다.
                    \n공휴일이니까 배송이 지연되며, 6일부터 배송이 재개되오니 참고바랍니다.
                    \n제발 전화로 문의 좀 하지마세요.
                    \n공지글 확인하고 다른 문의 건만 전화주세요.`,
        createDate: new Date('2023-08-19 00:00:00')
    },
    {
        id: 2,
        subject: '2022년 설 배송 지연 및 휴무 안내',
        username: '펫밀리',
        hit: '92',
        contents: `설에는 당연히 배송이 지연되는거 아시죠?
                    \n언제 배송되냐고 문의하지 마시고 좀 기다리세요.
                    \n급하면 미리 주문을 했어야죠.`,
        createDate: new Date('2023-07-30 00:00:00')
    },
    {
        id: 3,
        subject: '플러스친구 쿠폰 받으세요',
        username: '펫밀리',
        hit: '5',
        contents: `무료 쿠폰입니다.
                    \n플러스 친구 추가하면 한 번만 발행되는 쿠폰입니다.
                    \n공짜 좋아하면 대머리 된다.`,
        createDate: new Date('2023-05-30 00:00:00')
    },
    {
        id: 4,
        subject: '크리스마스 배송 지연 안내',
        username: '패밀리',
        hit: '29',
        contents: `12월25일 크리스마스는 당연히 배송안됩니다.
                    \n연말이니까 배송지연은 불가피합니다.
                    \n징징거리지 말아주세요.`,
        createDate: new Date('2022-12-12 00:00:00')
    }
];

export default mockData;