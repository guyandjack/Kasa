//Composant "Bulletpoint"

//Import des feuilles de style
import "../../style/CSS/bulletpoint.css"

function BulletPoint({count, countTotal}){

    const circleBlank = <div className="bulletpoint__circle"></div>;
    
    const circleFill = <div className="bulletpoint__circle circle-fill"></div>;

    let arrayOfBulletPoint = [];

    for(let i=0; i<=countTotal; i++){
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