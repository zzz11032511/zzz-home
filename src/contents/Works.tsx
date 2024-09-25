import ReactMarkdown from 'react-markdown'

const markdownString = `
# Works

作ったものなど...

## ぎらコレ

ウイングアーク1stハッカソンで賞を頂いた製作物です。

[作品紹介ページ](https://topaz.dev/projects/24f1dd78b004a104510a)

[GitHub](https://github.com/katamine-lab-2024/WingArc1st-Hackathon-server/tree/main)

サッカーの試合のハイライトから、選手のコレクションカードを自動生成します。コレクションゲームとしての部分も作りたかったのですが、時間が足りませんでした...。

受賞した理由を考えてみたのですが、デモでカード生成が確実に動いていることを示せたことや、友人が拘って作っていたカードデザインの完成度の高さ、試合のハイライトをすぐにカード化して配布できるようにするアイデアが評価されたのかなと思います。

## TaC Simulator

徳山高専が開発している16bitコンピュータTaCのシミュレータです。卒業研究で作りました。

僕はElectronで作りましたが、後輩が引き継いでWebAssemblyに移植してました、すごい。
実際の授業では使われているのでしょうか...？

[GitHub](https://github.com/TacSimTeam/TacSimulator-TS)


## Oto

音で遊ぶための簡易プログラミング言語をSecHack365で作りました。下の例のような雰囲気の言語です。  

\`\`\`basic
@include "lib/stdosc.oto"

s = SOUND[SINE]

vol = 50
i = 100
LOOP [300] BEGIN
    IF [i >= 2600] THEN
        vol -= 1
    END

    PLAY i, 0.005, vol, s
    i += 10
END
\`\`\`

[SecHack365の公式にある成果物ポスター(開発駆動コースのところにあります)](https://sechack365.nict.go.jp/achievement/2021)

## マップエディタ

高専2年生のときに授業で作りました。なぜか徳山高専公式YouTubeに紹介動画があります。
`

function Works() {
  return (
    <>
      <ReactMarkdown>{markdownString}</ReactMarkdown>
      <iframe
        width="600"
        height="400"
        src="https://www.youtube.com/embed/NMkjiSGsG4E"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </>
  )
}

export default Works
