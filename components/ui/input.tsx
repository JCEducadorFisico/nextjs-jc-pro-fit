// components/ui/Input.tsx
export const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input
    {...props}
    className="border px-3 py-2 rounded-xl w-full focus:outline-none focus:ring focus:border-blue-300"
  />
);
