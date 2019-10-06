import {init, RematchRootState} from '@rematch/core'
import models from './Models/models'

// Variables
const store = init({
    models,
    redux: {
        rootReducers: { RESET_APP: () => undefined }
    }
})

// Export types
export type State = RematchRootState<typeof models>

export default store