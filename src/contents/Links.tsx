import ReactMarkdown from 'react-markdown'

const markdownString = `
# Links

- [ブログ](https://zzz-blog.netlify.app)
- [GitHub](https://github.com/zzz11032511)
- [Rate Your Music](https://rateyourmusic.com/~zzz11032511)
- [Glitchwave](https://glitchwave.com/user/zzz11032511)
- [Spotify](https://open.spotify.com/user/vvwgu4170o9y06cusxs427fcy?si=e3fadab248c74a82)
`

function Links() {
  return <ReactMarkdown>{markdownString}</ReactMarkdown>
}

export default Links
