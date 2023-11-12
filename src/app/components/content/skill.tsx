type skillType = {
  name: string;
};

export default function Skill(params: skillType) {
  return (
    <p className="flex w-max p-2 rounded-lg border border-gray-500 bg-blend-color-burn">
      {params.name}
    </p>
  );
}
