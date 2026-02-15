import { useState } from "react";

export interface Tab {
  key: string;
  label: string;
}

export function useTabFilter<T extends { category: string }>(
  items: T[],
  tabs: Tab[],
) {
  const [activeKey, setActiveKey] = useState(tabs[0].key);

  const filteredItems = items.filter((item) => item.category === activeKey);

  return { activeKey, setActiveKey, filteredItems, tabs };
}
