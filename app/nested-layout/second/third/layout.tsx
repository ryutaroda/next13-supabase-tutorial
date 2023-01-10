import React from 'react';

export default function ThirdLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="mt-3 text-center">
      <p>Layout 3</p>
      {children}
    </main>
  );
}