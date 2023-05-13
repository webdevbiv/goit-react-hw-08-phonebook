const Container = ({ children }) => {
  return (
    <div className={'container'}>
      <div className={'wrapper'}>{children}</div>
    </div>
  );
};

export default Container;
