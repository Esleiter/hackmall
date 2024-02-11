import axios from "axios";
import { useState } from "react";

export const useFetchIa = () => {
  const [isLoading, setIsLoading] = useState(false);
  const fetch = async ({ prompt }) => {
    setIsLoading(true);
    const modelId = "gpt-3.5-turbo-instruct";
    const apiKeyUser = `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`;
    const formatProducsAvailables = "['Product-1', 'Product-2',...'Product-n']";
    try {
      const dataPrompt = {
        prompt: `${prompt}. Responde SOLO EN ESTE FORMATO ESPECIFICO ${formatProducsAvailables}`,
        max_tokens: 200,
        temperature: 0.1,
      };
      const { data } = await axios.post(
        `https://apiopenai.esleiter.com/v1/engines/${modelId}/completions`,
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
