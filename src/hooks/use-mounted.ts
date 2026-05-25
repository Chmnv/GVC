"use client";

import { useEffect, useState } from "react";

/**
 * Returns `true` only after the component has mounted on the client.
 * Useful for hydration of components that rely on `window`/`document`.
 */
export function useMounted(): boolean {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}
