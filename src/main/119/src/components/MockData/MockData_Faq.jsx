// Mock Data
const mockData = [
    {
        id: 0,
        type: '환불/반품',
        subject: '반품하려면 어떻게 하나요?',
        username: '펫밀리',
        hit: '52',
        contents: `반품하지말고 그냥 쓰세요.
                    \n업무 처리하기 귀찮아요.`,
        createDate: new Date('2023-08-20 00:00:00')
    },
    {
        id: 1,
        type: '결제/배송',
        subject: '배송기간은 얼마나 되나요?',
        username: '패밀리',
        hit: '11',
        contents: `때가 되면 도착하겠죠.
                    \n라떼는 5일도 기다렸어요.`,
        createDate: new Date('2023-08-05 00:00:00')
    },
    {
        id: 2,
        type: '회원가입/정보',
        subject: '비회원도 주문가능 하나요?',
        username: '펫밀리',
        hit: '102',
        contents: `안되니까 회원가입하세요.
                    \n소셜 로그인 가능하니까, 그냥 회원주문하세요.`,
        createDate: new Date('2023-06-11 00:00:00')
    },
    {
        id: 3,
        type: '회원가입/정보',
        subject: '회원가입은 어떻게 하나요?',
        username: '짭밀리',
        hit: '52',
        contents: `그것도 모르면서 인터넷 어떻게 하나요?
                    \n길거리에 지나가는 사람한테 해달라고 하세요.`,
        createDate: new Date('2022-11-24 00:00:00')
    },
    {
        id: 4,
        type: '교환/환불/반품',
        subject: '주문취소는 어떻게 하나요?',
        username: '펫밀리',
        hit: '152',
        contents: `잘 생각해보고 주문하셨어야죠...
                    \n주문취소는 당사 직접 방문하셔야만 가능합니다.
                    \n제품에 손상있는지 확인해보고 환불처리 해드려요.`,
        createDate: new Date('2022-10-25 00:00:00')
    }
];

export default mockData;