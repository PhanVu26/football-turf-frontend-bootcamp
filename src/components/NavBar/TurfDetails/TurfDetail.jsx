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
    <div>
      <p>Name: {turf.name}</p>
      <p>Address: {turf.address}</p>
      {/* <p>{thisTurf.description}</p> */}
    </div>
  );
};

export default TurfDetail;
