<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import TSButton from './TSButton.svelte';
</script>

<Meta
	title="Example/TSButton"
	component={TSButton}
	argTypes={{
		label: { control: 'text' },
		primary: { control: 'boolean' },
		backgroundColor: { control: 'color' },
		size: {
			control: { type: 'select', options: ['small', 'medium', 'large'] }
		},
		onClick: { action: 'onClick' }
	}}
/>

<Template let:args>
	<TSButton {...args} on:click={args.onClick} />
</Template>

<Story
	name="Primary"
	args={{
		primary: true,
		label: 'TSButton'
	}}
/>

<Story
	name="Secondary"
	args={{
		label: 'TSButton'
	}}
/>
<Story
	name="Large"
	args={{
		size: 'large',
		label: 'TSButton'
	}}
/>

<Story
	name="Small"
	args={{
		size: 'small',
		label: 'TSButton'
	}}
/>
