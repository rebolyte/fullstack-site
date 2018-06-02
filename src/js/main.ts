// TODO: Update these to use module aliases!
import Vue from '../../themes/featherweight/node_modules/vue';
import { format } from '../../themes/featherweight/node_modules/date-fns/index';

Vue.component('accordion-toggle', {
	// &#x25B2; // up
	// &#x25BC; // downtypes
	template: `
		<div :class="{ 'is-open': toggle }" @click="toggle = !toggle">
			<slot></slot>
		</div>
	`,
	data() {
		return { toggle: false };
	}
});

new Vue({
	el: '#accordion'
});