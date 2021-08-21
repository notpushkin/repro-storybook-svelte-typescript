<script lang="ts">
	import './button.css';
	import { createEventDispatcher } from 'svelte';
	/**
	 * Is this the principal call to action on the page?
	 */
	export let primary: boolean = false;

	/**
	 * What background color to use
	 */
	export let backgroundColor: string = null;

	type Size = 'small' | 'medium' | 'large';

	/**
	 * How large should the button be?
	 */
	export let size: Size = 'medium';
	/**
	 * Button contents
	 */
	export let label: string = '';

	let mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';

	let style = backgroundColor ? `background-color: ${backgroundColor}` : '';

	const dispatch = createEventDispatcher();

	/**
	 * Optional click handler
	 */
	function onClick(event) {
		dispatch('click', event);
	}
</script>

<button
	type="button"
	class={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
	{style}
	on:click={onClick}
>
	{label}
</button>
