import { transform } from "lodash";
import { cssOverride } from "react";
import {
  BarLoader,
  BeatLoader,
  BounceLoader,
  CircleLoader,
  ClimbingBoxLoader,
  ClipLoader,
  ClockLoader,
  DotLoader,
  FadeLoader,
  GridLoader,
  HashLoader,
  MoonLoader,
  PacmanLoader,
  PropagateLoader,
  PuffLoader,
  PulseLoader,
  RingLoader,
  RiseLoader,
  RotateLoader,
  ScaleLoader,
  SkewLoader,
  SquareLoader,
  SyncLoader,
} from "react-spinners";

const Loading = ({ color, ...props }) => {
  const css = {
    display: "block",
    margin: "10px auto ",
    borderColor: "black",
    transform: "translateX(-50%)",
  };
  return (
    <PacmanLoader
      color={color || "#eee"}
      loading={true}
      size={20}
      cssOverride={css}
      aria-label="Loading Spinner"
      data-testid="loader"
      speedMultiplier={1}
    />
  );
};

export default Loading;
