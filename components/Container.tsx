import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Container: React.FC<ContainerProps> = ({
  children,
  className,
  style,
}) => {
  return (
    <div
      className={`container ${className}`}
      style={{ ...style, maxWidth: "1200px", padding: '0 0' }}
    >
      {children}
    </div>
  );
};

export default Container;
