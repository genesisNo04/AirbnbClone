import React, { Component, useState } from 'react';
import './Search.css';
import {DateRangePicker} from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { Button } from '@mui/material';
import PeopleIcon from "@mui/icons-material/People"
import { useNavigate } from 'react-router-dom';

//Date picker component
function Search() {
    const navigate = useNavigate();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    }

    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    return (
        <div className="search">
            <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
            <h2>
                Number of guests
                <PeopleIcon />
            </h2>
            <input min={0} defaultValue={2} type="number"/>
            <Button onClick={() => navigate("/search")}>Search Airbnb</Button>
        </div>
    );
}

export default Search;