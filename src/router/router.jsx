import Layouts from "../layouts/Layouts";
import privateRouter from "./privateRouter";
import publicRouter from "./publicRouter";
import { createBrowserRouter } from "react-router-dom";

// create browser router
const router = createBrowserRouter([
  {
    element: <Layouts />,
    children: [...publicRouter, ...privateRouter],
  },
]);

// export browser router
export default router;
