import type { MusicPlayerConfig } from "../types/musicConfig";

// 音乐播放器配置
export const musicPlayerConfig: MusicPlayerConfig = {
	// 是否在导航栏显示音乐播放器入口
	showInNavbar: true,

	// 是否在侧边栏显示音乐播放器组件
	showInSidebar: true,

	// 使用方式："meting" 使用 Meting API，"local" 使用本地音乐列表
	mode: "meting",

	// 默认音量 (0-1)
	volume: 0.7,

	// 播放模式：'list'=列表循环, 'one'=单曲循环, 'random'=随机播放
	playMode: "list",

	// 是否显启用歌词
	showLyrics: true,

	// Meting API 配置
	meting: {
		// Meting API 地址
		// 默认使用官方 API，也可以使用自定义 API
		api: "https://api.i-meto.com/meting/api?server=:server&type=:type&id=:id&r=:r",
		// 音乐平台：netease=网易云音乐, tencent=QQ音乐, kugou=酷狗音乐, xiami=虾米音乐, baidu=百度音乐
		server: "netease",
		// 类型：song=单曲, playlist=歌单, album=专辑, search=搜索, artist=艺术家
		type: "playlist",
		// 歌单/专辑/单曲 ID 或搜索关键词
		id: "10046455237",
		// 认证 token（可选）
		auth: "",
		// 备用 API 配置（当主 API 失败时使用）
		fallbackApis: [
			"https://api.injahow.cn/meting/?server=:server&type=:type&id=:id",
			"https://api.moeyao.cn/meting/?server=:server&type=:type&id=:id",
		],
	},

	// 本地音乐配置（当 mode 为 'local' 时使用）
	// 1. 支持传入歌词文件的路径
	// lrc: "/assets/music/lrc/使一颗心免于哀伤-哼唱.lrc",
	// 2. 或者直接填入歌词字符串内容
	// lrc: "[00:00.00]歌词内容...",
	local: {
		playlist: [
			{
				name: "使一颗心免于哀伤",
				artist: "知更鸟 / HOYO-MiX / Chevy",
				url: "/assets/music/使一颗心免于哀伤-哼唱.mp3",
				cover: "/assets/music/cover/109951169585655912.webp",
				lrc: "",
			},
			{
				name: "我不曾忘记",
				artist: "花玲,张安琪,沐霏",
				url: "/assets/music/花玲,张安琪,沐霏 - 我不曾忘记.mp3",
				cover: "/assets/music/cover/我不曾忘记_109951168232666774..jpg",
				lrc: "",
			},
			{
                name: "在银河中孤独摇摆",
				artist: "知更鸟,HOYO-MiX,Chevy",
				url: "/assets/music/知更鸟,HOYO-MiX,Chevy - 在银河中孤独摇摆.mp3",
				cover: "/assets/music/cover/崩坏星穹铁道-空气蛹 INSIDE_109951169585655912..jpg",
				lrc: "",
			},
			{
                name: "飞鼠进行曲",
				artist: "HOYO-MiX",
				url: "/assets/music/HOYO-MiX - 飞鼠进行曲 The Parade of Flying Squirrels.mp3",
				cover: "/assets/music/cover/原神-珍珠之歌4 The Shimmering Voyage Vol. 4_1099511698..jpg",
				lrc: "",
			},
			{
                name: "飞鸟和蝉",
				artist: "任然",
				url: "/assets/music/任然 - 飞鸟和蝉.mp3",
				cover: "/assets/music/cover/飞鸟和蝉_109951165114761150..jpg",
				lrc: "",
			},
			{
                name: "一路生花",
				artist: "温奕心",
				url: "/assets/music/温奕心 - 一路生花.mp3",
				cover: "/assets/music/cover/一路生花_109951166902691754..jpg",
				lrc: "",
			},

		],
	},
};
