import { useEffect } from "react";
import { navigate } from "gatsby";

const OldPage = () => {
  useEffect(() => {
    navigate("/research");
  }, []);

  return null;
};

export default OldPage;
