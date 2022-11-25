//Composant "BulletPoint"

//Import des feuilles de style
import "../../style/CSS/bulletpoint.css"


//Fonction "BulletPoint"
function BulletPoint({ count, countTotal, index, setindex }) {
  
 
  let arrayOfBulletPoint = [];

    
  const circleFill = <div id={count} className="bulletpoint__circle circle-fill"></div>;


  for (let i = 0; i <= countTotal; i++){
    
    const circleBlank = <div key={i} id={i}  className="bulletpoint__circle" onClick={()=>setindex(i)}></div>;

        
  arrayOfBulletPoint.push(circleBlank)
    
  }

  arrayOfBulletPoint.splice(count, 1, circleFill)

  return (
    <div className="bulletpoint">
      {arrayOfBulletPoint}
    </div>
  );
}

export {BulletPoint}