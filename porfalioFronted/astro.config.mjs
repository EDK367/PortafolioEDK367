import { defineConfig } from 'astro/config';
//importaciones para poder usar vue, react
import vue from '@astrojs/vue';
import vuetifyPlugin from 'vite-plugin-vuetify';
import react from "@astrojs/react";
import alpinejs from "@astrojs/alpinejs";
import analogjsangular from "@analogjs/astro-angular";
function vuetify(options) {
  return {
    name: 'my-astro-vuetify-integration',
    hooks: {
      'astro:config:setup': ({
        updateConfig
      }) => {
        updateConfig({
          vite: {
            ssr: {
              noExternal: ['vuetify']
            },
            plugins: [vuetifyPlugin()]
          }
        });
      }
    }
  };
}
// https://astro.build/config
export default defineConfig({
  //aca tenemos el puerto para dejarlo en el 4000
  server: {
    port: 4000
  },
  //integraciones de frameworks
  integrations: [vue(), react(), vuetify(), alpinejs(), analogjsangular()]
});


//nodos hijos para react 7
//    {
//    experimentalReactChildren: true,
//    }