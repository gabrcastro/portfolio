type skillType = {
  name: string;
};

export default function Skill(params: skillType) {
  return (
    <p className="flex w-max py-1 px-2 text-sm text-gray-300 rounded-lg border border-gray-500 bg-blend-color-burn">
      {params.name}
    </p>
  );
}
