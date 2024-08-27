import ReactMarkdown from 'react-markdown'

const markdownString = `
# About

## 経歴

- 2018/04 : 徳山工業高等専門学校 情報電子工学科 入学
- 2023/03 : 徳山工業高等専門学校 情報電子工学科 卒業
- 2023/04 : 九州工業大学 情報工学部 情報・通信工学科 3年次編入

## 資格

- 2019/11 : 基本情報技術者試験 合格
- 2021/06 : 応用処理技術者試験 合格
- 2022/03 : TOEIC® Listening & Reading 730点

## コンテスト等参加歴

- 2021/05 ~ 2022/03 : SecHack365'21 開発駆動コース 川合ゼミ 修了
- 2022/04 : 第29回中国地区高専コンピュータフェスティバル アプリケーション部門1位
- 2024/09 : ウイングアーク1stハッカソン 参加？
`

function About() {
  return <ReactMarkdown>{markdownString}</ReactMarkdown>
}

export default About
