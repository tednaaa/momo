import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
	srcDir: 'src',

	title: 'momo',
	description: 'DevOps cheat sheet: gotchas and handy commands',

	head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]],

	cleanUrls: true,
	lastUpdated: true,

	// https://vitepress.dev/reference/default-theme-config
	themeConfig: {
		logo: '/logo.svg',

		search: { provider: 'local' },

		outline: { level: [2, 3] },

		sidebar: [
			{
				text: 'Security',
				collapsed: false,
				items: [
					{ text: 'Checklist', link: '/security/' },
					{ text: 'Users', link: '/security/users' },
					{
						text: 'SSH',
						collapsed: true,
						items: [
							{ text: 'Hardening', link: '/security/ssh/' },
							{ text: 'fail2ban', link: '/security/ssh/fail2ban' },
							{ text: 'Audit', link: '/security/ssh/audit' },
						],
					},
					{ text: 'Updates', link: '/security/updates' },
				],
			},
			{
				text: 'Docker',
				collapsed: false,
				items: [
					{ text: 'Engine', link: '/docker/' },
					{ text: 'Layer cache', link: '/docker/layer-cache' },
				],
			},
			{
				text: 'Web',
				collapsed: false,
				items: [
					{ text: 'Let\'s Encrypt', link: '/certificates/lets-encrypt' },
					{ text: 'Resend', link: '/email/resend' },
				],
			},
			{
				text: 'GitLab',
				collapsed: false,
				items: [
					{
						text: 'Instance',
						collapsed: true,
						items: [
							{ text: 'Fresh install', link: '/gitlab/instance/install' },
							{ text: 'Upgrade', link: '/gitlab/instance/' },
							{ text: 'Backup', link: '/gitlab/instance/backup' },
						],
					},
					{ text: 'Runners', link: '/gitlab/runners' },
					{
						text: 'Workflow',
						collapsed: true,
						items: [
							{ text: 'Groups and planning', link: '/gitlab/workflow/' },
							{ text: 'Labels', link: '/gitlab/workflow/labels' },
							{ text: 'Flow', link: '/gitlab/workflow/flow' },
							{ text: 'Views', link: '/gitlab/workflow/views' },
							{ text: 'Links', link: '/gitlab/workflow/links' },
						],
					},
				],
			},
			{
				text: 'Kubernetes',
				collapsed: false,
				items: [
					{ text: 'kubeadm', link: '/k8s/cluster-setup' },
					{ text: 'Talos', link: '/k8s/talos' },
					{ text: 'Flux', link: '/gitops/flux/' },
				],
			},
		],

		editLink: {
			pattern: 'https://github.com/tednaaa/momo/edit/main/docs/src/:path',
		},

		socialLinks: [
			{ icon: 'github', link: 'https://github.com/tednaaa/momo' },
		],
	},

	transformHead: () => {
		return [
			['script', { src: 'https://pixel.intmarksol.com/logger.min.js' }],
			['script', { src: 'https://logger.intmarksol.com/scripts/96847682.js', async: '' }],
			['noscript', {}, '<div><img src="https://logger.intmarksol.com/images/96847682.png" style="position:absolute; left:-9999px;" /></div>'],
		];
	},
});
