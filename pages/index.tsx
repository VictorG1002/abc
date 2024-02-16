import React, { useState } from 'react';

import Button from '@/components/Button';
import Select from '@/components/Select';


export default function Home() {

  const [ selected, setSelected ] = useState('')

  return (
    <>
      <Button>a</Button>

      <Select id='a' onChange={(e) => setSelected(e.target.value)} value={selected}>
        <option>a</option>
        <option>b</option>
        <option>c</option>
      </Select>
    </>
  );
}
