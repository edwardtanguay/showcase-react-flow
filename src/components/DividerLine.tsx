
export const DividerLine = () => {
  return (
    <svg
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}
    >
      <line x1="10%" y1="83%" x2="90%" y2="83%" stroke="tomato" strokeWidth="2" />
    </svg>
  );
};