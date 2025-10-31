import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const Navigate = useNavigate();

  return (
    <section className="flex flex-col items-center justify-center text-center px-6 p-[100px_0]">
      <h1 className="text-9xl font-extrabold text-[#FFA155] mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-gray-800 mb-2">
        Page Not Found
      </h2>
      <p className="text-gray-500 mb-8 max-w-md">
        The page you’re looking for doesn’t exist or has been moved.
      </p>

      <button
        className="px-6 py-3 cursor-pointer text-white bg-[#FFA155] rounded-lg hover:bg-[#FFA155] transition"
        onClick={() => Navigate(-1)}
      >
        Go Back
      </button>
    </section>
  );
}
