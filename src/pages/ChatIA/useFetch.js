import axios from "axios";

export const useFetchIa = () => {
  const fetch = async ({ prompt }) => {
    const modelId = "text-davinci-003";
    const apiKeyUser = "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";
    try {
      const dataPrompt = {
        prompt,
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
    }
  };

  return { fetch };
};
