import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'tracks',
  initialState: { currentTrack: {title: "", id: "", tracksArr: [], titleArr: [], audioArr: []}}
,
reducers: {
  setTrackItem: (state, action) => {
    state.currentTrack.title = action.payload.items[0].snippet.title
    state.currentTrack.id = action.payload.items[0].id
    state.currentTrack.img = action.payload.items[0].snippet.thumbnails.medium.url
  }, 
  addToQueue:(state, action) => {
    state.currentTrack.tracksArr = [...state.currentTrack.tracksArr, action.payload.items[0].snippet.thumbnails.medium.url]
    state.currentTrack.titleArr = [...state.currentTrack.titleArr, action.payload.items[0].snippet.title]
    state.currentTrack.audioArr = [...state.currentTrack.audioArr, action.payload.items[0].id]
    }
  }
})

export default slice.reducer
export  const {setTrackItem, addToQueue} = slice.actions
export const selectTrackItemId = state => state.tracks.currentTrack.id


export const fetchTracks = (id) => 
async dispatch => {
  const YTB_KEY = process.env.REACT_APP_YTB_API_KEY;
  const url ="https://www.googleapis.com/youtube/v3/videos?";
  fetch(`${url}&part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=AIzaSyANYGCd7fL0V8f9iLuAXbQxVCw4wDlmzHs`)
    .then(response =>  response.json())
    .then((data => {
      dispatch(setTrackItem(data))
      dispatch(addToQueue(data))
    })).catch ((error)=>{
    console.log(error)
  }) 
}

