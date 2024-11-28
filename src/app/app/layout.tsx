import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="grid grid-cols-[16rem_1fr] gap-4">
      <aside className="border-r border-border">test</aside>
      <main>{children}</main>
    </div>
  );
}
