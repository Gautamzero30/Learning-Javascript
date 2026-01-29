let heroes =[
    ["ironman","spiderman","superman"],
    ["abishek","gautam","satyaki"]

];
for (let i=0;i<heroes.length;i++)
{
    console.log(`list#${i}:`,heroes[i]);

    for (let j=0;j<heroes[i].length;j++)
    {
        console.log(`j=${j},${heroes[i][j]}`)
    }
}