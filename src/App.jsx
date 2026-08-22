export default function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>quick.gg</h1>
      <input id="q" placeholder="소환사명 입력" />
      <button onClick={() => alert(document.getElementById('q').value + ' 검색')}>검색</button>

      <div style={{ width: '250px', margin: '30px auto', padding: '15px', background: '#1a2635', color: '#fff', borderRadius: '10px' }}>
        <h3>소환사명</h3>
        <p>레벨: 100 / 다이아몬드</p>
      </div>

      <div style={{ width: '250px', margin: '30px auto', padding: '15px', background: '#1a2635', color: '#fff', borderRadius: '10px' }}>
        <h3>최근 전적</h3>
        <p>승리 - 킬 10 / 데스 2 / 어시 5</p>
        <p>패배 - 킬 3 / 데스 7 / 어시 4</p>
        <p>승리 - 킬 8 / 데스 1 / 어시 9</p>
      </div>
    </div>
  )
}