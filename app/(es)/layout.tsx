import { Shell } from "@/components/Shell";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata("es");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Shell locale="es">{children}</Shell>;
}
