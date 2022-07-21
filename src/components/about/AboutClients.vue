<script>
import AboutClientSingle from './AboutClientSingle.vue';

export default {
	components: {
		AboutClientSingle,
	},
	data: () => {
		return {
			clientsHeading: 'Some of the work done by me',
			clients: [
				{
					id: 1,
					title: 'Laravel',
					img: require('@/assets/images/brands/postsPags.png'),
				},
				{
					id: 2,
					title: 'VueSPA',
					img: require('@/assets/images/brands/deleteMessage.png'),
				},
				{
					id: 3,
					title: 'Adidas',
					img: require('@/assets/images/brands/adidas_gray.png'),
				},
				{
					id: 4,
					title: 'FILA',
					img: require('@/assets/images/brands/fila_gray.png'),
				},
			],
		};
	},
};
</script>

<template>
	<div class="mt-10 sm:mt-20">
		<p
			class="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light"
		>
			{{ clientsHeading }}
		</p>
		<div class="grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2">
			<AboutClientSingle
				v-for="client in clients"
				:key="client.id"
				:client="client"
			/>
		</div>
	</div>
</template>
