import Info from "../contexts/Info";
import Person from "../contexts/Person";

const Infos = () => {
    return<Info.Consumer>
        {info=>
            <Person.Consumer>
                {person =>
                    <div style={{backgroundColor: info.color, color: 'white'}}>
                        name: {person.name}, age: {person.age}
                    </div>
                }
            </Person.Consumer>
        }
    </Info.Consumer>
}
export default Infos