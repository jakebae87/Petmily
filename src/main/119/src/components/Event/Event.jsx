import "./Event.css";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from 'axios';

import EventItem from "./EventItem";

import mockData from "../MockData/MockData_Event";

function Event() {
    
    const [eventData, setEventDataData] = useState([]);

    useEffect(() => {
        axios.get('/rsproduct/eventList')
            .then((response) => {
                setEventDataData(response.data);
                console.log(`** eventList 서버연결 성공 =>`, response.data);
            })
            .catch((err) => {
                alert(`** eventList 서버연결 실패 => ${err.message}`);
            });
    }, []);

    const [selectedFilter, setSelectedFilter] = useState("all");
    const handleFilterChange = (e) => {
        setSelectedFilter(e.target.value);
    };

    const date = new Date();

    const filteredData = eventData.filter(item => {
        if (selectedFilter === "all") { return true; }
        if (selectedFilter === "onGoing") { return date >= item.event_start && date <= item.event_end; }
        if (selectedFilter === "closed") { return date > item.event_end; }
        if (selectedFilter === "beforeOpen") { return date < item.event_start; }
        return true;
    });

    // const filteredData = mockData.filter(item => {
    //     if (selectedFilter === "all") { return true; }
    //     if (selectedFilter === "onGoing") { return date >= item.startDate && date <= item.endDate; }
    //     if (selectedFilter === "closed") { return date > item.endDate; }
    //     if (selectedFilter === "beforeOpen") { return date < item.startDate; }
    //     return true;
    // });

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
                {filteredData.map(item => (<EventItem key={item.event_id} it={item} />))}
            </div>
        </div>
    );
}

export default Event;