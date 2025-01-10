import React, { useEffect } from 'react';
import { useGlobal } from './hooks';
import Triangle1 from '../models/Triangle1';
import Triangle2 from '../models/Triangle2';
import Triangle3 from '../models/Triangle3';

const Question = () => {

  const {activeQuestion} = useGlobal()

  useEffect(()=>{

  }, [activeQuestion])

  return (
    <>
      {
        activeQuestion === 'a' && <Triangle1 />
      }
      {
        activeQuestion === 'b' && <Triangle2 />
      }
      {
        activeQuestion === 'c' && <Triangle3 />
      }
    </>
  );
};

export default Question;
