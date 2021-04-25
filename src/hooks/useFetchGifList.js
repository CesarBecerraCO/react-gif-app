import { useState, useEffect } from 'react'
import { getGifList } from '../helpers/GetGifs';

export const useFetchGifs = ( category ) => {
  const [state, setState] = useState({ //Estado inicial
    data: [],
    loading: true
  });

  useEffect( () => { //Una vez, excepto si cambia category
    getGifList( category )
      .then( imgs => {
        setState({
          data: imgs,
          loading: false
        });
      })
    }, [category]);

  return state; // { data:[...], loading: false };
}
