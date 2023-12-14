type Expertise = {
  skill: string;
};

function ExpertiseCard(props: Expertise) {
  return <div className={`bg-primary-2 text-center text-sm py-2 rounded-md`}>{props.skill}</div>;
}

export default ExpertiseCard;
