import joplin from 'api';
import { hello } from '../../hello-wasm/pkg'

joplin.plugins.register({
	onStart: async function() {
		console.log(hello())
		console.info('Hello world. Test plugin started!');
	},
});
