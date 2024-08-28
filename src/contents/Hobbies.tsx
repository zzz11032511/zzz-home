import ReactMarkdown from 'react-markdown'

const markdownString = `
# Hobbies

zzzの趣味を大公開！

### 好きなミュージシャン・作曲家・バンド
- The Beach Boys
- The Beatles
- Boards of Canada
- Broadcast
- Carole King
- The Kinks
- Silver Apples
- Portishead
- 植松伸夫
- 竹村延和
- たま
- 平沢進
- 細野晴臣

### 好きなアニメ
- カペリート
- スポンジボブ
- ジャムハウスネイル
- 楽しいムーミン一家
- PUIPUIモルカー(1期)

`

function Hobbies() {
  return <ReactMarkdown>{markdownString}</ReactMarkdown>
}

export default Hobbies
