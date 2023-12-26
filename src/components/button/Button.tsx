import { ChevronDownIcon, StarIcon } from '@heroicons/react/24/solid';

export type Props = {
  label: string;
  BG_hover_color:
    | 'hover:bg-blue-200'
    | 'hover:bg-blue-300'
    | 'hover:bg-blue-400'
    | 'hover:bg-blue-500'
    | 'hover:bg-blue-700'
    | null;
  hover_text_color:
    | 'hover:text-blue-200'
    | 'hover:text-blue-300'
    | 'hover:text-blue-400'
    | 'hover:text-blue-500'
    | 'hover:text-blue-700'
    | null;
  hover_border_color:
    | 'hover:border-blue-200'
    | 'hover:border-blue-300'
    | 'hover:border-blue-400'
    | 'hover:border-blue-500'
    | 'hover:border-blue-700'
    | 'hover:border-blue-900'
    | 'hover:border-transparent';

  BG_focus_border: 'focus:border-2' | null;
  focus_border_color:
    | 'focus:border-blue-200'
    | 'focus:border-blue-300'
    | 'focus:border-blue-400'
    | 'focus:border-blue-500'
    | 'focus:border-blue-700'
    | 'focus:border-blue-900'
    | 'focus:border-transparent';
  focus_text_color:
    | 'focus:text-blue-200'
    | 'focus:text-blue-300'
    | 'focus:text-blue-400'
    | 'focus:text-blue-500'
    | 'focus:text-blue-700'
    | 'focus:text-blue-900'
    | null;
  BG_focus_color:
    | 'focus:bg-blue-200'
    | 'focus:bg-blue-300'
    | 'focus:bg-blue-400'
    | 'focus:bg-blue-500'
    | 'focus:bg-blue-700'
    | 'focus:bg-blue-900'
    | null;
  BG_active_color:
    | 'active:bg-blue-200'
    | 'active:bg-blue-300'
    | 'active:bg-blue-400'
    | 'active:bg-blue-500'
    | 'active:bg-blue-700'
    | null;
  active_text_color:
    | 'active:text-blue-200'
    | 'active:text-blue-300'
    | 'active:text-blue-400'
    | 'active:text-blue-500'
    | 'active:text-blue-700'
    | 'active:text-blue-900'
    | null;
  active_border_color:
    | 'active:border-blue-200'
    | 'active:border-blue-300'
    | 'active:border-blue-400'
    | 'active:border-blue-500'
    | 'active:border-blue-700'
    | 'active:border-blue-900'
    | 'active:border-transparent';

  text_color:
    | 'text-white'
    | 'text-black'
    | 'text-blue-300'
    | 'text-blue-400'
    | 'text-blue-500'
    | 'text-blue-700'
    | 'text-blue-900';
  border_color: 'border-transparent' | 'border-blue-700' | 'border-blue-900';
  BG_color: 'bg-blue-100' | 'bg-blue-900' | 'white';
  disabled: boolean;
};

export default function Button({
  label,
  BG_color,
  BG_hover_color,
  hover_text_color,
  hover_border_color,
  BG_focus_border,
  focus_text_color,
  focus_border_color,
  BG_focus_color,
  BG_active_color,
  active_text_color,
  active_border_color,
  text_color,
  border_color,
  disabled,
}: Props) {
  return (
    <div
      className={`${disabled ? 'bg-blue-100' : BG_color} ${
        disabled ? 'text-blue-400' : text_color
      } ${
        disabled ? 'border-transparen' : border_color
      }  relative w-40 h-10 font-medium border-2 px-4 py-2 rounded-md ${BG_active_color} ${active_text_color}  ${active_border_color} ${focus_border_color} ${BG_focus_color} ${BG_focus_border} ${focus_text_color} focus:ring-0 focus:outline-none ${BG_hover_color} ${hover_text_color} ${hover_border_color} 2xl:h-12 xl:h-10 lg:h-9 md:h-8 md:px-2 md:py-1 md:font-2xl md:w-30 sm:h-7 sm:px-2 sm:py-0 sm:font-1xl sm:w-25`}
    >
      <StarIcon color={`${text_color}`} className="w-7 absolute sm:w-5" />
      {label}
      <ChevronDownIcon
        color={`${text_color}`}
        className="w-5 absolute right-6 top-3 lg:right-8 sm:w-4 sm:top-1 sm:right-7"
      />
    </div>
  );
}
