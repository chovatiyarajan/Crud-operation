import React, { useState } from 'react'


export default function Textarea(props) {

    const handalUPClick = () => {
        console.log('onclick');
        let changeToUp = txt.toUpperCase();
        setTxt(changeToUp);
    }

    const handalLPClick = () => {
        console.log('onclick');
        let changeToUp = txt.toLowerCase();
        changeToUp.trim();
        setTxt(changeToUp);
    }

    const handalOnChang = (event) => {
        console.log("on change");
        setTxt(event.target.value);
    }


    const [txt, setTxt] = useState('');

    return (
        <>
            <h1>{props.title}</h1>
            <div className="container text-center">
                <div className="mb-3 mt-5">
                    <textarea className="form-control" id="exampleFormControlTextarea1" value={txt} onChange={handalOnChang} rows="8" placeholder='Enter text hear'></textarea>
                    <button className="btn btn-primary mt-5 mx-1" onClick={handalUPClick}>Change to UpperCase</button>
                    <button className="btn btn-primary mt-5 mx-1" onClick={handalLPClick}>Change to LowerCase</button>
                </div>
            </div>
            <div className="container mt-4">
                <h2>Total Words and Character</h2>
                <p>There are Total {!!  txt.length ? txt.split(' ').length : 0} Words and {txt.length} Character</p>
            </div>
        </>
    )
}
