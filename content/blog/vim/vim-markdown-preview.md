---
title: 'VimでMarkdownのプレビューをする'
date: 2020-10-12 00:00:00
category: 'vim'
draft: true
---
Vim上でMarkdownのプレビューを行う方法です。  
結論としては、[preview-markdown.vim](https://github.com/skanehira/preview-markdown.vim)というプラグインを使うことによって実現することができます。

## 環境
### OS
- macOS Catalina v10.15.6

### Vim
```vim
$ vim --version
VIM - Vi IMproved 8.2 (2019 Dec 12, compiled Aug  2 2020 00:45:48)
```
- プラグインマネージャー：[vim-plug](https://github.com/junegunn/vim-plug)

## 完成イメージ
最終的な完成イメージはこんな感じです。

![](./images/screen-shot.png)

## 手順
### 1. Markdown のパーサーをインストール
後にインストールするVimプラグインで内部的に利用するためのMarkdown のパーサーをインストールします。
今回は[mdr](https://github.com/MichaelMure/mdr)というパーサーを利用しますが、他にも下記のパーサーが利用可能です。

- [mdr](https://github.com/MichaelMure/mdr) （← 今回利用する）
- [glow](https://github.com/charmbracelet/glow)
- [mdcat](https://github.com/lunaryorn/mdcat)

ターミナルに`mdr`コマンドを入力した時に以下のように表示されればOKです。
```bash
$ mdr
usage: mdr <file.md>
```

### 2. preview-markdown.vim をインストール
僕はプラグインマネージャーに[vim-plug](https://github.com/junegunn/vim-plug)を使っているので、`.vimrc`に以下の通り追記しました。
```vim
Plug 'skanehira/preview-markdown.vim'
```

あとはプレビューしたい`.md`ファイルをVimで開き、以下を入力すると無事にマークダウンファイルのプレビューをみることができます。
```vim
:PreviewMarkdown
```

## おまけ
## 参考
- [preview-markdown.vim](https://github.com/skanehira/preview-markdown.vim)
- [VimでMarkdownファイルをプレビューしたい！](https://okomehadaiji.com/vim%E3%81%A7-markdown%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%82%92%E3%83%97%E3%83%AC%E3%83%93%E3%83%A5%E3%83%BC%E3%81%97%E3%81%9F%E3%81%84%EF%BC%81)
- [Mac「開発元を検証できないため開けません」を解決する方法! App Storeからダウンロードされないアプリを実行しよう](https://sp7pc.com/apple/mac/5734)
- [ウィンドウを開く方向を指定する](https://vim-jp.org/vim-users-jp/2011/01/31/Hack-198.html)
