# AlpineLinuxの最新版がインストールされる
FROM node:12.4.0-alpine
RUN apk update
# --no-cacheオプションを付けることで不要なキャッシュを削除できる
RUN apk add --no-cache yarn curl bash bash-completion
# bashを$SHELLに指定
RUN export PATH="$HOME/.yarn/bin:$HOME/.config/yarn/global/node_modules/.bin:$PATH"
# yarnをアップデート
RUN curl --compressed -o- -L https://yarnpkg.com/install.sh | bash
# create-react-appをインストール
RUN yarn global add create-react-app json-server
# yarnでインストールしたパッケージ一覧
RUN yarn global list
WORKDIR /app

