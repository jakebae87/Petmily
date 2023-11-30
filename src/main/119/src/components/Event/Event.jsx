import "./Event.css";
import EventItem from "./EventItem";
import { useState } from "react";

import mockData from "../MockData/MockData_Event";

function Event() {
    const [selectedFilter, setSelectedFilter] = useState("all");
    const handleFilterChange = (e) => {
        setSelectedFilter(e.target.value);
    };

    const date = new Date();

    mockData.map(item => {
        if (date < item.startDate) { return item.progress = "beforeOpen"; }
        else if (date <= item.endDate) { return  item.progress = "onGoing"; }
        else { return item.progress = "closed"; }
    });

    const filteredData = mockData.filter(item => {
        if (selectedFilter === "all") { return true; }
        if (selectedFilter === "onGoing") { return date >= item.startDate && date <= item.endDate; }
        if (selectedFilter === "closed") { return date > item.endDate; }
        if (selectedFilter === "beforeOpen") { return date < item.startDate; }
        return true;
    });

    return (
        <div className="Event">
            <div className="cateTitle">
                <h1>이벤트</h1>
            </div>
            <hr />

            <div id="eventTop">
                <span>펫밀리의 이벤트와 혜택을 알아보세요!</span>
                <select name="searchPeriod" onChange={handleFilterChange}>
                    <option value="all">전체목록</option>
                    <option value="onGoing">진행중</option>
                    <option value="closed">마감</option>
                    <option value="beforeOpen">진행전</option>
                </select>
            </div>

            <div id="eventList">
                {filteredData.map(it => (<EventItem key={it.id} {...it} />))}
            </div>
        </div>
    );
}

export default Event;