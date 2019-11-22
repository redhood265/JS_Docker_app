# Dockerのコマンド

#### ビルド

```cmd
docker-compose build
```

#### コンテナを作成して開始

```cmd
docker-compose up -d
```

#### コンテナが開始されたか確認

```cmd
docker container ls
```

#### コンテナ内にログイン(以下からのコマンドは、コンテナで実行)

```cmd
docker container exec -it JS_Develop /bin/sh
docker container exec -it JS_Develop /bin/bash
```

#### CURL(JSON)

```cmd
curl -X GET http://localhost:3001/articles
curl -X POST http://localhost:3001/articles --data 'title=星宮いちご&author=星宮らいち'
```
