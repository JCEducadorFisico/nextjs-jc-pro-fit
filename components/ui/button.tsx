import * as React from "react";

export function Button({ children, className, ...props }: any) {
  return (
    <button
      className={`bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded ${className || ""}`}
      {...props}
    >
      {children}
    </button>
  );
}