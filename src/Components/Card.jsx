import React, { useContext, useReducer } from "react";
import { UserContext } from "../App";

const Card = () => {
  const { userName } = useContext(UserContext);

  const reducer = (state, action) => {
    if (action.type === "Ince") {
      console.log(state + 1, action);
      return state + 1;
    }
    if (action.type === "Dec") {
      console.log(state - 1, action);
      return state - 1;
    }
  };

  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <div className="mx-4 my-2 flex space-x-4 justify-center">
        <button
          className="btn"
          onClick={() => {
            dispatch({ type: "Ince" });
          }}
        >
          Increment
        </button>
        <button
          className="btn"
          onClick={() => {
            dispatch({ type: "Dec" });
          }}
        >
          Decrement
        </button>
      </div>
      <div className="text-4xl text-center">
        <h1>Value : {count}</h1>
      </div>
      <div className="d-flex">
        <div className="w-25 m-5">
          <div className="card">
            <img
              src="https://www.w3schools.com/bootstrap4/img_avatar5.png"
              className="card-img-top w-100"
              alt="card"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="/" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="w-25 m-5">
          <div className="card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEVuwFiENLyNB-shYDCdNatuMMWY_SXQwibdhpFsbWDayA4kgNkFK0nev89uFW9bUyzwI&usqp=CAU"
              className="card-img-top w-100"
              alt="Card"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="/" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="w-25 m-5">
          <div className="card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBuR6SHiyjO8-ZSTWkRGQWlRRZhdUmIA4L9TCrCsfFq0F-V09H-S1IEexKqDjFxjnRAcY&usqp=CAU"
              className="card-img-top w-100"
              alt="Card"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="/" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end px-5 py-2">
        <p>Created by : - {userName}</p>
      </div>
    </>
  );
};

export default Card;
