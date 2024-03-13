import SyncLoader from 'react-spinners/SyncLoader';

import { LoadingContainer } from './Loading.styles';

export const LoadingComponent = () => {
  return (
    <LoadingContainer>
      <SyncLoader size={30} />
    </LoadingContainer>
  );
};
