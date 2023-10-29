import { useFormik } from "formik";
import { useFetchIa } from "./useFetch";

const Chat = () => {
  const { fetch } = useFetchIa();
  const { handleSubmit, values, handleChange } = useFormik({
    initialValues: {
      prompt: "",
    },
    onSubmit: async ({ prompt }) => {
      const { data } = await fetch({prompt});
      console.log('aaaa', data)
    },
  });
  console.log(values);
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-center m-5">
        <div className="relative w-full lg:w-[600px] h-[50px] text-base text-primeColor bg-white flex items-center gap-2 justify-between px-6 rounded-xl">
          <textarea
            name="prompt"
            className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor resize-none"
            type="text"
            rows={2}
            onChange={handleChange}
            value={values.prompt}
            placeholder="Que deseas comprar?"
          />
        </div>
        <button
          type="submit"
          className="bg-primeColor text-white text-lg font-bodyFont w-[185px] h-[50px] hover:bg-black duration-300 font-bold"
        >
          Buscar
        </button>
      </div>
    </form>
  );
};

export default Chat;
