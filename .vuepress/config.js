module.exports = {
  "title": "Milk Hall",
  "description": "blog",
  "dest": "public",
  'locales': {
    '/': {
      'lang': 'zh-CN'
    }
  },
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间轴",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "文档",
        "icon": "reco-message",
        "items": [
          {
            "text": "vuepress-reco",
            "link": "/docs/theme-reco/"
          }
        ]
      },
      {
        "text": "联系方式",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/tosins/Milk-Hall-Blog",
            "icon": "reco-github"
          }
        ]
      }
    ],
    // "sidebar": {
    //   "/docs/theme-reco/": [
    //     "",
    //     "theme",
    //     "plugin",
    //     "api"
    //   ]
    // },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "Milk Hall",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "gkinxin@qq.com",
        "link": "https://blog.lalilali.com"
      },
    ],
    "logo": "/favicon.ico",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "xg",
    "authorAvatar": "/avatar.png",
    "record": "",
    "startYear": "2020"
  },
  "markdown": {
    "lineNumbers": true
  },
  plugins: [
    [
      "@vuepress-reco/vuepress-plugin-kan-ban-niang"
    ],
    [
      "@vuepress-reco/vuepress-plugin-bgm-player",
      // {
      //   audios: [
      //     // 本地文件示例
      //     {
      //       name: '장가갈 수 있을까',
      //       artist: '咖啡少年',
      //       url: '/bgm/1.mp3',
      //       cover: '/bgm/1.jpg'
      //     },
      //     // 网络文件示例
      //     {
      //       name: '강남역 4번 출구',
      //       artist: 'Plastic / Fallin` Dild',
      //       url: 'https://assets.smallsunnyfox.com/music/2.mp3',
      //       cover: 'http://p1.music.126.net/M6I9g1EkDxbgl2j5Ygi-lQ==/130841883720226.jpg?param=130y130'
      //     },
      //     {
      //       name: '用胳膊当枕头',
      //       artist: '최낙타',
      //       url: 'https://assets.smallsunnyfox.com/music/3.mp3',
      //       cover: 'https://assets.smallsunnyfox.com/music/3.jpg'
      //     }
      //   ]
      // }
    ],
    [
      "vuepress-plugin-auto-sidebar",
    ]
  ],
}