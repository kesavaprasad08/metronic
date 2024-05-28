import React, { createContext, useContext, useState, ReactNode } from 'react';
import { IProfileDetails, profileDetailsInitValues as initialValues } from '../app/modules/accounts/components/settings/SettingsModel'

interface UserContextProps {
    user: IProfileDetails | null;
    setUser: React.Dispatch<React.SetStateAction<IProfileDetails | null>>;
  }

  const UserContext = createContext<UserContextProps | undefined>(undefined);

  export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<IProfileDetails | null>(null);
    return (
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    );
  };
  
  export const useUser = (): UserContextProps => {
    const context = useContext(UserContext);
    if (context === undefined) {
      throw new Error('useUser must be used within a UserProvider');
    }
    return context;
  };
