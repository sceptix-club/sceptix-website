import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MainContext } from "../../Context/MainContext";

function AddEvent() {
  const navigate = useNavigate();
  const { isAdmin } = useContext(MainContext);
  const [newEventName, setNewEventName] = useState("");
  const [newEventDate, setNewEventDate] = useState("");
  const [newEventInfo, setNewEventInfo] = useState("");
  const [newEventImage, setNewEventImage] = useState();
  const [imgName, setImgName] = useState("");

  useEffect(() => {
    if (!isAdmin) {
      navigate("/login");
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("newEventName", newEventName);
    formData.append("newEventDate", newEventDate);
    formData.append("newEventInfo", newEventInfo);
    formData.append("newEventImage", newEventImage);
    formData.append("imgName", imgName);
    try {
      let response = await fetch("http://localhost:3000/api/addEvent", {
        method: "POST",
        body: formData,
      });
      let data = await response.json();
      alert(data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-full flex-col">
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setNewEventName(e.target.value)}
            className=" rounded-lg m-2 p-2 w-full"
            type="text"
            placeholder="Event Name"
          />
          <br></br>
          <input
            onChange={(e) => setNewEventDate(e.target.value)}
            className=" rounded-lg m-2 p-2 w-full"
            type="date"
            placeholder="Event Date"
          />
          <br></br>
          <textarea
            onChange={(e) => setNewEventInfo(e.target.value)}
            className=" rounded-lg m-2 p-2 w-full h-40"
            type="text"
            placeholder="Event Info"
          />
          <br></br>
          <input
            onChange={(e) => {
              setNewEventImage(e.target.files[0]);
            }}
            className="text-white center m-2 mx-0 p-2"
            type="file"
          />
          <input
            onChange={(e) => setImgName(e.target.value)}
            type="text"
            placeholder="Image File Name "
            className=" rounded-lg m-2 mx-0 p-2 w-auto"
          />
          <br />
          <button
            type="submit"
            className="text-black text-2xl m-2 py-1 px-3 rounded-lg font-semibold bg-slate-200  hover:bg-slate-800 hover:text-white transition duration-300 ease-in-out "
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default AddEvent;
