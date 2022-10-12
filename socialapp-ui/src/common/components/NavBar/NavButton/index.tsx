import "./navButton.css";

interface NavButtonProps {
  label: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  customClassName?: boolean;
  className?: string;
}

export const NavButton = (props:NavButtonProps) => {
  const { label, onClick, style, customClassName, className } = props;

  const getClassNames = () => {
    const classNames = ["nav_nav-button"];

    if (customClassName && className) {
      classNames.push(className);
    }

    return classNames.join(" ");
  };


  return (
    <button
      className={getClassNames()}
      onClick={onClick}
      style={style}>
      {label}
    </button>
  );
};
