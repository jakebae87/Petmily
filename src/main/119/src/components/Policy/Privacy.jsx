import React from "react";

function Privacy() {
    return (
        <div className="Privacy">
            <div className="cateTitle">
                <h1>개인정보처리방침</h1>
            </div>
            <hr />

            <h4>- 시행일 : 2023-XX-XX -</h4>

            <div className="scrollBox">
                <p>
                    <h3>제1장</h3>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias perferendis eius quaerat necessitatibus
                        aut fugit nesciunt perspiciatis inventore, veniam esse ab, architecto sequi animi quas voluptates
                        asperiores, dolores blanditiis voluptatum?
                    </p>
                    <p>
                        1. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis nostrum eius recusandae hic
                        inventore similique. Vitae adipisci repudiandae eum fugiat impedit, recusandae asperiores expedita vel
                        tempora libero assumenda fuga architecto.
                    </p>
                    <p>
                        2. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi repudiandae architecto id nam
                        debitis dolores unde voluptates? Eum autem adipisci ratione aliquam, explicabo ipsa! Ducimus omnis earum
                        asperiores sit similique!
                    </p>
                    <p>
                        3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptas, ex recusandae a vel ratione
                        consequuntur odio aliquid, magnam quis voluptate incidunt quia ut reiciendis repellendus quisquam,
                        exercitationem esse quod.
                    </p>
                </p>
                <br />
                <p>
                    <h3>제2장</h3>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias perferendis eius quaerat necessitatibus
                        aut fugit nesciunt perspiciatis inventore, veniam esse ab, architecto sequi animi quas voluptates
                        asperiores, dolores blanditiis voluptatum?
                    </p>
                    <p>
                        1. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis nostrum eius recusandae hic
                        inventore similique. Vitae adipisci repudiandae eum fugiat impedit, recusandae asperiores expedita vel
                        tempora libero assumenda fuga architecto.
                    </p>
                    <p>
                        2. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi repudiandae architecto id nam
                        debitis dolores unde voluptates? Eum autem adipisci ratione aliquam, explicabo ipsa! Ducimus omnis earum
                        asperiores sit similique!
                    </p>
                    <table>
                        <colgroup>
                            <col style={{ width: '100px' }} />
                            <col style={{ width: '400px' }} />
                            <col style={{ width: '500px' }} />
                        </colgroup>

                        <thead>
                            <tr>
                                <th>분류</th>
                                <th>수집∙이용 목적</th>
                                <th>개인정보 항목</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>회원정보</td>
                                <td>가입, 서비스 이용 및 상담, 회원가입 남용(부정거래), 부정이용 확인∙방지(허위리뷰, 이벤트 혜택 부정수급 등), 환불 및 리콜 안내, 상품 추천,</td>
                                <td>이름(실명, 닉네임), 연락처(휴대전화번호), ID(이메일), 비밀번호, 성별, 생년월일, 14세미만 가입자의 경우 법정대리인의 정보, 서비스 이용기록(방문일시,
                                    IP, 불량 이용 기록 등), 기기정보(기기종류, OS버전), 반려동물 정보(이름, 몸무게, 사이즈, 종 등), 소셜계정(카카오, 네이버, 구글 등)을 통한 회원가입
                                    및 간편로그인</td>
                            </tr>

                            <tr>
                                <td rowspan="3">추가정보</td>
                                <td>상품 배송</td>
                                <td>수취인 이름, 연락처(휴대전화번호), 주소, 배송 요청사항</td>
                            </tr>

                            <tr>
                                <td>결제</td>
                                <td>
                                    <p>신용카드 : 카드사명, 카드번호, 유효기간</p>
                                    <p>휴대전화 : 휴대전화번호, 통신사명</p>
                                    <p>가상계좌 : 은행명, 계좌번호</p>
                                    <p>무통장입금 : 은행명, 입금자명</p>
                                    <p>현금영수증정보</p>
                                </td>
                            </tr>

                            <tr>
                                <td>취소∙환불</td>
                                <td>예금주명, 은행명, 계좌번호</td>
                            </tr>

                            <tr>
                                <td>선택정보</td>
                                <td>마케팅, 서비스 개선</td>
                                <td>주소, 배송요청사항, 구독 횟수, 구독 주기, 제품 사용 시 불편한 점, 선호하는 상품 및 서비스 추천을 위한 정보</td>
                            </tr>
                        </tbody>
                    </table>
                </p>
            </div>
        </div>
    );
}

export default Privacy;
