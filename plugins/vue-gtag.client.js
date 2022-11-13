import Vue from 'vue';
import VueGtag from 'vue-gtag';

const vueGtag = ({ app, $config }) => {
	console.log('app.router ', app.router);
	Vue.use(
		VueGtag,
		{
			config: { id: $config.googleAnalytics.id },
			disabled: true // Here you could ignore user privacy and set to true
		},
		app.router
	);
};

export default vueGtag;
