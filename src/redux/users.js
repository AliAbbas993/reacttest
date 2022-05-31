import { createSlice } from '@reduxjs/toolkit'

const data = [
    {
        id: 1,
        title: 'Beetlejuice',
        year: '1988',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
    {
        id: 12,
        title: 'Beetlejuice',
        year: '1988',
    },
    {
        id: 23,
        title: 'Ghostbusters',
        year: '1984',
    },
    {
        id: 14,
        title: 'Beetlejuice',
        year: '1988',
    },
    {
        id: 21,
        title: 'Ghostbusters',
        year: '1984',
    },
    {
        id: 15,
        title: 'Beetlejuice',
        year: '1988',
    },
    {
        id: 27,
        title: 'Ghostbusters',
        year: '1984',
    },
    {
        id: 16,
        title: 'Beetlejuice',
        year: '1988',
    },
    {
        id: 29,
        title: 'Ghostbusters',
        year: '1984',
    },
    {
        id: 12,
        title: 'Beetlejuice',
        year: '1988',
    },
    {
        id: 24,
        title: 'Ghostbusters',
        year: '1984',
    },
]

const initialState = {
  user : {
      id: null,
      name: ""
  }
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
      edituser: (state , action) => {
            console.log(state , action)
      },
    incrementByAmount: (state, action) => {
        console.log(state , action);
    //   state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { edituser } = userSlice.actions

export default userSlice.reducer