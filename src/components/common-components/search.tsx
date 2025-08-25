import { IoMdSearch } from "react-icons/io";
interface CommonSearchProps {
  placeholder?: string;
  onChange?: (value: string) => void;
}

export const CommonSearch = ({ placeholder, onChange }: CommonSearchProps) => {
  return (
    <div className="relative w-full">
      <IoMdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
      <input
        type="text"
        placeholder={placeholder || "Search..."}
        className="border p-2 pl-10 rounded w-full h-[10%] focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => onChange && onChange(e.target.value)}
      />
    </div>
  );
};
