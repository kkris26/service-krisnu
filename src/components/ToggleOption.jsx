import Toggle from "./Toggle";

const ToggleOption = ({ label, value, onToggle }) => {
  return (
    <div className="flex gap-4 items-center justify-between">
      <p className="text-2xl text-white ">{label}</p>
      <Toggle value={value} handler={onToggle} />
    </div>
  );
};

export default ToggleOption;
