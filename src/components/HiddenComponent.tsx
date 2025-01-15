const HiddenComponent = ({
  hidden,
  children,
}: {
  hidden: boolean;
  children: React.ReactNode;
}) => {
  if (hidden) return null;
  return children;
};

export default HiddenComponent;
