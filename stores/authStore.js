import { defineStore } from 'pinia';
import { useApiStore } from './apiStore';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null
    }),
    actions: {
        async login(data) {
            try {
                const Api = useApiStore();

                // isi state user
                this.user = await Api.post('/login', data);

                // redirect ke home admin
                navigateTo('/admin')

            } catch (error) {
                throw error;
            }

        },
        async logout() {
            const Api = useApiStore();
            await Api.delete('/logout');

            //redirect ke home halaman login
            navigateTo('/admin/login')
        },
        async getUser() {
            const Api = useApiStore();

            // fetch data using Api method
            // return data, ditaro ke state
            this.user = await Api.get('/user');
        },

    }
});