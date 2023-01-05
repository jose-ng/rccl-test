import { useEffect, useState } from "react";
import data from "../data/data";

function useInfoCards() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [cardItems, setcardItems] = useState<any>([]);
  const [totalCardItems, setTotalCardItems] = useState(0);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      try {
        setcardItems(data);
        setTotalCardItems(data.length);
        setLoading(false);
      } catch (error: any) {
        setError(error);
        setLoading(false);
      }
    }, 3000);
  }, []);

  return {
    cardItems,
    loading,
    error,
    totalCardItems,
  };
}

export default useInfoCards;
