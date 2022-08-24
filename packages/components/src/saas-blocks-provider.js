import React, { createContext } from 'react'
import { NativeBaseProvider, extendTheme } from "native-base"
import { DEFUALT_THEME } from './themes'


const SaasBlocksContext = createContext({})

const SaasBlocksProvider = ({ children, theme }) => {
    const _theme = extendTheme(theme ? theme : DEFUALT_THEME)
    return (
        <NativeBaseProvider theme={_theme}>
            <SaasBlocksContext.Provider value={null}>
                {children}
            </SaasBlocksContext.Provider>
        </NativeBaseProvider>
    )
}

export { SaasBlocksContext, SaasBlocksProvider }
