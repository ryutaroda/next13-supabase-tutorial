import React from 'react';

export default function SecondLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="mt-3 text-center">
      <p>Layout 2</p>
      {children}
    </main>
  );
}