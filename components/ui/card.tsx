// components/ui/Card.tsx
export const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-xl border p-4 shadow-md bg-white dark:bg-gray-800">
    {children}
  </div>
);
