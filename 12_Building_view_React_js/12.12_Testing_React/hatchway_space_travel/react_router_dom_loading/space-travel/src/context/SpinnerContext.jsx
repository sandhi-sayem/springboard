import { createContext, useCallback, useState } from "react";
import Spinner from "../components/Spinner/Spinner";

export const SpinnerContext = createContext({
  isLoading: false,
  showSpinner: () => {},
  hideSpinner: () => {},
});

export const SpinnerProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  // const showSpinner = () => setIsLoading(true);
  const showSpinner = useCallback(() => setIsLoading(true));

  // const hideSpinner = () => setIsLoading(false);
  const hideSpinner = useCallback(() => setIsLoading(false));

  return (
    <SpinnerContext.Provider value={{ isLoading, showSpinner, hideSpinner }}>
      {children}
    </SpinnerContext.Provider>
  );
};
