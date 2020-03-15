import React, {useState} from 'react'
import {Layout} from 'antd'
import { useEffect } from 'react'

const { Sider } = Layout
const SiderComponent = ({isCollapsed, setIsCollapsed, setBreakpoint}) => {
    const [collapseWidth, setCollapseWidth] = useState(80)
    const handleBreakPoint = (breakpoint) => {
        setBreakpoint(breakpoint)
        breakpoint ? setCollapseWidth(0) : setCollapseWidth(80)
    }
    return (
        <Sider 
            collapsible 
            breakpoint={'sm'} 
            onBreakpoint={handleBreakPoint} 
            collapsedWidth={collapseWidth}
            collapsed={isCollapsed} 
            onCollapse={(collapsed) => setIsCollapsed(collapsed)}
            style={{height: '100vh'}}
        >
            Sider
        </Sider>
    )
}

export default SiderComponent
