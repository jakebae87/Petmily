const EventItem = ({ it }) => {
    let progress = "";
    let isGoing = "";

    const date = new Date();

    if (date < it.event_start) { progress = "beforeOpen"; }
    else if (date <= it.event_end) { progress = "onGoing"; }
    else { progress = "closed"; }

    switch (progress) {
        case "beforeOpen": isGoing = "진행전"; break;
        case "onGoing": isGoing = "진행중"; break;
        case "closed": isGoing = "마감"; break;
        default: break;
    }

    return (
        <div className={`events ${progress}`}>
            <div>
                <img src={it.event_imagepath} alt="이벤트 사진" />

                <div>
                    <p className="eventTitle">{it.event_name}</p>
                    <p className="eventContent">{it.event_description}</p>

                    <div className="eventInfo">
                        <span>
                            {isGoing}
                        </span>
                        {/* <h5>{it.event_start.toLocaleDateString()} ~ {it.event_end.toLocaleDateString()}</h5> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventItem;