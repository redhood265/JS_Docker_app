# Dockerのコマンド

## ビルド

```cmd
docker-compose build
```

## 作成

```cmd
docker-compose create
```

## コンテナ開始

```cmd
docker-compose start
```

## コンテナたちを作成して開始(Create and Start)

```cmd
docker-compose up -d
```

### イメージ一覧

```cmd
docker-compose images
```

### コンテナ一覧

```cmd
docker-compose ps
```

### コンテナ内にログイン(以下からのコマンドは、コンテナで実行)

```cmd
docker container exec -it JS_Develop_container_name /bin/bash
```

#### reactサーバの起動
cd hooked
yarn start

#### CURL(JSON-Server)

```cmd
JSON-serberを利用すり際にはpackage.json(app配下)に以下を記載
//,
//"scripts": {"start": "json-server --watch db.json --port 3001"}

curl -X GET http://localhost:3001/articles
curl -X POST http://localhost:3001/articles --data 'title=星宮いちご&author=星宮らいち'
```

#### コンテナログイン後のReactプロジェクトの作り方

yarn create react-app PJ名

```txt
コンテナにログインしてから実行すること！！！！
```

#### JS_Docker_appのタスク

- [ ] データの登録/更新/削除の動作確認
- [ ] React+Reduxを利用したTrellクローンの作成 <https://trello-copy-ddiaorohmd.now.sh/>
  - [ ] レイアウト作成
  - [ ] データの登録処理
  - [ ] データの更新処理
  - [ ] データの削除処理
  - [ ] ルーティングの仕組み
  - [ ] ドラッグアンドドロップの実現方法
  - [ ] 新しいオブジェクトの生成方法（ボード、リスト、カード）
  - [ ] 入力とバリデーションの操作
  - [ ] クライアントサイド
    - [ ]   ローカルストレージの使用方法
    - [ ]   ローカルストレージへのデータの保存方法
    - [ ]   ローカルストレージからのデータの読込方法
  - [ ] サーバサイド
    - [ ]   データベースの使用方法
    - [ ]   データベースへのデータの保存方法
    - [ ]   データベースからのデータ

#### Redux Todoサンプル用コマンド

mkdir actions components containers reducers
touch actions/Todo.js components/Todo.js containers/Todo.js reducers/Todo.js ./createStore.js
