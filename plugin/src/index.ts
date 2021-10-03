import joplin from 'api';
import { hello } from '../../hello-wasm/pkg'

joplin.plugins.register({
	onStart: async function() {
		const h = hello()
		console.log({ h })
		console.info('Hello world. Test plugin started!');
	},
});
