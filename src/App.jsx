import { useState } from 'react'
import './App.css'
function App() {
    const [summonerName, setSummonerName] = useState('')

    return (

      <div>
        <h1>Quick.GG</h1>
        <p>소환사 전적 검색</p>

          <input
              type="text"
              placeholder="소환사명을 입력하세요"
              value={summonerName}
              onChange={(e) => setSummonerName(e.target.value)}
          />

        <button onClick={() => alert(summonerName)}>검색</button>
          <p>검색한 소환사: {summonerName}</p>
      </div>
  )
}

export default App
