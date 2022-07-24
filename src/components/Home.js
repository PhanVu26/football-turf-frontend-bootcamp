
import React, {useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  retrieveTurfs,
} from "../slices/turfs";
export default function Home() {
  const turfs = useSelector(state => state.turfs);
  const dispatch = useDispatch();
  const initFetch = useCallback(() => {
    dispatch(retrieveTurfs());
  }, [dispatch])
  useEffect(() => {
    initFetch()
  }, [initFetch])
  return (
    <div>
      <h4>Turfs List</h4>
      <ul>
        {turfs &&
          turfs.map((turf, index) => (
            <li
              key={index}
            >

              {turf.name}<br></br>

            </li>
          ))}
      </ul>
    </div>
  );
}
