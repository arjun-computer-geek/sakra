import { ThreeCircles } from "react-loader-spinner";
import "./LoaderStyle.css";

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <ThreeCircles
        height="80"
        width="80"
        radius="9"
        color="#skyblue"
        ariaLabel="three-dots-loading"
        visible={true}
      />
    </div>
  );
};
export { Loader };
