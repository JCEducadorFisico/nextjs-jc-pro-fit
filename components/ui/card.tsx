import * as React from "react";

export function Card({ children, className }: any) {
  return (
    <div className={`rounded-xl border bg-white shadow-sm ${className || ""}`}>
      {children}
    </div>
  );
}

export function CardContent({ children, className }: any) {
  return <div className={`p-4 ${className || ""}`}>{children}</div>;
}