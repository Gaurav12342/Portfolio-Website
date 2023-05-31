import { FC, memo, PropsWithChildren } from "react";

import {
  Skill as SkillType,
  SkillGroup as SkillGroupType,
} from "../../../data/dataDef";

export const SkillGroup: FC<PropsWithChildren<{ skillGroup: SkillGroupType }>> =
  memo(({ skillGroup }) => {
    const { name, skills } = skillGroup;
    return (
      <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
        <span className="mb-2 text-left text-xl font-bold">{name}</span>
        <div className="flex flex-row flex-wrap gap-x-3 gap-y-3">
          {skills.map((skill, index) => (
            <Skill key={`${skill.name}-${index}`} skill={skill} />
          ))}
        </div>
      </div>
    );
  });

SkillGroup.displayName = "SkillGroup";

export const Skill: FC<{ skill: SkillType }> = memo(({ skill }) => {
  const { name } = skill;
  return (
    <div className="flex flex-row">
      <div className="overflow-hidden rounded-xl bg-neutral-300 p-3 pt-2">
        <span className="text-sm font-medium">{name}</span>
      </div>
    </div>
  );
});

Skill.displayName = "Skill";
