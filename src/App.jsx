export default function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>quick.gg</h1>
      <input id="q" placeholder="소환사명 입력" />
      <button onClick={() => alert(document.getElementById('q').value + ' 검색')}>검색</button>
    </div>
  )
}