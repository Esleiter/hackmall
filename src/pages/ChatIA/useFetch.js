import axios from "axios";
import { useState } from "react";

export const useFetchIa = () => {
  const [isLoading, setIsLoading] = useState(false);
  const fetch = async ({ prompt }) => {
    setIsLoading(true);
    const modelId = "text-davinci-003";
    const apiKeyUser = "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";
    try {
      const dataPrompt = {
        prompt: `Eres el ayudante virtual para mi tienda en el siguiente parrafo se te va hacer un pedido y quiero que entregues en formato json los productos para buscar en mi tienda. ${prompt}`,
        max_tokens: 1000,
        temperature: 0.3,
      };
      const { data } = await axios.post(
        `https://api.openai.com/v1/engines/${modelId}/completions`,
        { ...dataPrompt },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKeyUser}`,
          },
        }
      );
      return { data };
    } catch (error) {
      return error;
    } finally {
      setIsLoading(false);
    }
  };

  return { fetch, isLoading };
};
