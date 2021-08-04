import React from 'react';
import { useState } from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Toggle = () => {


    const [visible, setVisible] = useState(false);

    const icon = (
        <i icon = { visible ? "eye-slash" : "eye"} onClick = {() => setVisible(visible => !visible)}/>
    )

    const inputType = visible ? "text" : "password";


    return [inputType, icon]
};

export default Toggle;