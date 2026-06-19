# tan-go!

Lightweight English vocabulary practice app.

## CSV Format

Import a CSV from the settings screen.

```csv
word,pos,meaning,level,related,phonetic,audio
imperial,adjective,imperial;royal,A,empire:empire;imperialism:imperialism,/imˈpɪəriəl/,audio/imperial.mp3
```

- `word`: English word
- `pos`: part of speech
- `meaning`: Japanese meanings, separated with `;`
- `level`: A, B, C, or any custom level name
- `related`: related words or phrases, written like `word:meaning;word:meaning`
- `phonetic`: pronunciation symbol such as IPA
- `audio`: audio file path or URL

`phonetic` and `audio` are optional. When `audio` is set, the app shows an audio button after the answer is revealed.
