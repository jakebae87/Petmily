// 이미지
import Feed_dog from '../../assets/Images/products/food_dog.jpg'
import Feed_cat from '../../assets/Images/products/food_cat.jpg'
import Snack_dog from '../../assets/Images/products/snack_dog.jpg'
import Snack_cat from '../../assets/Images/products/snack_cat.jpg'
import Wash_dog from '../../assets/Images/products/wash_dog.jpg'
import Wash_cat from '../../assets/Images/products/wash_cat.jpg'
import Brush from '../../assets/Images/products/brush.jpg'
import Cushion from '../../assets/Images/products/cushion.jpg'
import Toy_dog from '../../assets/Images/products/toy_dog.jpg'
import Toy_cat from '../../assets/Images/products/toy_cat.jpg'
import Clothes_dog from '../../assets/Images/products/clothes_dog.jpg'
import Prom1 from '../../assets/Images/prom_products/prom_product1.jpg'
import Prom2 from '../../assets/Images/prom_products/prom_product2.jpg'
import Prom3 from '../../assets/Images/prom_products/prom_product3.jpg'
import Prom4 from '../../assets/Images/prom_products/prom_product4.jpg'
import Prom5 from '../../assets/Images/prom_products/prom_product5.jpg'


const mockData = [
    {
        id: 0,
        kind: 'dog',
        category: 'feed',
        title: '강아지 사료',
        content: '강아지 사료입니다',
        price: 8000,
        new: false,
        promotion: false,
        cntOfsales: 90,
        discount: 20,
        img: Feed_dog
    },
    {
        id: 1,
        kind: 'cat',
        category: 'feed',
        title: '고양이 사료',
        content: '고양이 사료입니다',
        price: 8000,
        new: false,
        promotion: false,
        cntOfsales: 80,
        discount: 20,
        img: Feed_cat
    },
    {
        id: 2,
        kind: 'dog',
        category: 'snackNutrient',
        title: '강아지 간식',
        content: '강아지 간식입니다',
        price: 5600,
        new: false,
        promotion: false,
        cntOfsales: 70,
        discount: 20,
        img: Snack_dog
    },
    {
        id: 3,
        kind: 'cat',
        category: 'snackNutrient',
        title: '고양이 간식',
        content: '고양이 간식입니다',
        price: 5600,
        new: false,
        promotion: false,
        cntOfsales: 60,
        discount: 20,
        img: Snack_cat
    },
    {
        id: 4,
        kind: 'dog',
        category: 'hygiene',
        title: '강아지 샴푸',
        content: '강아지 샴푸입니다',
        price: 5000,
        new: false,
        promotion: false,
        cntOfsales: 50,
        discount: 0,
        img: Wash_dog
    },
    {
        id: 5,
        kind: 'cat',
        category: 'hygiene',
        title: '고양이 샴푸',
        content: '고양이 샴푸입니다',
        price: 5000,
        new: false,
        promotion: false,
        cntOfsales: 40,
        discount: 0,
        img: Wash_cat
    },
    {
        id: 6,
        kind: 'all',
        category: 'beautyCare',
        title: '펫 브러쉬',
        content: '펫 브러쉬입니다',
        price: 2000,
        new: true,
        promotion: false,
        cntOfsales: 30,
        discount: 0,
        img: Brush
    },
    {
        id: 7,
        kind: 'all',
        category: 'living',
        title: '쿠션',
        content: '쿠션입니다',
        price: 15000,
        new: true,
        promotion: false,
        cntOfsales: 20,
        discount: 0,
        img: Cushion
    },
    {
        id: 8,
        kind: 'dog',
        category: 'walkPlay',
        title: '강아지 장난감',
        content: '강아지 장난감입니다',
        price: 8000,
        new: true,
        promotion: false,
        cntOfsales: 10,
        discount: 0,
        img: Toy_dog
    },
    {
        id: 9,
        kind: 'cat',
        category: 'walkPlay',
        title: '고양이 장난감',
        content: '고양이 장난감입니다',
        price: 8000,
        new: true,
        promotion: false,
        cntOfsales: 100,
        discount: 0,
        img: Toy_cat
    },
    {
        id: 10,
        kind: 'dog',
        category: 'clothesAccessorie',
        title: '강아지 옷',
        content: '강아지 옷입니다',
        price: 20000,
        new: false,
        promotion: false,
        cntOfsales: 9,
        discount: 0,
        img: Clothes_dog
    },
    {
        id: 11,
        kind: 'cat',
        category: 'living',
        title: '스크래쳐',
        content: '삼각형 스크래쳐입니다',
        price: 24000,
        new: false,
        promotion: 1,
        cntOfsales: 5,
        discount: 20,
        img: Prom1
    },
    {
        id: 12,
        kind: 'cat',
        category: 'walkPlay',
        title: '고양이 장난감2',
        content: '고양이 장난감2입니다',
        price: 15000,
        new: false,
        promotion: 2,
        cntOfsales: 15,
        discount: 50,
        img: Prom2
    },
    {
        id: 13,
        kind: 'dog',
        category: 'clothesAccessorie',
        title: '강아지 옷2',
        content: '강아지 옷2입니다',
        price: 15000,
        new: false,
        promotion: 3,
        cntOfsales: 25,
        discount: 50,
        img: Prom3
    },
    {
        id: 14,
        kind: 'all',
        category: 'snackNutrient',
        title: '반려동물 간식',
        content: '반려동물 간식입니다',
        price: 30000,
        new: false,
        promotion: 4,
        cntOfsales: 35,
        discount: 0,
        img: Prom4
    },
    {
        id: 15,
        kind: 'dog',
        category: 'walkPlay',
        title: '하네스',
        content: '강아지용 하네스입니다',
        price: 30000,
        new: false,
        promotion: 5,
        cntOfsales: 45,
        discount: 0,
        img: Prom5
    }
];

export default mockData;