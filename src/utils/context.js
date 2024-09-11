import { createContext } from "react";

export const SWContext = createContext({
    page: 'Home',        
    setPage: () => {}    
  });