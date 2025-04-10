import React from 'react'

const Card = () => {
    return (
        <div className="d-flex">
            <div className='w-25 m-5'>
                <div className="card" >
                    <img src="https://www.w3schools.com/bootstrap4/img_avatar5.png" className="card-img-top w-100" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            <div className='w-25 m-5'>
                <div className="card" >
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEVuwFiENLyNB-shYDCdNatuMMWY_SXQwibdhpFsbWDayA4kgNkFK0nev89uFW9bUyzwI&usqp=CAU" className="card-img-top w-100" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            <div className='w-25 m-5'>
                <div className="card" >
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBuR6SHiyjO8-ZSTWkRGQWlRRZhdUmIA4L9TCrCsfFq0F-V09H-S1IEexKqDjFxjnRAcY&usqp=CAU" className="card-img-top w-100" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card