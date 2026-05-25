"use client";

import { useEffect, useState } from "react";

/**
 * Возвращает true только после монтирования на клиенте.
 * Полезно для гидратации компонентов, использующих window/document.
 */
export function useMounted(): boolean {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}
