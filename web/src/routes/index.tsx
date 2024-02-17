import { BrowserRouter } from "react-router-dom";
import { CostumerRoutes } from "./costumer.routes";

export function Routes() {
  return(
    <BrowserRouter>
    
      <CostumerRoutes/>
    
    </BrowserRouter>
  );
};