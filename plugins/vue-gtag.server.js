const vueGtag = ({ app, $config }) => {
	const preloadLinks = [
		{
			rel: 'preload',
			as: 'script',
			href: `https://www.googletagmanager.com/gtag/js?id=${$config.googleAnalytics.id}`
		},
		{
			rel: 'preconnect',
			href: 'https://www.google-analytics.com/'
		}
	];
	// if (process.env.NODE_ENV === 'production') {
	if (typeof app.head === 'function') {
		console.error("We can't add the preload links if head is a function");
	} else if (app.head) {
		app.head.link = [ ...(app.head.link || []), ...preloadLinks ];
	} else {
		app.head = {
			link: preloadLinks
		};
	}
	// }
};

export default vueGtag;
