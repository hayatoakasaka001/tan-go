# tan-go!

受験英単語を軽く回して、ミスだけ潰すフラッシュカードの試作品です。

## 開き方

まずは `index.html` をブラウザで開けば動きます。

PWAとしてホーム画面に追加する場合は、Cloudflare Pages / Vercel / Netlify / GitHub Pages などに置いて、iPhoneのSafariで開いてから「ホーム画面に追加」してください。

## 入っているもの

- 通常練習
- 範囲選択
- ランダム出題
- 答えを隠す
- 正解 / ミス / 習得済み
- ミスだけ練習
- 5回連続正解でミスリスト卒業
- 習得済みリスト
- CSV単語データ読み込み
- 端末内のローカル保存
- PWA用のmanifestとservice worker

## CSVの形

設定からCSVを読み込めます。列はこの順番です。

```csv
word,pos,meaning,level,related
imperial,形容詞,"帝国の;皇帝の",出る順B,"empire:帝国;imperialism:帝国主義"
```

- `word`: 英単語
- `pos`: 品詞。名詞、動詞、形容詞、副詞など
- `meaning`: 日本語訳。複数ある場合は `;` で区切る
- `level`: 出る順A、出る順B、出る順C
- `related`: 関連語。`英語:日本語` を `;` で区切る

## まだ仮のもの

- 単語データは24語だけです
- レベル名は仮です
- サーバー同期やログインはありません
- AI分析は入れていません
