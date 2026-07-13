# j-ito0625.github.io

伊藤潤成（Junsei Ito）の個人サイトです。[Zola](https://www.getzola.org/) 0.22.1で構築しています。

## ローカル開発

```bash
zola serve
# http://127.0.0.1:1111
```

## 本番ビルド

```bash
./build.sh https://j-ito0625.github.io
```

`build.sh`はZolaのビルド後、各ページの最終更新日をGitのコミット日時から`public/`へ注入します。

## 公開

`main`へのpushでGitHub Actionsがビルドし、GitHub Pagesへデプロイします。

## 構成

- `config.toml`: サイト設定
- `content/`: 各ページとニュース記事
- `templates/`: Teraテンプレート
- `static/`: CSS、フォント、画像
- `.github/workflows/deploy.yml`: GitHub Pagesデプロイ
