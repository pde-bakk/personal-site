interface TabToggleProps {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const TabToggle = ({ tabs, activeTab, onTabChange }: TabToggleProps) => {
  return (
    <div className="flex gap-1 mb-8">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`relative px-5 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
            activeTab === tab
              ? "text-white"
              : "text-slate_body hover:text-white/80"
          }`}
        >
          {tab}
          <span
            className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full bg-gradient-to-r from-accent_purple to-accent_cyan transition-all duration-300 ${
              activeTab === tab ? "w-3/4 opacity-100" : "w-0 opacity-0"
            }`}
          />
        </button>
      ))}
    </div>
  );
};

export default TabToggle;
