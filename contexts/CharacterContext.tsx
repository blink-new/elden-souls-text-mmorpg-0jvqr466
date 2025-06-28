import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

const CharacterContext = createContext<any>(null);

export const CharacterProvider = ({ children }: { children: React.ReactNode }) => {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data, error } = await supabase
          .from('characters')
          .select('*')
          .eq('user_id', user.id)
          .single();
        if (error) {
          console.error('Error fetching character:', error);
        } else {
          setCharacter(data);
        }
      }
    };

    fetchCharacter();
  }, []);

  return (
    <CharacterContext.Provider value={{ character }}>
      {children}
    </CharacterContext.Provider>
  );
};

export const useCharacter = () => useContext(CharacterContext);