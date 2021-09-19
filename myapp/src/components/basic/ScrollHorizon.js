import ScrollMenu from 'react-horizontal-scrolling-menu'//"^0.7.10"
import {useEffect, useRef, useState} from "react"

let list=[
    { name: "item1" },
    { name: "item2" },
    { name: "item3" },
    { name: "item4" },
    { name: "item5" },
    { name: "item6" },
    { name: "item7" },
    { name: "item8" },
    { name: "item9" },
    { name: "item10" },
    { name: "item11" },
    { name: "item12" },
    { name: "item13" },
    { name: "item14" },
    { name: "item15" },
    { name: "item16" },
    { name: "item17" },
    { name: "item18" },
    { name: "item19" },
    { name: "item20" },
    { name: "item21" },
    { name: "item22" },
    { name: "item23" },
    { name: "item24" },
    { name: "item25" }
]

const MenuItem = ({ text, key, selected }) => {
    return <div style={{border: '1px solid black', backgroundColor: key===selected ? 'blue' : 'white'}}>{text}</div>;
};

export const Menu = (list, selected) => (
    list.map(el => {
        const { name } = el;
        return <MenuItem text={name} key={name} selected={selected}/>
    })
);

const ScrollHorizon = () => {


    const [selected, setSelected] = useState('item1')
    const [dataItem, setDataItem] = useState(Menu(list, selected));
    useEffect(() => {
        console.log('selected:', selected)
        setDataItem(Menu(list, selected))
    }, [selected])
    const arrowLeft = <div>{'<'}</div>
    const arrowRight = <div>{'>'}</div>
    const scrollRef = useRef(null)
    return (
            <div style={{width:'40vw', height:'10vh'}}>
                {
                    dataItem &&
                    <ScrollMenu
                        ref={scrollRef}
                        data={dataItem}
                        alignCenter={true}
                        arrowLeft={arrowLeft}
                        arrowRight={arrowRight}
                        clickWhenDrag={true}
                        dragging={true}
                        hideArrows={true}
                        hideSingleArrow={true}
                        onFirstItemVisible={() => console.log("first item visible")}
                        onLastItemVisible={() => console.log("last item visible")}
                        onSelect={(key) => {
                            console.log(`${key} is selected`)
                            setSelected(key)
                        }}
                        onUpdate={(translate) => console.log(`translate: ${translate}`)}
                        scrollToSelected={false}
                        selected={selected}
                        transition={+0.3}
                        translate={0}
                        wheel={true}
                    />
                }
            </div>
    );
}

export default ScrollHorizon;