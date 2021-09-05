import {ChangeEvent, Component} from "react";
import Header from "../../organisms/header/Header";
import Content from "../../organisms/content/Content";
import './Business.css'
import {getInfoFail, getInfoRequest, getInfoSuccess} from "../../../store/base/infoAction";
import {connect} from "react-redux";
import {IPost} from "../../../store/base/infoReducer";
import {CombinedState, Dispatch} from "redux";
import axios from "axios";

export enum ETab{
    shop='shop', cart='cart', ship='ship'
}
export interface IItem{
    desc:string
    price: number
    quantity: number
}
export interface IShip{
    name: string
    address: string
}
export interface IState{
    tabs: ETab[]
    tab: ETab
    items: IItem[]
    ship: IShip,
    id: number
}
export interface IBusinessProps{
    posts: IPost[]
    progress: boolean
    error: string
    getDataRequest: Function
    getDataSuccess: Function
    getDataFail: Function
}
class Business extends Component<IBusinessProps, IState>{
    state = {
        tabs: [ETab.shop, ETab.cart, ETab.ship],
        tab: ETab.shop,
        items: [
            {desc: '모자', price: 10000, quantity: 0},
            {desc: '양말', price: 5000, quantity: 0},
            {desc: '바지', price: 50000, quantity: 0},
            {desc: '책', price: 20000, quantity: 0},
            {desc: '펜', price: 2000, quantity: 0}
        ],
        ship: {name: '', address:''},
        id: 1
    }

    handleTabs = (tab:ETab) => {
        console.log('tab:', tab)
        this.setState({
            ...this.state,
            tab: tab
        })
    }
    handleStuff = (event: ChangeEvent<HTMLInputElement>, stuff: IItem) => {
        this.setState({
            ...this.state,
            items: this.state.items.map(
                item => item.desc === stuff.desc ? {...item, quantity: parseInt(event.target.value)}:item
            )
        })
    }
    handleShip = (event:ChangeEvent<HTMLInputElement>) => {
        if(event.target.name === 'name'){
            this.setState({
                ...this.state,
                ship: {
                    ...this.state.ship,
                    name: event.target.value
                }
            })
        }else if(event.target.name==='address'){
            this.setState({
                ...this.state,
                ship: {
                    ...this.state.ship,
                    address: event.target.value
                }
            })
        }
    }
    handleButtonClick = (id: number) => {
        this.props.getDataRequest(id)
        const response = axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        response
            .then(
                req => {
                    this.props.getDataSuccess(req.data)
                    this.setState({
                        ...this.state,
                        id: this.state.id+1
                    })
                }
            ).catch(
                error => {
                    this.props.getDataFail(true)
                }
        )
    }

    render(){
        const {posts, progress, error} = this.props;
        return(
            <div className="business-area">
                <Header tabs={this.state.tabs} items={this.state.items} handleTabs={this.handleTabs}/>
                <Content tab={this.state.tab} items={this.state.items} ship={this.state.ship} handleStuff={this.handleStuff} handleShip={this.handleShip}/>
                <div>
                    <button onClick={()=>{this.handleButtonClick(this.state.id)}}>불러오기</button>
                    <div>
                        {progress && "로딩중입니다..."}
                        {!progress && posts.map((post,index) =>{
                            return <div key={index} style={{borderBottom: '1px solid black', marginBottom: '1vh'}}>
                                <div>글번호: {post.id}</div>
                                <div>작성자: {post.userId}</div>
                                <div>제목: {post.title}</div>
                                <div>내용: {post.body}</div>
                            </div>
                        })}
                        {error && "로딩중 오류 발생... 관리자에게 문의하세용"}
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state: CombinedState<any>) => ({
    posts: state.info.posts,
    progress: state.info.progress,
    error: state.info.error
})
const mapDispatchToProps = (dispatch:Dispatch) => ({
    getDataRequest: (req:boolean) => {
        dispatch(getInfoRequest(req))
    },
    getDataSuccess: (req: IPost) => {
        dispatch(getInfoSuccess(req))
    },
    getDataFail: (req:boolean) => {
        dispatch(getInfoFail(req))
    }
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Business)