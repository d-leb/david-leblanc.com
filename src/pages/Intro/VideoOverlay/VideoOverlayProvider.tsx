import React, { createContext, useEffect, useReducer, Dispatch, ReactNode } from 'react'

export const textTimeout = 2.8

interface State {
  greeting: number
  greetingList: string[]
  showText: boolean
}

export const initialState: State = {
  greeting: 0,
  greetingList: [],
  showText: false,
}

interface Action {
  type: 'GREETINGLIST_SET' | 'GREETING_INCREMENT' | 'SHOW_TEXT'
  value?: string[]
}

export const VideoOverlayReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'GREETINGLIST_SET':
      return { ...state, greetingList: action.value ?? [] }
    case 'GREETING_INCREMENT':
      return {
        ...state,
        greeting: state.greeting >= state.greetingList.length - 1 ? 0 : state.greeting + 1,
        showText: false,
      }
    case 'SHOW_TEXT':
      return { ...state, showText: true }
    default:
      return state
  }
}

interface Store {
  dispatch: Dispatch<Action>
  state: State
}

export const ContextProvider = createContext<Store>({
  dispatch: () => null,
  state: {
    ...initialState,
  },
})

interface Props {
  children: ReactNode
  greetingList: string[]
}

export const VideoOverlayProvider = ({ children, greetingList }: Props) => {
  const [state, dispatch] = useReducer(VideoOverlayReducer, { ...initialState })
  const { greeting, showText } = state

  useEffect(() => {
    dispatch({ type: 'GREETINGLIST_SET', value: greetingList })
  }, [])

  useEffect(() => {
    setTimeout(() => dispatch({ type: 'GREETING_INCREMENT' }), textTimeout * 1000)
  }, [greeting])

  useEffect(() => {
    if (!showText) {
      dispatch({ type: 'SHOW_TEXT' })
    }
  }, [showText])

  return (
    <ContextProvider.Provider value={{ state, dispatch }}>
      {state.greetingList.length > 0 && children}
    </ContextProvider.Provider>
  )
}
