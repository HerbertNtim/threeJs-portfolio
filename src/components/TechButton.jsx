const TechButton = ({ name, isBeam = false, containerClass, onClick, isActive }) => {
  return (
    <button onClick={onClick} className={`t-btn ${containerClass}`}>
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

export default TechButton;
