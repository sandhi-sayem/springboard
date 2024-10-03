import { createContext, useState } from "react";
import Loading from "../components/Loading/Loading";

const LoadingContext = createContext({
  isLoading: false,
  showLoading: () => {},
  hideLoading: () => {},
});

const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const showLoading = () => setIsLoading(true);

  const hideLoading = () => setIsLoading(false);

  return (
    <LoadingContext.Provider value={{ isLoading, showLoading, hideLoading }}>
      {isLoading && <Loading />}
      {children}
    </LoadingContext.Provider>
  );
};
export { LoadingContext, LoadingProvider };
