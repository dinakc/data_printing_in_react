function getEachInfo(obj) {
 return (
    <div className="property" key={obj}>
        <div className="picture"></div>
        <div>{obj.name}</div>
        <div>Age:{obj.age}</div>
        <div>Hobbies:{obj.hobbies}</div>
        <div>{obj.bio}</div>
    </div>
    

 )
 }

 export default getEachInfo;