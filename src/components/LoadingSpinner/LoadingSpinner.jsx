import { RingSpinnerOverlay } from 'react-spinner-overlay';

const LoadingSpinner = () => {
  return (
    <>
      <RingSpinnerOverlay
        size={60}
        borderWidth={6}
        color="rgb(13,110,253)"
        overlayColor="rgba(16,17,18,0.65)"
      />
    </>
  );
};

export default LoadingSpinner;
