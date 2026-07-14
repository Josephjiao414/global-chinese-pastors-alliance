# 全球华人教牧同工联盟官网

这是“全球华人教牧同工联盟”的官方中文主页首版，使用 Next.js、TypeScript、Tailwind CSS 与 App Router 构建。首版不使用数据库，网站文案和活动信息保存在本地数据文件中。

## 技术栈

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- App Router

## 本地开发

```bash
pnpm install
pnpm dev
```

本地访问：

```text
http://localhost:3000
```

## 常用命令

```bash
pnpm lint
pnpm typecheck
pnpm build
pnpm start
```

## 内容维护

主要内容文件：

- `content/site.zh-CN.ts`：网站导航、首页文案、关于联盟、联系方式等
- `content/events.zh-CN.ts`：聚会活动数据

新增活动时，只需要在 `content/events.zh-CN.ts` 的 `eventsZhCN` 数组中追加一条活动对象。会议号码、会议密码、报名链接等字段为空时，页面会显示“稍后公布”或对应提示。

## 环境变量

部署到 Render 时建议设置：

```text
NEXT_PUBLIC_SITE_URL=https://你的正式域名
```

该变量用于生成 sitemap、robots 和社交分享 metadata 的绝对地址。未设置时，会 fallback 到当前 Render 正式地址。

## Render 部署建议

Render Web Service 配置：

```text
Runtime: Node
Build Command: pnpm install --frozen-lockfile && pnpm build
Start Command: pnpm start
```

如 Render 环境未自动识别 pnpm，可在构建命令中启用 Corepack：

```text
corepack enable && pnpm install --frozen-lockfile && pnpm build
```

## 发布前检查

发布前至少运行：

```bash
pnpm lint
pnpm typecheck
pnpm build
```

并确认：

- `NEXT_PUBLIC_SITE_URL` 已设置为正式域名
- 联系方式已确认
- 会议号码、会议密码、报名链接如已确定，已更新到活动数据文件
- `/robots.txt` 和 `/sitemap.xml` 可正常访问
