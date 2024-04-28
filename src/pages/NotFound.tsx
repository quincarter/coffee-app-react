import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Link } from "react-router-dom";

export interface INotFoundProps {}

export const NotFound = () => {
  const lottieStyles = {
    height: "20rem",
  };
  return (
    <div className="not-found">
      <DotLottieReact
        style={lottieStyles}
        src="https://lottie.host/e38bda2a-37f8-46ce-aeb8-41611c7cc2a7/MKfUaNzeNf.lottie"
        // speed="1"
        // style="width: 300px; height: 300px"
        loop
        autoplay
      ></DotLottieReact>
      <h2>Hmmm. This doesn't seem to exist.</h2>
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default NotFound;
