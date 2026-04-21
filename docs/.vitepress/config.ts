import { defineConfig } from "vitepress";

export default defineConfig({
  title: "reearth-cms-integration-api-helper",
  description:
    "Typed fetch utilities for the reearth-cms Integration REST API",
  base: "/reearth-cms-integration-api-helper/",
  cleanUrls: true,
  lastUpdated: true,

  locales: {
    root: {
      label: "English",
      lang: "en",
      themeConfig: {
        nav: [
          { text: "Install", link: "/install" },
          { text: "Usage", link: "/usage" },
          { text: "Postman", link: "/postman" },
        ],
        sidebar: [
          {
            text: "Guide",
            items: [
              { text: "Install", link: "/install" },
              { text: "Basic usage", link: "/usage" },
              { text: "Postman collection", link: "/postman" },
            ],
          },
        ],
        footer: {
          message: "Released under the Apache-2.0 License.",
        },
      },
    },
    ja: {
      label: "日本語",
      lang: "ja",
      link: "/ja/",
      themeConfig: {
        nav: [
          { text: "インストール", link: "/ja/install" },
          { text: "使い方", link: "/ja/usage" },
          { text: "Postman", link: "/ja/postman" },
        ],
        sidebar: [
          {
            text: "ガイド",
            items: [
              { text: "インストール", link: "/ja/install" },
              { text: "基本的な使い方", link: "/ja/usage" },
              { text: "Postman コレクション", link: "/ja/postman" },
            ],
          },
        ],
        footer: {
          message: "Apache-2.0 ライセンスのもと公開されています。",
        },
      },
    },
  },

  themeConfig: {
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/kazettique/reearth-cms-integration-api-helper",
      },
    ],
  },
});
