
const Map = () => {
    const names = ['봄', '여름', '가을', '겨울']
    return<ul>
        {names.map((name, index) => {
            return <li key={index}>{name}</li>
        })}
    </ul>
}
export default Map