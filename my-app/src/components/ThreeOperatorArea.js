import styled from "styled-components";
import {useState} from "react";
import './ThreeOperatorArea.css'

const ThreeOperatorArea = () => {
    const [active, setActive] = useState('component1')
    const handleActive = (component) =>{
        if(component !== active){
            setActive(component)
        }
    }
    return <div className="three-operator">
        <div className="floor1st">
            <button className={`button ${active==='component1' ? 'active' : ''}`}
                 onClick={()=>handleActive('component1')}>빨강</button>
            <button className={`button ${active==='component2' ? 'active' : ''}`}
                 onClick={()=>handleActive('component2')}>파랑</button>
        </div>
        <div className="floor2nd">
        {active === 'component1' ? (<div>빨강 버튼을 클릭하여 렌더링된 컴포넌트</div>) :
            <div>파랑 버튼을 클릭하여 렌더링된 컴포넌트</div>
        }
        </div>
    </div>
}
export default ThreeOperatorArea

const StyledTabArea = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 8.64vw;
    height: 3.68vh;
    max-height: 38px;
    background-color: transparent;
`
const StyledTabButton=styled.button`
  width: 4.16vw;
  height: 100%;
  font-size: 0.83vw;
  letter-spacing: -0.02vw;
  background: transparent;
  color: #8385a2;
  border:none;
  border-bottom: ${({active}) => active ? '1px solid #7a45ff' : '1px solid transparent'};
`