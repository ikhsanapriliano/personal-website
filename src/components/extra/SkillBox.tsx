type Skill = {
  skill: string;
};

function SkillBox(props: Skill) {
  return <p className={`bg-secondary-2 rounded-md py-[6px] px-3`}>{props.skill}</p>;
}

export default SkillBox;
