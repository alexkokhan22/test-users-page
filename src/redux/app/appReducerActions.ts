//actions
export const loadingDataAC = (loading: boolean) => ({type: 'APP/LOADING-DATA', loading} as const)

//actions types
export type ActionsAppReducerType = setUsersActionType

type setUsersActionType = ReturnType<typeof loadingDataAC>

