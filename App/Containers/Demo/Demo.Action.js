import { createActions } from 'reduxsauce'

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  fakeDataRequest: [],
  restApiRequest: ['username'],
  loginRequest: ['body'],
  success: ['data'],
  failure: ['error']
})

export const DemoAction = Creators
export const DemoActionCode = Types
