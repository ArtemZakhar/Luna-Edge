import { XMarkIcon } from '@heroicons/react/24/solid';

type Props = {
  label: string;
  BG_color:
    | 'bg-grey-100'
    | 'bg-orange-100'
    | 'bg-orange-200'
    | 'bg-yelow-100'
    | 'bg-green-100'
    | 'bg-blue-150'
    | 'bg-blue-200'
    | 'bg-blue-400'
    | 'bg-blue-500'
    | 'bg-blue-700'
    | 'bg-violet-100'
    | 'bg-pink-100'
    | 'bg-black';
  border_radius:
    | 'rounded-sm'
    | 'rounded'
    | 'rounded-md'
    | 'rounded-lg'
    | 'rounded-xl'
    | 'rounded-2xl'
    | 'rounded-3xl';
  text_color:
    | 'text-white'
    | 'text-black'
    | 'text-blue-400'
    | 'text-blue-500'
    | 'text-blue-700'
    | 'text-blue-900'
    | 'text-orange-800'
    | 'text-orange-900'
    | 'text-yelow-700'
    | 'text-green-700'
    | 'text-violet-700'
    | 'text-grey-300'
    | 'text-pink-900';
  dot: boolean;
  close: boolean;
  dot_and_close_color:
    | 'text-grey-500'
    | 'text-orange-700'
    | 'text-yelow-500'
    | 'text-green-500'
    | 'text-blue-600'
    | 'text-blue-450'
    | 'text-violet-500'
    | 'text-pink-500'
    | 'text-grey-300'
    | 'text-orange-800';
};

export default function Badge({
  label,
  BG_color,
  border_radius,
  text_color,
  dot,
  close,
  dot_and_close_color,
}: Props) {
  return (
    <div
      className={`flex justify-center relative text-xl font-bold items-center h-fit w-fit px-[10px] py-[2px] ${BG_color} ${label} ${text_color} ${dot} ${close} ${border_radius}`}
    >
      {dot && (
        <div className={`flex translate-y-[-120%] text-6xl leading-4 ${dot_and_close_color}`}>
          .
        </div>
      )}
      <div className="px-[10px]">{label}</div>
      {close && (
        <div
          className={`flex translate-y-[-15%] cursor-pointer font-light rotate-45 text-[42px] leading-4 ${dot_and_close_color}`}
        >
          +
        </div>
      )}
    </div>
  );
}
