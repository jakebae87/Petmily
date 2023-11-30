const EventItem = ({ id, title, content, startDate, endDate, progress, img }) => {
    let isGoing = "";

    switch (progress) {
        case "beforeOpen": isGoing = "진행전"; break;
        case "onGoing": isGoing = "진행중"; break;
        case "closed": isGoing = "마감"; break;
        default: break;
    }

    return (
        <div className={`events ${progress}`}>
            <div>
                <img src={img} alt="이벤트 사진" />

                <div>
                    <p className="eventTitle">{title}</p>
                    <p className="eventContent">{content}</p>

                    <div className="eventInfo">
                        <span>
                            {isGoing}
                            {console.log(progress)}
                        </span>
                        <h5>{startDate.toLocaleDateString()} ~ {endDate.toLocaleDateString()}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventItem;