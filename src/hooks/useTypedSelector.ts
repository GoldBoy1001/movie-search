import { TypedUseSelectorHook, useSelector } from "react-redux";
import { TypeRootState } from "../srore/srore";

export const useTypedSelector: TypedUseSelectorHook<TypeRootState> = useSelector