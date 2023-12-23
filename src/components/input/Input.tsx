import { InformationCircleIcon, EnvelopeIcon, EyeIcon } from '@heroicons/react/24/solid';

type Props = {
  label: string;
  placeholder: string;
  border_hover: 'border-[2px] hover:border-blue-700';
  border_focus: 'border-[2px] focus-within:border-blue-700';
  validation: boolean;
  disabled: boolean;
};

export default function Input({
  label,
  placeholder,
  border_hover,
  border_focus,
  validation,
  disabled,
}: Props) {
  return (
    <div
      className={`bg-grey-200 grid grid-cols-none grid-rows-3 gap-y-[8px] h-[130px] w-[420px] px-[10px]`}
    >
      <div className="flex items-end justify-between">
        <div className="flex w-fit flex-row">
          <label className="text-[16px] pr-[5px]" htmlFor={placeholder}>
            {label}
          </label>
          <span className="w-[20px] h-[20px]">
            <InformationCircleIcon />
          </span>
        </div>
        <span className="text-[16px] text-grey-700">Optional</span>
      </div>
      <div
        className={`flex justify-between bg-white w-[400px] h-[40px] rounded-[8px] border-[1px] border-solid 
        ${
          validation ? 'border-grey-500' : 'border-[2px] border-red-300'
        } px-[16px] py-[8px] ${border_hover} ${border_focus} ${
          disabled &&
          'border-transparent bg-blue-100 hover:border-transparent focus-within:border-transparent'
        }`}
      >
        <div className="flex w-[90%] flex-row">
          <div className="w-[24px] h-[24px]">
            <EnvelopeIcon
              className={`${!validation && 'text-red-300'} ${
                disabled && 'text-blue-300 opacity-55'
              }`}
            />
          </div>
          <input
            className={`pl-[10px] outline-none bg-transparent outline-0 w-[90%] ${
              disabled && 'disabled:opacity-55 disabled:placeholder:text-blue-300'
            }`}
            disabled={disabled}
            type="text"
            id={placeholder}
            placeholder={placeholder}
          />
        </div>
        <div className="w-[24px] h-[24px] text-grey-700">
          <EyeIcon className={`${disabled && 'text-blue-300 opacity-55'}`} />
        </div>
      </div>
      <span className={`text-[16px] ${validation ? 'text-grey-700' : 'text-red-300'}`}>
        This information is required
      </span>
    </div>
  );
}
