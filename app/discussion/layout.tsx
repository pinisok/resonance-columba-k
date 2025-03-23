import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "토론",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
