import axios from "axios";
import { useState } from "react";

export const useFetchIa = () => {
  const [isLoading, setIsLoading] = useState(false);
  const fetch = async ({ prompt }) => {
    setIsLoading(true);
    const modelId = "text-davinci-003";
    const apiKeyUser = "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";
    const formatProducsAvailables = "['Product-1', 'Product-2',...'Product-n']";
    try {
      const dataPrompt = {
        prompt: `${prompt}. Responde SOLO EN ESTE FORMATO ESPECIFICO ${formatProducsAvailables}`,
        max_tokens: 200,
        temperature: 0.1,
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
