import { ReactNode } from 'react';

type SelectProps<T extends string> = {
  value: T;
  onChange: (newValue: T) => void;
  options: OptionType<T>[];
  label: string;
};

export interface OptionType<T extends string> {
  value: T;
  label: string;
}

export const Select = <T extends string>({
  value,
  onChange,
  options,
  label,
}: SelectProps<T>): ReactNode => (
  <label className="flex gap-2 flex-col">
    <span className="">{label}</span>
    <select
      value={value ?? ''}
      onChange={(event) => onChange(event.target.value as T)}
      className="border border-black p-2 min-w-40"
    >
      {options.map((option) => (
        <option value={option.value ?? ''} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </label>
);
