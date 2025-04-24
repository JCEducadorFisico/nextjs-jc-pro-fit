// components/ui/Tabs.tsx
export const Tabs = ({ tabs, selected, onSelect }: {
  tabs: string[];
  selected: string;
  onSelect: (tab: string) => void;
}) => (
  <div className="flex space-x-4 mb-4">
    {tabs.map(tab => (
      <button
        key={tab}
        onClick={() => onSelect(tab)}
        className={`px-4 py-2 rounded-xl ${selected === tab ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
      >
        {tab}
      </button>
    ))}
  </div>
);
