import { bindActionCreators } from "@reduxjs/toolkit";
import {  useDispatch } from "react-redux";

import { detailActions } from "../srore/detail/detail.slice";

const allActions = {
	...detailActions
}

export const useActions = () => {
	const dispatch = useDispatch()

	return bindActionCreators(allActions, dispatch)
}