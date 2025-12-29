# Column: Chapter 09 の補足

## 詰まりそうなポイント：`Strict` モード
`tsconfig.json` の `strict: true` は初心者に厳しいですが、これをオフにすると TypeScript の価値が半減します。特に `strictNullChecks` はバグを減らす最強の味方です。

## 豆知識：`skipLibCheck`
設定ファイルにある `skipLibCheck: true`。これは、自分で書いたコードではなく、インストールしたライブラリ（node_modules）の中の型チェックをスキップする設定です。ビルド速度を上げるためにほぼ必須の設定です。
