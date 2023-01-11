import { useEffect, useState } from "react";
import  CardData  from "../components/interfaces/cardData";
import data from "../data/data";

function useInfoCards() {
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [cardItems, setcardItems] = useState<CardData[]>([]);
  const [totalCardItems, setTotalCardItems] = useState<number>(0);

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
    }, 1000);
  }, []);

  return {
    cardItems,
    loading,
    error,
    totalCardItems,
  };
}

export default useInfoCards;
