import { useEffect, useState } from 'react';
import { ApolloClient, NormalizedCacheObject } from '@apollo/client';

import GetAllPeople from '../queries/GetAllPeople';
import PersonCardGrid from './PersonCardGrid';

import { Person } from '../types';

const SimpleCards = ({client}:{client:ApolloClient<NormalizedCacheObject>}) => {
  const [people, setPeople] = useState<Person[]>([])
  useEffect(() => {
    (async () => {
      const result = await client.query(GetAllPeople);
      setPeople(result.data.people);
    })();
  }, []);

  return (
    <div className="simplecards">
      <h1>ALL PEOPLE</h1>
      <p>This component is using the apollo client directly without useQuery. Therefore it does not get updated on new ratings</p>
      <PersonCardGrid people={people} />
    </div>
  )
}
export default SimpleCards;