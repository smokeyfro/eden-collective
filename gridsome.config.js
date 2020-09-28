// This is where project configuration and installed plugin options are located.
// Learn more: https://gridsome.org/docs/config

module.exports = {
  siteName: "Eden Colllective",
  siteUrl: `https://edencollective.org.za`,
  host: "0.0.0.0",
  titleTemplate: "%s - Eden Collective",
  siteDescription: "Fostering Greater Community Cooperation",
  templates: {
    StaticPage: '/:title',
    JournalPost: '/news/:title'
  },
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss",
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "pages/**/*.md",
        typeName: "StaticPage",
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"]
        }
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "journal/**/*.md",
        typeName: "JournalPost",
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"]
        }
      }
    }
  ]
};
