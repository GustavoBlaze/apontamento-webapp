import React, { useContext } from 'react';

import CoreButton from '@components/core/Button';
import { AuthContext } from '@contexts/AuthContext';

function LogoutButton() {
  const { signOut } = useContext(AuthContext);

  return <CoreButton onClick={signOut}>Sair</CoreButton>;
}

export default React.memo(LogoutButton);
