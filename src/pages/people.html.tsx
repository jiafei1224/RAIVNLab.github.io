import { useEffect } from "react";
import { navigate } from "gatsby";

const OldPage = () => {
  useEffect(() => {
    navigate("/people");
  }, []);

  return null;
};

export default OldPage;
