import { CYCLE, CATEGORY, CURRENCY } from '../Doamin/const';
import { Service } from '../Doamin/Service';

const services = [
    new Service({
        id: 1,
        name: '핀즐',
        uri: 'https://pinzle-collect.net/',
        description: '6개월 그림 정기구동 89,000원',
        category: CATEGORY.CONVENIENCE,
        cover: 'https://onemore.s3.ap-northeast-2.amazonaws.com/pinzle-cover.png',
        items: [
            {
                name: '6개월 정기구독',
                receipt: CYCLE.MONTHLY,
                billing: CYCLE.HALF_A_YEAR,
                price: 89000,
                currency: CURRENCY.WON,
            }, {
                name: '6개월 정기구독 + 이지스냅(black/white) 프레임',
                receipt: CYCLE.MONTHLY,
                billing: CYCLE.HALF_A_YEAR,
                price: 141000,
                currency: CURRENCY.WON,
            },
        ],
    }),
    new Service({
        id: 2,
        name: '꾸까',
        uri: 'https://kukka.kr/',
        description: '2주에 1번 꽃 정기배송 17900원 ~ 49900원',
        category: CATEGORY.GOODS,
        cover: 'https://onemore.s3.ap-northeast-2.amazonaws.com/kukka.png',
        items: [
            {
                name: '가벼운 S꽃 구독',
                receipt: CYCLE.TWO_WEEKS,
                billing: CYCLE.MONTHLY,
                price: 17900,
                currency: CURRENCY.WON,
            }, {
                name: '가벼운 M꽃 구독',
                receipt: CYCLE.TWO_WEEKS,
                billing: CYCLE.MONTHLY,
                price: 26900,
                currency: CURRENCY.WON,
            }, {
                name: '가벼운 L꽃 구독',
                receipt: CYCLE.TWO_WEEKS,
                billing: CYCLE.MONTHLY,
                price: 34900,
                currency: CURRENCY.WON,
            }, {
                name: '가벼운 XL꽃 구독',
                receipt: CYCLE.TWO_WEEKS,
                billing: CYCLE.MONTHLY,
                price: 49900,
                currency: CURRENCY.WON,
            },
        ],
    }),
    new Service({
        id: 3,
        name: '술담화',
        uri: 'http://www.sooldamhwa.com/',
        description: '매월 전통주 정기배송 39,000원',
        category: CATEGORY.GOODS,
        cover: 'https://onemore.s3.ap-northeast-2.amazonaws.com/sooldamhwa-cover.png',
        items: [ {
            name: '전통주',
            receipt: CYCLE.MONTHLY,
            billing: CYCLE.MONTHLY,
            price: 39000,
            currency: CURRENCY.WON,
        } ],
    }),
    new Service({
        id: 4,
        name: '삼이오',
        uri: 'https://325.farm/',
        description: '7년근 산삼 정기구독 89,000원',
        category: CATEGORY.GOODS,
        cover: 'https://onemore.s3.ap-northeast-2.amazonaws.com/325-cover.png',
        items: [ {
            name: '정 7년근 산양산삼',
            receipt: CYCLE.WEEKLY,
            billing: CYCLE.MONTHLY,
            price: 89000,
            currency: CURRENCY.WON,
        } ],
    }),
    new Service({
        id: 5,
        name: '자코라',
        uri: 'https://www.jakola.co.kr/round-pan/descriptions.html',
        description: '서비스 신청 후 프라이팬 2개 수령, 6개월 후 동일 모델 2개 추가 수령',
        category: CATEGORY.GOODS,
        cover: 'https://onemore.s3.ap-northeast-2.amazonaws.com/jaokla-cover.png',
        items: [
            {
                name: '자코라 팬서비스3 프리미엄 Ⅲ GAS',
                receipt: CYCLE.HALF_A_YEAR,
                billing: CYCLE.YEAR,
                price: 79000,
                currency: CURRENCY.WON,
            }, {
                name: '자코라 팬서비스4 프리미엄 Ⅳ IH',
                receipt: CYCLE.HALF_A_YEAR,
                billing: CYCLE.YEAR,
                price: 89000,
                currency: CURRENCY.WON,
            },
        ],
    }),
    new Service({
        id: 6,
        name: '딜리셔츠',
        uri: 'http://delishirts.co.kr/',
        description: '매주 배송되는 와이셔츠 3장 88,000원',
        category: CATEGORY.GOODS,
        cover: 'https://onemore.s3.ap-northeast-2.amazonaws.com/delishirts-cover.png',
        items: [
            {
                name: '셔츠(White/Blue) 3장',
                receipt: CYCLE.WEEKLY,
                billing: CYCLE.MONTHLY,
                price: 88000,
                currency: CURRENCY.WON,
            }, {
                name: '셔츠(White/Blue) 5장',
                receipt: CYCLE.WEEKLY,
                billing: CYCLE.MONTHLY,
                price: 148000,
                currency: CURRENCY.WON,
            }, {
                name: '셔츠(Random box) 5장',
                receipt: CYCLE.WEEKLY,
                billing: CYCLE.MONTHLY,
                price: 96000,
                currency: CURRENCY.WON,
            }, {
                name: '셔츠(Random box) 5장',
                receipt: CYCLE.WEEKLY,
                billing: CYCLE.MONTHLY,
                price: 160000,
                currency: CURRENCY.WON,
            },
        ],
    }),
    new Service({
        id: 7,
        name: '하비풀',
        uri: 'https://hobbyful.co.kr/',
        description: '취미 재료, 클래스 구독',
        category: CATEGORY.CONVENIENCE,
        cover: 'https://onemore.s3.ap-northeast-2.amazonaws.com/hobbyful-cover.png',
        items: [
            {
                name: '메리진의 스마트폰 드로잉 클래스 <입문편>',
                receipt: CYCLE.DAILY,
                billing: CYCLE.MONTHLY,
                price: 27000,
                currency: CURRENCY.WON,
            },
        ],
    }),
    new Service({
        id: 8,
        name: '쏘카',
        uri: 'https://www.socar.kr/',
        description: '카세어링 대여료 50% 할인쿠폰 월 9,900원',
        category: CATEGORY.CONVENIENCE,
        cover: 'https://onemore.s3.ap-northeast-2.amazonaws.com/socar-cover.png',
        items: [],
    }),
    new Service({
        id: 9,
        name: '넷플릭스',
        uri: 'https://www.netflix.com/',
        description: '스트리밍 월 9,500원~14,500원',
        category: CATEGORY.OTT,
        cover: 'https://onemore.s3.ap-northeast-2.amazonaws.com/netflix-cover.png',
        items: [],
    }),
    new Service({
        id: 10,
        name: '쿠팡',
        uri: 'https://www.coupang.com/',
        description: '생필품 정기배송',
        category: CATEGORY.CONVENIENCE,
        cover: 'https://onemore.s3.ap-northeast-2.amazonaws.com/coupang-cover.png',
        items: [],
    }),
    new Service({
        id: 11,
        name: '네이버 플러스',
        uri: 'https://nid.naver.com/membership/join',
        description: '네이버 바이브, 네이버 웹툰·시리즈, 시리즈on, 네이버 클라우드, 오디오클립 월 4,900원',
        category: CATEGORY.CONVENIENCE,
        cover: 'https://onemore.s3.ap-northeast-2.amazonaws.com/naver-cover.png',
        items: [],
    }),
    new Service(
        {
            id: 12,
            name: '토스 프라임',
            uri: 'https://toss.im/',
            description: '결제시 토스머니 100원 환급, 결제금액 2%할인, 계좌 송금 무료, 환전 무료, 신용등급 솔루션 무료 월 3,900원',
            category: CATEGORY.CONVENIENCE,
            cover: 'https://onemore.s3.ap-northeast-2.amazonaws.com/toss-cover.png',
            items: [],
        },
    ),
    new Service({
        id: 13,
        name: '해톡',
        uri: 'https://haetalk.shop/',
        description: '회 구매 20프로 할인, 월 9,900원',
        category: CATEGORY.GOODS,
        cover: 'https://onemore.s3.ap-northeast-2.amazonaws.com/haetalk.png',
        items: [],
    }),
    new Service({
        id: 14,
        name: '뚜레쥬르',
        uri: 'https://www.tlj.co.kr:7008',
        description: '1일 1회 커피 구독권 19,900원/월, 주 1회 식빵 구독권 7,900/월, 1일 1회 커피+모닝 샌드위치 49,500원/월',
        category: CATEGORY.GOODS,
        cover: 'https://onemore.s3.ap-northeast-2.amazonaws.com/touslesjours-cover.png',
        items: [],
    }),
    new Service(
        {
            id: 15,
            name: '파리바게트',
            uri: 'https://www.paris.co.kr/',
            description: '1일 1회 커피 구독권 19,800원/월, 1일 1회 파리의 아침 구독권 48,900원/월',
            category: CATEGORY.GOODS,
            cover: 'https://onemore.s3.ap-northeast-2.amazonaws.com/paris-baguette.png',
            items: [
                {
                    name: '커피 구독권',
                    receipt: CYCLE.DAILY,
                    billing: CYCLE.MONTHLY,
                    price: 19800,
                    currency: CURRENCY.WON,
                },
            ],
        },
    ),
    new Service({
        id: 16,
        name: '훌루',
        uri: 'https://www.hulu.com',
        description: '스트리밍 월 5.99달러',
        category: CATEGORY.OTT,
        cover: 'https://onemore.s3.ap-northeast-2.amazonaws.com/hulu-cover.png',
        items: [],
    }),
    new Service({
        id: 17,
        name: '유튜브 프리미엄',
        uri: 'https://www.youtube.com/',
        description: '스트리밍 월 7,900원',
        category: CATEGORY.OTT,
        cover: 'https://onemore.s3.ap-northeast-2.amazonaws.com/youtube-cover.png',
        items: [],
    }),
    new Service({
        id: 18,
        name: '디즈니 플러스',
        uri: 'https://preview.disneyplus.com/kr/',
        description: '스트리밍 월 6.99달러, 연 69.99달러',
        category: CATEGORY.OTT,
        cover: 'https://onemore.s3.ap-northeast-2.amazonaws.com/disney-cover.png',
        items: [],
    }),
    new Service({
        id: 19,
        name: '티빙',
        uri: 'https://www.tving.com/',
        description: '스트리밍 월 11,900원 ~ 15,900원',
        category: CATEGORY.OTT,
        cover: 'https://onemore.s3.ap-northeast-2.amazonaws.com/tving-cover.png',
        items: [],
    }),
    new Service({
        id: 20,
        name: 'HBO 맥스',
        uri: 'https://www.hbomax.com/',
        description: '스트리밍 월 14.99달러',
        category: CATEGORY.OTT,
        cover: 'https://onemore.s3.ap-northeast-2.amazonaws.com/hbo-max-cover.png',
        items: [],
    }),
    new Service({
        id: 21,
        name: '애플티비 플러스',
        uri: 'https://www.apple.com/apple-tv-plus/',
        description: '스트리밍 월 4.99달러',
        category: CATEGORY.OTT,
        cover: 'https://onemore.s3.ap-northeast-2.amazonaws.com/apple-tv-cover.png',
        items: [],
    }),
    new Service({
        id: 22,
        name: '웨이브',
        uri: 'https://www.wavve.com/',
        description: '스트리밍 월 7,900원~13,900원',
        category: CATEGORY.OTT,
        cover: 'https://onemore.s3.ap-northeast-2.amazonaws.com/wavve-cover.png',
        items: [],
    }),
    new Service({
        id: 23,
        name: '시즌',
        uri: 'https:/myseezn.com/',
        description: '스트리밍 월 9,900원',
        category: CATEGORY.OTT,
        cover: 'https://onemore.s3.ap-northeast-2.amazonaws.com/seezn-cover.png',
        items: [],
    }),
];

export default services;
