# AlpineLinuxの最新版がインストールされる
FROM alpine:latest
RUN apk update
# --no-cacheオプションを付けることで不要なキャッシュを削除できる
RUN apk add --no-cache curl bash bash-completion nodejs yarn
# bashを$SHELLに指定
RUN export PATH="$HOME/.yarn/bin:$HOME/.config/yarn/global/node_modules/.bin:$PATH"
# yarnをアップデート
RUN curl --compressed -o- -L https://yarnpkg.com/install.sh | bash
# create-react-appをインストール
RUN yarn global add create-react-app json-server
# yarnでインストールしたパッケージ一覧
RUN yarn global list
WORKDIR /app

