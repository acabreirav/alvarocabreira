import { Shell } from "@/components/Shell";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata("en");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Shell locale="en">{children}</Shell>;
}
