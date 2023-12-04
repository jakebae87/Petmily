function Findid() {
    // const onKeyDown =(e)=>{
    //     if(e.keyCode === 13){
    //         onSubmit();
    //     }
    // };
    const onSubmit = (e) => {
        e.preventDefault();

    }

    return (
        <div className="Findid">
            <div className="cateTitle">
                <h1>아이디찾기</h1>
            </div>

            <div className="find_ID">
                <form method="post" action="#" id="findID-form">
                    <input type="text" className="findidbox" name="userName" placeholder="이름" />
                    <input type="email" className="findidbox" name="userEmail" placeholder="이메일" />
                    <input onClick={onSubmit} type="submit" className="findBtn" value="아이디찾기" />
                </form>
            </div>
        </div>
    )
};

export default Findid;