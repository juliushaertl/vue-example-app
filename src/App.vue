<template>
	<div id="content" class="app-vueexample">
		<div id="app-navigation">
			<app-navigation :menu="menu">
				<template slot="settings-content">Example settings</template>
			</app-navigation>
		</div>
		<div id="app-content">
			<div class="vueexample__container">
				<h3>Nextcloud app example with vue components</h3>
				<popover-menu-button :menu="menuPopover"></popover-menu-button>
			</div>
		</div>
	</div>
</template>

<script>
	// TODO: move to package once published to npm
	import {
		PopoverMenu,
		AppNavigation,
		PopoverMenuButton
	} from 'nextcloud-vue-components';

	export default {
		name: 'App',
		components: {
			PopoverMenu, AppNavigation, PopoverMenuButton
		},
		data: function () {
			return {
				isOpen: false,
				// example popover in the content
				menuPopover: [
					{
						icon: 'icon-delete',
						text: 'Delete item',
						action: () => {
							alert('Deleted!');
						}
					},
					{
						icon: 'icon-user',
						text: 'Nextcloud website',
						action: () => {},
						href: 'https://nextcloud.com'
					},
					{
						icon: 'icon-details',
						longtext: 'Add item',
						action: () => {
							alert('details');
						}
					}
				]
			};
		},
		computed: {
			// App navigation
			menu: function () {
				let defaultCategories = [
					{
						id: 'app-category-your-apps',
						classes: [],
						href: '#',
						icon: 'icon-category-installed',
						text: t('settings', 'Your apps'),
					},
					{
						caption: true,
						text: t('vueexample', 'Section'),
					},
					{
						id: 'app-category-enabled',
						classes: [],
						icon: 'icon-category-enabled',
						href: '#',
						utils: {
							actions: [{
								icon: 'icon-delete',
								text: t('settings', 'Remove group'),
								action: function () {
									console.log('remove')
								}
							}]
						},
						text: t('settings', 'Active apps'),
					},
					{
						id: 'app-category-enabled',
						classes: [],
						icon: 'icon-category-enabled',
						href: '#',
						utils: {
							counter: 123,
							actions: [
								{
									icon: 'icon-delete',
									text: t('settings', 'Remove group'),
									action: function () {
										console.log('remove')
									}
								},
								{
									icon: 'icon-delete',
									text: t('settings', 'Remove group'),
									action: function () {
										console.log('remove')
									}
								}
							]
						},
						text: t('settings', 'Active apps'),
					},
					{
						id: 'app-category-disabled',
						classes: [],
						icon: 'icon-category-disabled',
						href: '#',
						undo: true,
						text: t('settings', 'Disabled apps'),
					}
				];
				return {
					items: defaultCategories,
					loading: false
				}
			}
		}
	}
</script>
<style lang="scss" scoped>

	button {
		color: var(--color-primary-text);
		background-color: $color-primary;
	}

	.vueexample__container {
		padding: 20px;
	}

</style>
