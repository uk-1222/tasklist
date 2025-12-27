interface Props {
  onEnter: (input: string) => void;
}

const TextInput = ({ onEnter }: Props) => {
  return (
    <div
      contentEditable="plaintext-only"
      className="
        size-full
        bg-gray-50 
        p-2
        rounded-sm
        text-gray-700 
        inset-shadow-sm/15
        focus:outline-none
        focus:inset-shadow-[0_0_5px_rgba(4,4,4,0.4)]
        focus:transition-shadow duration-250
        wrap-break-word
        overflow-auto
        "
      onInput={(e) => {
        onEnter(e.currentTarget.textContent);
      }}
    />
  );
};

export default TextInput;
