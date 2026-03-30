import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'your_supabase_url';
const supabaseAnonKey = 'your_supabase_anon_key';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const useSupabase = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data: responseData, error: responseError } = await supabase
        .from('your_table')
        .select('*');

      if (responseError) setError(responseError);
      else setData(responseData);
    };

    fetchData();
  }, []);

  return { data, error };
};

export default useSupabase;
