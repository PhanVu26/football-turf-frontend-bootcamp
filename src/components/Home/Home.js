import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { retrieveTurfs } from "../../slices/turfs";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
const Home = () => {
  const turfs = useSelector((state) => state.turfs);
  const dispatch = useDispatch();
  const initFetch = useCallback(() => {
    dispatch(retrieveTurfs());
  }, [dispatch]);
  useEffect(() => {
    initFetch();
  }, [initFetch]);

  return (
    <div className="mx-3 text-center overflow-y-auto overflow-x-hidden">
      <h4 className="my-2 font-bold text-center text-2xl">Turfs List</h4>
      <ul className="flex flex-wrap justify-center">
        {turfs &&
          turfs.map((turf, index) => (
            <Card
              key={index}
              sx={{ maxWidth: 450 }}
              className="mb-3 border-2 border-black mx-2 drop-shadow-md hover:drop-shadow-2xl hover:duration-300"
              id="rounded-btn"
            >
              <CardMedia
                component="img"
                height="100"
                image={turf.image}
                alt={turf.name}
              />
              <CardContent className="">
                <Typography gutterBottom variant="h5" component="div">
                  {turf.name}
                </Typography>

                <Typography variant="body1" color="" className="">
                  {turf.address}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </Typography>
              </CardContent>
              <CardActions className="flex flex-col items-center mb-3">
                <Button variant="contained"  >
                  <Link to={`/turfs/${turf.id}`}>View {turf.name}</Link>
                </Button>
              </CardActions>
            </Card>
          ))}
      </ul>
    </div>
  );
};

export default Home;
