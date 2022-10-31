# vite-web

このプロジェクトは gulp 脱却を目標とし作成しました。

## 採用技術

- vite
- scss
- tailwind css
- typescript

## フォルダ構造

src
|_ components (html 分割)
|_ scss (flocss 設計がおすすめ)
|_ ts (関数コンポーネント思考)
|_ main.ts (ts をまとめるところ)
|_ index.html (ページに応じて増やす)
|_ style.scss (共通の css を書くところ)

あとはお好みで

## ページを増やすとき

root/vite.config.js にて追記お願いします
33 行目あたりに下記のようなコードがあります

```
const pageData = {
  '/index.html': {
    isHome: true,
    title: 'Main Page',
    description: 'test description',
    keywords: 'test keywords',
    type: 'website',
    ogImg: '/',
    ogUrl: '/',
    lang: 'ja',
  },
};
```

ページを増やすときはこのおコードを流用し追記お願いします。
こちらによってページ別にコンテンツを独立させることによって SEO 対策を狙っています。

### 変更例

```
const pageData = {
  '/index.html': {
    isHome: true,
    title: 'Main Page',
    description: 'test description',
    keywords: 'test keywords',
    type: 'website',
    ogImg: '/',
    ogUrl: '/',
    lang: 'ja',
  },
  '/about.html': {
    isHome: true,
    title: 'about Page',
    description: 'about description',
    keywords: 'about keywords',
    type: 'website',
    ogImg: '/',
    ogUrl: '/',
    lang: 'ja',
  },
};
```

src/about.html を作成した例です。
このように追記すれば about.html 独自の seo に変更することができます

### 画像圧縮

root/vite.config 95 行あたりに書いています
viteImagemin の中に記述しています。
特に書き換える必要はないかと思います。もう少しすれば画像は webp を使うことを強く勧めます

### メモ

- html に tailwind css 読み込み

  - https://bubudoufu.com/vite-js-bulma-tailwindcss/

- project 参考

  - https://zenn.dev/sakata_kazuma/articles/59a741489c8bbc

- tailwindcss 拡張
  - https://daisyui.com/docs/install/
  - こちらかなり使いごごちがいいですが、web 制作ではテンプレートとしては使いづらいためメモ
