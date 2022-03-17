import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import Navigator from '../src/navigation';

const EntryPoint: React.FC = () => {
  return (
    <PaperProvider>
      <Navigator />
    </PaperProvider>
  );
};

export default EntryPoint;
