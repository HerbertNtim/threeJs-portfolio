const SkillButton = ({ name, isBeam = false, onClick }) => {
  return (
    <button onClick={onClick} className={`s-btn`}>
      {isBeam && (
        <span className="relative flex h-2 w-2">
          <span className="btn-ping"></span>
          <span className="t-btn-ping_dot"></span>
        </span>
      )}
      {name}
    </button>
  );
};

export default SkillButton;
