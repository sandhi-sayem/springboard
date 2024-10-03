import { useNavigate } from "react-router-dom";

const NavigateGoBack = () => {
  const navigate = useNavigate();
  return <button onClick={() => navigate(-1)}>NavigateGoBack</button>;
};

export default NavigateGoBack;
