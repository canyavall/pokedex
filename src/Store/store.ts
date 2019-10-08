import {init, RematchRootState} from '@rematch/core'
import models from './Models/models'
import createRematchPersist from '@rematch/persist'

const persistPlugin = createRematchPersist({
    whitelist: ['mypokemon'],
    throttle: 100,
    version: 1,
})

// Variables
const store = init({
    models,
    plugins: [persistPlugin]
})

// Export types
export type State = RematchRootState<typeof models>

export default store