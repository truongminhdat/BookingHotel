import React, { useCallback, useEffect, useState } from "react";
import "./featureProperty.css";
import Logo from "../../../assets/hotelsontra.png";
import { getlimitHotel } from "../../../services/hotelService";

const FeatureProperty = () => {
  const [users, setUsers] = useState([]);

  const fetch = useCallback(async () => {
    const fetchUser = async () => {
      const { data } = await getlimitHotel();
      if (data) {
        setUsers(data.hotels);
      }
    };
    fetchUser();
  }, [users]);
  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="fp">
      {users.map((user) => (
        <div className="fpItem" key={user.id}>
          <img src={user.url} className="img-fluid" />
          <span className="fpName">{user.name}</span>
          <span className="fpCity">{user.city}</span>
          <span className="fpPrice">{user.typ}</span>
          <div className="fpRating">
            <button>8.9</button>
            <span>Đánh giá</span>
          </div>
        </div>
      ))}
    </div>
  );
};
export default FeatureProperty;
