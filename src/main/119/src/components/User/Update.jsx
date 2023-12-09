import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';
import axios from 'axios';
import DaumPostcode from 'react-daum-postcode';
import { useEffect } from 'react';



function Update() {


    // const onKeyDown = (e) => {
    //     if (e.keyCode === 13) {
    //         onSubmit();
    //     }
    // };
    // 회원이름
    const [userName, setUserName] = useState("");
    // 회원아이디
    const [userId, setUserId] = useState("");
    //회원패스워드
    const [userPassword, setUserPassword] = useState("");
    // 회원이메일
    const [userEmail, setUserEmail] = useState("");
    // 회원생일
    const [userBirthday, setUserBrithday] = useState("");
    // 회원전화번호
    const [userPhone, setUserPhone] = useState("");
    // 회원우편번호
    const [userZipcode, setUserzipcode] = useState("");
    // 회원주소
    const [userAddr, setUserAddr] = useState("");
    // 회원상세주소
    const [AddrD, setAddrD] = useState("");

    // 회원 정보 불러오기
    useEffect(() => {
        const userFromSession = JSON.parse(sessionStorage.getItem("loggedInUser"));

        if (userFromSession) {
            setUserName(userFromSession.user_name);
            setUserId(userFromSession.user_id);
            setUserPassword(userFromSession.user_password);
            setUserEmail(userFromSession.user_email);
            setUserBrithday(userFromSession.user_birthday);
            setUserPhone(userFromSession.user_phone);
            setUserzipcode(userFromSession.zipcode);
            setUserAddr(userFromSession.addr);
            setAddrD(userFromSession.addr_detail);


            // 생년월일 불러오기
            const userBirthday = userFromSession.user_birthday.split('-'); // 예시: "1990-12-31"
            if (userBirthday.length === 3) {
                setBirthyear(userBirthday[0]);
                setBirthmonth(userBirthday[1]);
                setBirthday(userBirthday[2]);
            }
            const userphone = userFromSession.user_phone.split('-'); // 예시: "010-1111-2222"
            if (userphone.length === 3) {
                setNumber(userphone[0]); // 첫 번째 번호
                setNumber(userphone[1]); // 두 번째 번호
                setNumber2(userphone[2]); // 세 번째 번호
            }

        } else {
            alert("로그인하세요");
        }
    }, []);


    //주소 api
    const [isPostOpen, setIsPostOpen] = useState(false);
    const [isAddress, setIsAddress] = useState("");
    const [isZoneCode, setIsZoneCode] = useState();

    const handleComplete = (data) => {
        let fullAddress = data.address;
        let extraAddress = "";

        if (data.addressType === "R") {
            if (data.bname !== "") {
                extraAddress += data.bname;
            }
            if (data.buildingName !== "") {
                extraAddress +=
                    extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
            }
            fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
        }

        setIsZoneCode(data.zonecode); // 사용자가 찾은 우편번호 값을 state에 저장
        setUserzipcode(data.zonecode); // 사용자가 찾은 우편번호 값을 state에 저장
        setIsAddress(fullAddress); // 주소를 isAddress state에 업데이트
        setUserAddr(fullAddress);
        setAddr(fullAddress); // 주소를 addr state에 업데이트
        setAddr_detail(addr_detail); // 상세 주소를 addr_detail state에 업데이트
        setIsPostOpen(false);
    };
    const togglePost = (e) => {
        e.preventDefault();
        setIsPostOpen(!isPostOpen);
    };

    const postcodeComponent = useMemo(() => (
        <div>
            <DaumPostcode onComplete={handleComplete} autoClose={true} />
        </div>
    ), [handleComplete]);

    const [zipcode, setZipcode] = useState("");
    const [addr, setAddr] = useState("");
    const [addr_detail, setAddr_detail] = useState("");
    const onChangeAddrDetail = (e) => {
        const currentAddrDetail = e.target.value;
        setAddrD(currentAddrDetail);
    };

    //이름 유효성 검사
    const [name, setName] = useState("");
    const [nMessage, setnMessage] = useState("");
    const [isName, setIsName] = useState("");

    const onChangename = (e) => {
        const curruntName = e.target.value;

        if (curruntName.length < 2) {
            setnMessage("이름은 두글자 이상 입력해 주세요");
            setIsName(false);
        } else {
            setnMessage("");
            setIsName(true);
        }
        setUserName(curruntName);
    };

    //아이디 유효성 검사
    // const [id, setId] = useState(""); //초기값세팅
    // const [idMessage, setIdMessage] = useState("");//오류메세지상태저장
    // const [isId, setIsId] = useState(false);//유효성검사

    // const onChangeId = (e) => {
    //     const currentId = e.target.value;
    //     setId(currentId);
    //     const idRegExp = /^[a-zA-z0-9]{4,12}$/;

    //     if (!idRegExp.test(currentId)) {
    //         setIdMessage("4-12사이 대소문자 또는 숫자만 입력해 주세요");
    //         setIsId(false);
    //     } else {
    //         setIdMessage("사용가능한 아이디 입니다.");
    //         setIsId(true);
    //     }
    // };

    // const onChangeId = (e) => {
    //     const currentId = e.target.value;
    //     setId(currentId);
    //     const idRegExp = /^[a-zA-z0-9]{4,12}$/;

    //     if (!idRegExp.test(currentId)) {
    //         setIdMessage("4-12사이 대소문자 또는 숫자만 입력해 주세요");
    //         setIsId(false);
    //     } else {
    //         axios.get(`/rsuser/idcheck?user_id=${currentId}`)
    //             .then(response => {
    //                 const isDuplicate = response.data === 'F';
    //                 setIdMessage(isDuplicate ? '이미 사용 중인 아이디입니다' : '사용 가능한 아이디입니다.');
    //                 setIsId(!isDuplicate);
    //             })
    //             .catch(error => {
    //                 console.error('아이디 중복 확인 실패:', error);
    //                 setIdMessage('아이디 중복 확인에 실패했습니다.');
    //                 setIsId(false);
    //             });
    //     }
    // };


    //패스워드 유효성 검사
    // const [pw, setPw] = useState("");
    // const [pwMessage, setpwMessage] = useState("");
    // const [ispw, setIspw] = useState(false);

    // const onChangePw = (e) => {
    //     const currentPw = e.target.value;

    //     const pwRegExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;

    //     if (!pwRegExp.test(currentPw)) {
    //         setpwMessage("숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요");
    //         setIspw(false);
    //     } else {
    //         setpwMessage("사용가능한 비밀번호 입니다");
    //         setIspw(true);
    //     }
    //     setUserPassword(currentPw);
    // };

    // //패스워드 확인
    // const [pw2, setPw2] = useState("");
    // const [pwMessage2, setpwMessage2] = useState("");
    // const [ispw2, setIspw2] = useState(false);

    // const onChangePw2 = (e) => {
    //     const currentPw2 = e.target.value;
    //     setPw2(currentPw2);
    //     if (pw !== currentPw2) {
    //         setpwMessage2("비밀번호가 일치하지 않습니다");
    //         setIspw2(false);
    //     } else {
    //         setpwMessage2("비밀번호가 일치합니다");
    //         setIspw2(true);
    //     }
    // };

    //이메일 유효성 검사
    const [email, setEmail] = useState("");
    const [emMessage, setEmMessage] = useState("");
    const [isEmail, setIsEmail] = useState(false);

    const onChangeEmail = (e) => {
        const currentEmail = e.target.value;

        const emRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emRegExp.test(currentEmail)) {
            setEmMessage("올바른 이메일 형식이 아닙니다");
            setIsEmail(false);
        } else {
            setEmMessage("");
            setIsEmail(true);
        }
        setUserEmail(currentEmail);
    };
    //생년월일 유효성 검사
    const [birthyear, setBirthyear] = useState("");
    const [birthmonth, setBirthmonth] = useState("");
    const [birthday, setBirthday] = useState("");
    const [brMessage, setBrmessage] = useState("");
    const [isBitrh, setIsbirth] = useState(false);

    const onChangebirth = (e) => {
        const selectedYear = e.target.name === "year" ? e.target.value : birthyear;
        const selectedMonth = e.target.name === "month" ? e.target.value : birthmonth;
        const selectedDay = e.target.name === "day" ? e.target.value : birthday;

        if (selectedYear && selectedMonth && selectedDay) {
            setBrmessage("");
            setIsbirth(true);
        } else {
            setBrmessage("생년월일을 모두 선택해주세요");
            setIsbirth(false);
        }

        if (e.target.name === "year") {
            setBirthyear(e.target.value);
        } else if (e.target.name === "month") {
            setBirthmonth(e.target.value);
        } else if (e.target.name === "day") {
            setBirthday(e.target.value);
        }
    }

    //연락처 유효성 검사
    const [number, setNumber] = useState("");
    const [number2, setNumber2] = useState("");
    const [nuMessage, setNumessage] = useState("");
    const [isNumber, setIsnumber] = useState(false);

    const onChangeNumber = (e) => {
        const currentNumber = e.target.value;
        const nuRegExp = /^[0-9]*$/;

        setNumber(currentNumber);

        if (!nuRegExp.test(currentNumber) || !nuRegExp.test(number2)) {
            setNumessage('숫자만 입력해 주세요');
            setIsnumber(false);
        } else {
            setNumessage('');
            setIsnumber(true);
        }
        setUserPhone(currentNumber);
    }

    const onChangeNumber2 = (e) => {
        const currentNumber2 = e.target.value;
        const nuRegExp = /^[0-9]*$/;

        setNumber2(currentNumber2);

        if (!nuRegExp.test(number) || !nuRegExp.test(currentNumber2)) {
            setNumessage('숫자만 입력해 주세요');
            setIsnumber(false);
        } else {
            setNumessage('');
            setIsnumber(true);
        }
        setUserPhone(currentNumber2);
    }
    //모든항목 입력 검사
    const onSubmit = () => {
        const userData = {
            user_id: userId,
            user_name: userName,
            user_password: userPassword,
            user_email: userEmail,
            user_birthday: `${birthyear}-${birthmonth}-${birthday}`,
            user_phone: `010-${number}-${number2}`,
            zipcode: userZipcode,
            addr: userAddr,
            addr_detail: AddrD,
        };

        axios.post(`/rsuser/update/${userId}`, userData)
            .then(response => {
                const updatedUserData = {
                    ...JSON.parse(sessionStorage.getItem("loggedInUser")),
                    user_name: userName,
                    user_password: userPassword,
                    user_email: userEmail,
                    user_birthday: `${birthyear}-${birthmonth}-${birthday}`,
                    user_phone: `010-${number}-${number2}`,
                    zipcode: userZipcode,
                    addr: userAddr,
                    addr_detail: AddrD,
                };
                sessionStorage.setItem("loggedInUser", JSON.stringify(updatedUserData));
                alert("회원수정 성공");
                window.location.reload();

            })
            .catch(error => {
                console.error('회원수정 실패:', error);
                alert('회원수정에 실패했습니다. 다시 시도해주세요.');
            });
    };


    //생년월일 선택창
    const years = Array.from({ length: 65 }, (_, index) => 2004 - index); // 1959년 ~ 2004년
    const months = Array.from({ length: 12 }, (_, index) => index + 1); // 1월 ~ 12월
    const days = Array.from({ length: 31 }, (_, index) => index + 1); // 1일 ~ 31일


    return (
        <div className='Update'>
            <div className="cateTitle">
                <h1>회원정보수정</h1>
            </div>

            <div className="update">
                <form id="update_form">
                    <div>
                        <table className="table">
                            <tr>
                                <th><label for="name">이름</label></th>
                                <td>
                                    <input id="name" type="text" className="updatebox" placeholder="이름을 입력해주세요." name="userName" value={userName} onChange={onChangename} />
                                    <span className="emessage">{nMessage}</span>
                                </td>
                            </tr>
                            <tr>
                                <th><label for="id">아이디</label></th>
                                <td>
                                    <input id="id" type="text" className="updatebox" name="userName" value={userId} readOnly />
                                </td>
                            </tr>
                            <tr>
                                <th><label for="pw">비밀번호</label></th>
                                <td>
                                    <input id="pw" type="password" className="updatebox" name="userPassword" value={userPassword} />

                                </td>
                            </tr>

                            <tr>
                                <th><label for="email">이메일</label></th>
                                <td>
                                    <input id="email" type="email" className="updatebox" name="user_email" value={userEmail} onChange={onChangeEmail} />
                                    <span className="emessage">{emMessage}</span>
                                </td>
                            </tr>
                            <tr>
                                <th>생년월일</th>
                                <td>
                                    <div className="birthbox">
                                        <select name="year" id="year" className="birth" value={birthyear} onChange={onChangebirth}>
                                            <option value="" disabled selected>년</option>
                                            {years.map((year) => (
                                                <option key={year} value={year}>{year}</option>
                                            ))}
                                        </select>
                                        <select name="month" id="month" className="birth" value={birthmonth} onChange={onChangebirth}>
                                            <option value="" disabled selected>월</option>
                                            {months.map((month) => (
                                                <option key={month} value={month}>{month}</option>
                                            ))}
                                        </select>
                                        <select name="day" id="day" className="birth" value={birthday} onChange={onChangebirth}>
                                            <option value="" disabled selected>일</option>
                                            {days.map((day) => (
                                                <option key={day} value={day}>{day}</option>
                                            ))}
                                        </select><br />
                                    </div>
                                    <span className="emessage">{brMessage}</span>
                                </td>
                            </tr>
                            <tr>
                                <th><label for="contact">연락처</label></th>
                                <td>
                                    <div className='numberbox'>
                                        <input type="text" className="number" name="frist_phone_number" value="010" size="1" readOnly />
                                        <input onChange={onChangeNumber} id="contact" type="text" className="number" name="second_phone_number" value={number} size="1" minLength="3" maxLength="4" required />
                                        <input onChange={onChangeNumber2} type="text" className="number" name="last_phone_number" value={number2} size="1" minLength="3" maxLength="4" required /><br />
                                        <span className="emessage">{nuMessage}</span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th><label htmlfor="zipcode">우편번호</label></th>
                                <td><div>
                                    <input
                                        id="zipcode"
                                        type="text"
                                        className="zipcodebox"
                                        name="zipCode"
                                        placeholder="우편번호"
                                        value={userZipcode}
                                        readOnly={!isPostOpen}
                                        onChange={(e) => setIsZoneCode(e.target.value)}
                                    />
                                    <button className='zipcodebtn' onClick={togglePost}>
                                        {isPostOpen ? '우편번호 닫기' : '우편번호 찾기'}
                                    </button>
                                    {isPostOpen && (
                                        <div>
                                            <DaumPostcode onComplete={handleComplete} autoClose={true} />
                                        </div>
                                    )}
                                </div>
                                </td>
                            </tr>
                            <tr>
                                <th><label htmlfor="addr">주소</label></th>
                                <td>
                                    <input id="addr" type="text" className="updatebox" name="addr" placeholder="주소" value={userAddr} onChange={(e) => setIsAddress(e.target.value)}></input>
                                </td>
                            </tr>
                            <tr>
                                <th><label htmlfor="addr_detail">상세주소</label></th>
                                <td>
                                    <input id="addr_detail" type="text" className="updatebox" name="addr_detail" placeholder="상세주소" value={AddrD} onChange={onChangeAddrDetail} />
                                </td>
                            </tr>
                        </table>
                        <Link to="/user/mypage/myprofile"><input onClick={onSubmit} type="submit" className="updateBtn" value="수정하기" /></Link>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Update;