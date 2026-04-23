import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";

export default withMermaid(
  defineConfig({
    title: "integration-api-helper",
    description: "Typed fetch utilities for the reearth-cms Integration REST API",
    base: "/reearth-cms-integration-api-helper/",
    cleanUrls: true,
    lastUpdated: true,

    locales: {
      root: {
        label: "English",
        lang: "en",
        themeConfig: {
          nav: [
            { text: "Introduction", link: "/introduction" },
            { text: "Install", link: "/install" },
            { text: "Usage", link: "/usage" },
            { text: "Postman", link: "/postman" },
            { text: "CDN + Types", link: "/cdn-types" },
          ],
          sidebar: [
            {
              text: "Guide",
              items: [
                { text: "Introduction", link: "/introduction" },
                { text: "Install", link: "/install" },
                { text: "Basic usage", link: "/usage" },
                { text: "Postman collection", link: "/postman" },
                { text: "CDN + Types", link: "/cdn-types" },
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
            { text: "概要", link: "/ja/introduction" },
            { text: "インストール", link: "/ja/install" },
            { text: "使い方", link: "/ja/usage" },
            { text: "Postman", link: "/ja/postman" },
            { text: "CDN と型", link: "/ja/cdn-types" },
          ],
          sidebar: [
            {
              text: "ガイド",
              items: [
                { text: "概要", link: "/ja/introduction" },
                { text: "インストール", link: "/ja/install" },
                { text: "基本的な使い方", link: "/ja/usage" },
                { text: "Postman コレクション", link: "/ja/postman" },
                { text: "CDN と型", link: "/ja/cdn-types" },
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
  }),
);
