import clsx from "clsx";

type skillType = {
  name: string;
  class?: string;
};

export default function Skill(params: skillType) {
  return (
    <p className={clsx(params.class != null ? params.class : "text-sm", " flex w-max py-1 px-2 text-gray-300 rounded-lg border border-gray-500 bg-blend-color-burn")}>
      {params.name}
    </p>
  );
}
