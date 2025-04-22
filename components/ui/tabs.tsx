import * as React from "react";

export function Tabs({ children }: any) {
  return <div>{children}</div>;
}

export function TabsList({ children, className }: any) {
  return <div className={`flex ${className || ""}`}>{children}</div>;
}

export function TabsTrigger({ value, children, onClick }: any) {
  return (
    <button
      className="px-4 py-2 text-sm border-b-2 border-transparent hover:border-blue-500"
      onClick={() => onClick?.(value)}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, children }: any) {
  return <div className="mt-4">{children}</div>;
}