type IconT = {
  iconName: string;
  className?: string;
  onClick?: any;
  size?: string;
};

const Icon = ({ iconName, className, onClick, size = "24px" }: IconT) => {
  return (
    <span
      className={`${className} material-symbols-outlined flex self-center p-2]`}
      onClick={onClick}
      style={{ fontSize: size }}>
      {iconName}
    </span>
  );
};

export default Icon;
