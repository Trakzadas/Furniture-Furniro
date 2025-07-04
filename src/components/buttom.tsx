import React from "react";

interface ButtonProps {
  title?: string;
  className?: string;
  icon?: string | React.ReactNode;
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean; // Adicione esta linha
}

const Button: React.FC<ButtonProps> = ({
  title,
  className = "",
  icon,
  children,
  type = "button",
  disabled = false, // Adicione valor padrão
  ...props
}) => {
  const renderIcon = () => {
    if (!icon) return null;

    if (typeof icon === "string") {
      return <img src={icon} alt="" className="mr-2 h-4 w-4" />;
    }

    return <span className="mr-2 inline-flex items-center">{icon}</span>;
  };

  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center ${className}`}
      disabled={disabled} // Passe para o botão
      {...props}
    >
      {renderIcon()}
      {title}
      {children}
    </button>
  );
};

export default Button;