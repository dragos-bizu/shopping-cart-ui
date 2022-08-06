import { APIPath } from "../../constants/APIPath";
import { useDispatch } from "react-redux";
import { setToken } from "./state/slice";
import Context from "./state/context";

const DataWrapper = () => {
  const dispatch = useDispatch();
  return <Context.Provider>{React.cloneElement(children)}</Context.Provider>;
};
