import {init, RematchRootState} from '@rematch/core'
import * as models from './models'

// Variables
const store = init({
    models,
    redux: {
        rootReducers: { RESET_APP: () => undefined }
    }
})

// Exports
export const dispatch: any = store.dispatch;

// Export types
export type Store = typeof store
export type Dispatch = typeof store.dispatch
export type State = RematchRootState<typeof models>
export type Models = typeof models

export default store