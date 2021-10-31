import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

const StartButton = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <NavLink to="/Question1"><button className="btn-start" type="submit" onClick={() => setOpen}>Start Quiz</button></NavLink>
        
    )
};

export default StartButton;
