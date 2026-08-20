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
    </div>
  )
}