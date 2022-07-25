import { useParams } from "react-router-dom";
import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { retrieveTurfs } from "../../slices/turfs";
const TurfDetail = () => {
  const turfs = useSelector((state) => state.turfs);
  const dispatch = useDispatch();
  const initFetch = useCallback(() => {
    dispatch(retrieveTurfs());
  }, [dispatch]);
  useEffect(() => {
    initFetch();
  }, [initFetch]);
  const { turfId } = useParams();
  const turf = turfs?.find((turf) => turf.id === Number(turfId));

  return (
    <div className="m-4">
      <h3 className="font-bold text-center text-2xl">Name: {turf.name}</h3>
      <p className="text-xl">Address: {turf.address}</p>

    </div>
  );
};

export default TurfDetail;
