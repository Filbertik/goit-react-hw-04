// import s from "./Loader.module.css";
// import { HashLoader } from "react-spinners";

// const Loader = () => {
//   return (
//     <div className={s.loader}>
//       <HashLoader color="#36d7b7" size={100} />
//     </div>
//   );
// };

// export default Loader;
import { ClipLoader } from "react-spinners";
import s from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={s.loader}>
      <ClipLoader size={50} color="#36d7b7" />
    </div>
  );
};

export default Loader;
