import type { DynamicParts } from "@barebones/types/component";
import type { FormInput } from "@barebones/types/components/FormInput";

// Base styles

export default function FormInputLocal(): FormInput {
  const parts: DynamicParts = {
    checkbox: {
      component: {
        style: {
          default: ["absolute left-0 top-0 appearance-none peer rounded-md"],
        },
      },
      customInput: {
        style: {
          default: [
            "w-10 h-6 flex items-center flex-shrink-0 p-1 bg-gray-300 rounded-full duration-300 ease-in-out peer-checked:bg-sky-600 after:w-4 after:h-4 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-4 cursor-pointer",
          ],
        },
      },
    },
    radio: {
      component: {
        style: {
          default: [
            "appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-sky-600 checked:border-sky-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer",
          ],
        },
      },
    },
    range: {
      component: {
        style: {
          default: [
            "appearance-none w-full h-2 p-0 bg-gray-300 accent-sky-600 focus:outline-none focus:ring-0 focus:shadow-none border-rounded",
          ],
        },
      },
    },
    default: {
      component: {
        style: {
          default: [
            "border border-slate-300 rounded p-2 text-slate-700 w-full",
          ],
        },
      },
    },
  };

  return {
    parts,
  };
}
