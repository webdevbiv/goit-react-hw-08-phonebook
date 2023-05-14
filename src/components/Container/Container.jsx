const Container = ({ children }) => {
  return (
    <div className={'container'}>
      {
        //NOTE - 'container' has background image
      }
      <div className={'wrapper'}>{children}</div>
    </div>
  );
};

export default Container;
