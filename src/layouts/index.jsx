import React, { useState } from 'react'
import {Layout} from 'antd'

import { SiderComponent } from '../components'

import { GlobalProvider } from '../components/context/globalContext'

import style from './index.module.css'
import '../styles/antd/antd.less'
import '../styles/global.css'

const { Header, Content, Footer } = Layout
const MyLayout = ({children}) => {
    const [isCollapsed, setIsCollapsed] = useState(true)
    const [breakpoint, setBreakpoint] = useState(true)

    const layoutOnClick = () => {
        breakpoint && setIsCollapsed(true)
    }
    
    return (
        <GlobalProvider>
            <Layout className={style.layoutContainer}>
                <SiderComponent setBreakpoint={setBreakpoint} isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
                <Layout onClick={layoutOnClick}>
                    <Header>Header</Header>
                    <Content>Content</Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        </GlobalProvider>
    )
}
export default MyLayout
