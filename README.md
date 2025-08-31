# Receipt Extractor
Suica等の利用履歴などから、チャージ明細や利用履歴等を保存するためのツールです。

## 対応サービス
- [x] モバイルSuica
- 未定

## 使い方
### 環境構築
1. Node.jsをインストールします。推奨バージョンは22.x以上です。
2. このリポジトリをクローンします。
3. クローンしたディレクトリで以下のコマンドを実行
4. ```bash
    pnpm install
    ```
5. `.env`ファイルを作成し、以下の内容を記載します。
    - `JRE_USER_ID`: モバイルSuicaのユーザーID
    - `JRE_USER_PASS`: モバイルSuicaのパスワード
    - `RECIPIENT_COMPANY`: チャージ明細の送付先会社名
6. 以下のコマンドでPlaywrightのブラウザをインストールします。    
    ```bash
    npx playwright install
    ```
### 実行
以下のコマンドで実行します。
```bash
pnpm start [both|history|charge]
```
- `both`: 利用履歴とチャージ明細の両方を取得
- `history`: 利用履歴のみ取得
- `charge`: チャージ明細のみ取得
- 引数を省略した場合は`both`になります。
- 実行は日本時間の5:00〜翌日0:50の間に行ってください。モバイルSuicaのシステムメンテナンス時間を考慮しています。
- 取得したファイルは`output`ディレクトリに保存されます。

# コントリビュートする
## Claude Codeで開発する
Claude Codeでは、Agents.mdに対応していないので、
Windowsでは、
```cmd
mklink /H CLAUDE.md Agents.md
```
MacやLinuxでは、
```bash
ln -s Agents.md CLAUDE.md
```
でシンボリックリンクを作成して対応してください。
