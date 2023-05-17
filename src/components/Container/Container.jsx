import Toast from 'components/Toast/Toast';

const Container = ({ children }) => {
  return (
    <>
      <Toast />
      <div className={'container'}>
        <div className={'wrapper'}>{children}</div>
      </div>
    </>
  );
};

export default Container;
