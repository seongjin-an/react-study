import {Component} from "react";

class ClassComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: 'ansj',
            email: 'aaa@gmail.com',
            phone: '010-1111-2222'
        }
    }
    render(){
        const {name, email, phone} = this.state
        const {num} = this.props
        return(<div>
            <div>
                {num} 은 부모 컴포넌트로 받은 props 입니다.
            </div>
            <div>
                {name} {email} {phone} 은 하위 컴포넌의 state입니다.
            </div>
        </div>
        )
    }
}
export default ClassComponent