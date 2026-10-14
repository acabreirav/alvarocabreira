"use client";

import { useState } from "react";

export function CopyEmail({ email, copy, copied }: { email: string; copy: string; copied: string }) {
  const [done, setDone] = useState(false);

  async function onClick() {
    try {
      await navigator.clipboard.writeText(email);
      setDone(true);
      setTimeout(() => setDone(false), 2000);
    } catch {
      // Si el navegador no deja copiar, el correo igual queda visible y seleccionable.
    }
  }

  return (
    <button type="button" className="btn" onClick={onClick} aria-live="polite">
      {done ? copied : copy}
    </button>
  );
}
