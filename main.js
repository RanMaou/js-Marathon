const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';

function countA(row) 
{
    let a = 0;
    for (let i = 0; i < row.length; i++) 
    { 
      if (row[i]=='а') a++;
    }
    return a;
}

function getRow(firstRow, secondRow) 
{
   if (countA(firstRow) > countA(secondRow)) return firstRow;
    else return secondRow;
}

console.log(getRow(firstRow, secondRow)); // мама мыла раму