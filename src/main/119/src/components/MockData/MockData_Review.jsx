// 이미지
import food_image1 from '../../assets/Images/products/food_image1.jpg';
import food_image2 from '../../assets/Images/products/food_image2.jpg';
import food_image3 from '../../assets/Images/products/food_image3.jpg';
import food_image4 from '../../assets/Images/products/food_image4.jpg';
import food_image5 from '../../assets/Images/products/food_image5.jpg';

// Mock Data
const mockData = [
    {
        id: 0,
        image: food_image1,
        reviewImage: [
            'http://bampic.gmarket.co.kr/v1/424/412/2490412424/01376/2490412424396184037600.jpg',
            'https://bampic.auction.co.kr/v1/174/555/b901555174/00159/b901555174233948515900.jpg'
        ],
        productName: "데이스포 장영양제 250g",
        star: 4,
        subject: '우리아이가 잘 먹어요',
        username: '배**',
        hit: '55',
        contents: `계속 먹이던건데 얼마안남아서 주문했어요. 효과가 있는건지 없는건지 잘 모르겠지만 강아지가 간식인것처럼 잘먹고 안먹이면 제 마음이 불편할거같아서 계속
                    \n먹이는중이네요. 효과가 있길 바래요.`,
        createDate: new Date('2023-01-21 00:00:00')
    },
    {
        id: 1,
        image: food_image2,
        reviewImage: [
            'https://godomall.speedycdn.net/f31753ba42f55e4bd531b3fc41b9fc74/goods/1000000088/review/c7a9b883acbfbcf5',
            'https://godomall.speedycdn.net/f31753ba42f55e4bd531b3fc41b9fc74/goods/1000000088/review/d6daf0f8e71f6987'
        ],
        productName: "애견비책 오리 연어 화식사료 120g x 10",
        star: 3,
        subject: '가성비가 안좋아요',
        username: '김**',
        hit: '25',
        contents: `제가 먹어봤는데도 꿀맛이네요.
                    \n소금좀 뿌리면 간이 딱 맞아요.
                    \n개꿀ㅋㅋㅋ`,
        createDate: new Date('2023-01-15 00:00:00')
    },
    {
        id: 2,
        image: food_image3,
        reviewImage: [
            'https://godomall.speedycdn.net/f31753ba42f55e4bd531b3fc41b9fc74/goods/200/review/e14a7dc10089811e',
            'https://godomall.speedycdn.net/f31753ba42f55e4bd531b3fc41b9fc74/goods/200/review/cf70345ed3311e33'
        ],
        productName: "NPABC-844-A-반려동물 사각캔 닭고기+소고기 100gx24",
        star: 5,
        subject: '닭가슴살 부족할 때, 내가 먹어도 꿀맛임',
        username: '최**',
        hit: '92',
        contents: `위 댓글에서도 역시나 드셔보셨군요ㅋㅋㅋ
                    \n이 것도 한번 드셔보세요~ 은근 입에 맞아요.
                    \n캔으로 되어있어서 들고다녀도 되는데, 먹을 때는 가리고 드세요.`,
        createDate: new Date('2023-01-05 00:00:00')
    },
    {
        id: 3,
        image: food_image4,
        reviewImage: [
            'https://keatzstore.com/file_data/keatzgarden/2022/10/25/459fda9b0c44b5d66a20bf67cf6959a4.jpeg',
            'https://keatzstore.com/file_data/keatzgarden/2022/10/25/8053d2f2c39276cbf5a0f0ad6cf237df.jpeg'
        ],
        productName: "기둥 컴팩트 애견배변판 배변용품 반려동물 애완",
        star: 3,
        subject: '배변 교육시키는데 너무 좋네요',
        username: '은**',
        hit: '141',
        contents: `애기도 같이 배변활동하는데 최고에요~
                    \n저도 사용해보고 후기 남길께요!!!!`,
        createDate: new Date('2022-12-29 00:00:00')
    },
    {
        id: 4,
        image: food_image5,
        reviewImage: [
            'https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/984/b75b035df2824e1a70102177e6c7cc79_res.jpeg',
            'https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/739/e059800019031d92919a92cb5328e75e_res.jpeg'
        ],
        productName: "gooby 메모리폼 스텝인 하네스 편안한 강아지 가슴줄",
        star: 1,
        subject: '산책 필수템!',
        username: '박**',
        hit: '59',
        contents: `결국 도베르만이 줄을 끊고 달아났어요!!!
                    \n펫밀리 소송할테니까 기다려라`,
        createDate: new Date('2022-12-11 00:00:00')
    }
];

export default mockData;