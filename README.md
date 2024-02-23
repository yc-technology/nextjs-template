## 🐍 Build

#### Docker

> 打包之后大约有 `140m` 左右，相比 nuxt 只有 `40m` 差距还是比较大

```sh
docker build -t yc/next-template:0.0.1 -f ./Dockerfile .
```

## 🚀 Run

#### Docker

```sh
docker run -d -p 3000:3000 yc/next-template:0.0.1
```
