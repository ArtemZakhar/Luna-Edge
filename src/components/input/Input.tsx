import { InformationCircleIcon, EnvelopeIcon, EyeIcon } from '@heroicons/react/24/solid';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { coachNameAdded } from '../slices/CoachSlice';

type Style = {
  border_hover: string;
  border_focus: string;
  disabled: boolean;
};

export type InputProps = {
  label: string;
  placeholder: string;
  id: number;
  style: Style;
};

type ValidationProps = {
  required: boolean;
  minLength: boolean;
  maxLength: boolean;
};

export default function Input({ label, placeholder, style, id }: InputProps) {
  const dispatch = useDispatch();
  const messages = {
    required: 'This information is required',
    minLength: 'Please type minimum 2 letters',
    maxLength: 'Maximum length is 12 letters',
  };

  const initialMessageState = {
    required: true,
    minLength: true,
    maxLength: true,
  };

  const [validation, setValidation] = useState<ValidationProps>(initialMessageState);
  const inputRef = useRef<HTMLInputElement>(null);

  const { border_hover, border_focus, disabled } = style;

  // validation

  function handleBlur(e: any) {
    if (e.target.value.length < 2) {
      setValidation((prev) => {
        return { ...prev, minLength: false, required: false };
      });
    }
  }

  function checkTextInput(e: any) {
    addEventListener('keypress', function (e) {
      if (e.key.match(/[^a-zA-Z]/gi)) {
        e.preventDefault();
      }
    });
    addEventListener('input', () => {
      e.target.value = e.target.value.replace(/[а-яА-Я]/gim, '');
    });
    if (e.target.value.length === 12) {
      setValidation((prev) => {
        return { ...prev, maxLength: false, required: false };
      });
    }
    if (
      e.target.value.length >= 2 &&
      e.target.value.length < 12 &&
      (!validation.maxLength || !validation.minLength)
    ) {
      setValidation((prev) => {
        const setAllToTrue: any = {};
        for (let key in prev) {
          setAllToTrue[key] = true;
        }
        return { ...setAllToTrue, required: false };
      });
    }
    dispatch(coachNameAdded({ id, text: e.target.value }));
  }

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
              className={`${
                validation.minLength && validation.maxLength ? 'text-grey-700' : 'text-red-300'
              } ${disabled && 'text-blue-300 opacity-55'}`}
            />
          </div>
          <input
            ref={inputRef}
            minLength={2}
            maxLength={12}
            onBlur={handleBlur}
            required
            onChange={(e) => checkTextInput(e)}
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
      <span
        className={`text-[16px] ${
          validation.minLength && validation.maxLength ? 'text-grey-700' : 'text-red-300'
        }`}
      >
        {validation.required && messages.required}
        {!validation.minLength && messages.minLength}
        {!validation.maxLength && messages.maxLength}
      </span>
    </div>
  );
}
