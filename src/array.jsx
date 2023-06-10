function getEachInfo(obj) {


 return (
    <div className="property" key={obj}>
        <span>{obj.name}</span>
        <span>Age:{obj.age}</span>
        <span>Hobbies:{obj.hobbies}</span>
        <span>{obj.bio}</span>

    </div>
 )
 }

 export default getEachInfo;