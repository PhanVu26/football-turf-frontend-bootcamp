import React, { useEffect, useState } from "react";
import TurfService from "../../services/TurfService";
import CardCustom from "./CardCustom"

const Home = () => {
  const [turfs, setTurfs] = useState([]);
  useEffect(() => {
    TurfService.getMainTurfs().then((response) => {
      const { data } = response;
      setTurfs(data);
    });
  }, []);

  return (
    <div className="width-screen flex justify-center">
      <div className="flex flex-col gap-6  mx-6 mb-6">
        <div className="text-2xl font-bold mt-3">Danh sách các sân bóng:</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {
            turfs.map((turf, index) => (
              <CardCustom key={index} turf={turf} />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Home;
