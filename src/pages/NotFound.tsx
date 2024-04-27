import { DotLottiePlayer } from "@dotlottie/react-player";
import { Link } from "react-router-dom";

export interface INotFoundProps {}

export const NotFound = () => {
  return (
    <div className="not-found">
      <DotLottiePlayer
        src="https://lottie.host/e38bda2a-37f8-46ce-aeb8-41611c7cc2a7/MKfUaNzeNf.lottie"
        background="transparent"
        // speed="1"
        // style="width: 300px; height: 300px"
        loop
        autoplay
      ></DotLottiePlayer>
      <h2>
        Hmmm. This doesn't seem to exist. <Link to="/">Go Home</Link>
      </h2>
    </div>
  );
};

export default NotFound;
