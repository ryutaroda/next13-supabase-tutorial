import React from 'react';
import RefreshBtn from '../components/refresh-btn';
import BlogListStatic from '../components/blog/blog-list-static';

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex">
      <aside className={`h-[calc(100vh-56px)] w-1/4 bg-gray-200 p-2`}>
        {/*@ts-ignore*/}
        <BlogListStatic />
        <div className="flex justify-center">
          <RefreshBtn />
        </div>
      </aside>
      <main className="flex flex-1 justify-center">{children}</main>
    </section>
  );
}