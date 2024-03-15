import SyncLoader from 'react-spinners/SyncLoader';

import { LoadingContainer } from './Loading.styles';
import { FunctionComponent } from 'react';

interface LoadingProps {
  message?: string;
}

export const Loading: FunctionComponent<LoadingProps> = ({ message }) => {
  return (
    <LoadingContainer>
      {message && <p>{message}</p>}
      <SyncLoader size={30} />
    </LoadingContainer>
  );
};
