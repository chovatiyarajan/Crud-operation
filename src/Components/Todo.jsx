import React from "react";

const Todo = ({
  name,
  setNm,
  address,
  setAdd,
  pass,
  setPass,
  gen,
  setGen,
  hb,
  setHb,
}) => {
  const getHobby = (value, ischecked) => {
    if (ischecked) {
      return setHb([...hb, value]);
    } else {
      setHb(hb.filter((val) => val !== value));
    }
    console.log(hb);
  };

  return (
    <div>
      <table className="table table-bordered table-dark">
        <tbody>
          <tr className="text-center">
            <td>Enter User Name</td>
            <td>
              <input
                type="text"
                className="form-control form-control-sm"
                value={name}
                onChange={(e) => {
                  setNm(e.target.value);
                }}
              />
            </td>
          </tr>
          <tr className="text-center">
            <td>Enter your address</td>
            <td>
              <input
                type="text"
                className="form-control form-control-sm"
                value={address}
                onChange={(e) => setAdd(e.target.value)}
              />
            </td>
          </tr>
          <tr className="text-center">
            <td>Enter User Password</td>
            <td>
              <input
                type="password"
                className="form-control form-control-sm"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
            </td>
          </tr>
          <tr className="text-center">
            <td>Select Gender</td>
            <td className="d-flex " style={{ justifyContent: "space-around" }}>
              <div>
                <input
                  type="radio"
                  id="Male"
                  value="Male"
                  checked={gen === "Male"}
                  name="gender"
                  onChange={(e) => setGen(e.target.value)}
                />
                <label htmlFor="Male" style={{ margin: "0px 10px" }}>
                  Male
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="female"
                  value="Female"
                  checked={gen === "Female"}
                  name="gender"
                  onChange={(e) => setGen(e.target.value)}
                />
                <label htmlFor="female" style={{ margin: "0px 10px" }}>
                  Female
                </label>
              </div>
            </td>
          </tr>
          <tr className="text-center">
            <td>Enter your Hobby</td>
            <td className="d-flex " style={{ justifyContent: "space-around" }}>
              <div>
                <input
                  type="checkbox"
                  id="cricket"
                  value="Cricket"
                  checked={hb.includes("Cricket")}
                  name="hooby"
                  onChange={(e) => getHobby(e.target.value, e.target.checked)}
                />
                <label htmlFor="cricket" style={{ margin: "0px 10px" }}>
                  Cricket
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="tabel-tenish"
                  value="Table-Tenish"
                  checked={hb.includes("Table-Tenish")}
                  name="gender"
                  onChange={(e) => getHobby(e.target.value, e.target.checked)}
                />
                <label htmlFor="tabel-tenish" style={{ margin: "0px 10px" }}>
                  Tabel-Tenish
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="other"
                  value="Other"
                  checked={hb.includes("Other")}
                  name="gender"
                  onChange={(e) => getHobby(e.target.value, e.target.checked)}
                />
                <label htmlFor="other" style={{ margin: "0px 10px" }}>
                  Other
                </label>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Todo;
