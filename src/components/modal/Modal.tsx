import { InformationCircleIcon, EnvelopeIcon, EyeIcon } from '@heroicons/react/24/solid';
import Button from '../button/Button';

type Props = {
  title: string;
};

export default function Modal({ title }: Props) {
  return (
    <div className={`flex justify-center items-center w-[700px] h-[550px] bg-grey-200`}>
      <div
        className={`flex flex-col w-[600px] h-[450px] justify-between rounded-lg shadow-md bg-white shadow-grey-300`}
      >
        <div className="px-[30px] pt-[20px] text-sm text-grey-500">
          <div className={`w-[100%] h-[50px] flex justify-between`}>
            <span className="text-xl text-black font-bold">{title}</span>
            <div className={`text-5xl font-light leading-[0.5] cursor-pointer`}>&times;</div>
          </div>
          <div className={`h-[280px] flex flex-col justify-between`}>
            <div
              className={`flex justify-center items-center w-[100%] h-[80px] rounded-lg border-2 border-dashed border-grey-300`}
            >
              Replace component
            </div>
            <div
              className={`flex justify-center items-center w-[100%] h-[80px] rounded-lg border-2 border-dashed border-grey-300`}
            >
              Replace component
            </div>
            <div
              className={`flex justify-center items-center w-[100%] h-[80px] rounded-lg border-2 border-dashed border-grey-300`}
            >
              Replace component
            </div>
          </div>
        </div>
        <div
          className={`w-[100%] h-[80px] flex justify-between items-center px-[30px] mt-6 border-t-2 border-blue-150`}
        >
          <div
            className={`w-[70%] h-[40px] flex justify-center items-center rounded-lg border-2 border-dashed border-grey-300 text-sm text-grey-500`}
          >
            Replace component
          </div>
          <div className={`w-[30%] h-[40px%] flex justify-around items-center`}>
            <button className="w-20 h-[100%] border-2  border-transparent text-black bg-transparent rounded-md focus:border-2 focus:text-red-900 focus:border-red-900">
              Cancel
            </button>
            <button className="w-20 h-[100%] border-2  border-transparent text-white bg-blue-800 rounded-md  focus:bg-green-700">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
