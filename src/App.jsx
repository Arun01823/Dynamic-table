
import React from 'react';
import Table from '../src/components/Table/Table';

const App = () => {
  const sampleData = [
    { name: 'Alice', age: 25, profession: 'Engineer' },
    { name: 'Bob', age: 30, profession: 'Designer' },
    { name: 'Charlie', age: 28, profession: 'Teacher' }
  ];

  return (
    <div>
      <h1>Dynamic Table</h1>
      <Table data={sampleData} />
    </div>
  );
};

export default App;
