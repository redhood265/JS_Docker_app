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

#### CURL(JSON-Server)

```cmd
JSON-serberを利用すり際にはpackage.json(app配下)に以下を記載
//,
//"scripts": {"start": "json-server --watch db.json --port 3001"}

curl -X GET http://localhost:3001/articles
curl -X POST http://localhost:3001/articles --data 'title=星宮いちご&author=星宮らいち'
```
