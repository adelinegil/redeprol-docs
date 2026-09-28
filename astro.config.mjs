// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
      title: 'Redeprol',
      logo: {
        light: './src/assets/logo.svg',
        dark: './src/assets/logodark.svg',
        replacesTitle: true,
      },
      customCss: [
        './src/styles/custom.css',
      ],
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
      defaultLocale: 'pt-BR',
      locales: {
        root: {
          label: 'Português Brasileiro',
          lang: 'pt-BR', // lang is required for root locales
        },
      },
			sidebar: [
				{
					label: 'Guias',
					items: [{ autogenerate: { directory: 'guides' } }],
				},
				{
					label: 'Referência',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
		}),
	],
});
