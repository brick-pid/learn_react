
const songs = [
  {id: 1, name: 'song1', singer: 'singer1'},
  {id: 2, name: 'song2', singer: 'singer2'},
  {id: 3, name: 'song3', singer: 'singer3'},
]

function SongList() {
  return (
    <ul>
      { songs.map(song => <li key={song.id}> { song.name} </li>)} 
    </ul>
  )
}

function App() {
  return(
    <SongList />
  )
}

export default App;