<template>
    <div class="container">
        <div class="row justify-content-center mt-5">
            <div class="col-md-4">
                <div v-if="errors.length > 0" class="alert alert-danger" role="alert">
                   <ul class="mb-0">
                    <li v-for="(error , index) in errors" :key="index">{{error}}</li>
                   </ul>
                </div>
                <form @submit.prevent="register">
                    <div class="mb-3">
                        <label htmlFor="name" class="form-label">Name</label>
                        <input type="text" v-model="formData.name" class="form-control" id="name" />
                    </div>
                    <div class="mb-3">
                        <label htmlFor="email" class="form-label">Email address</label>
                        <input type="text" v-model="formData.email" class="form-control" id="email" />
                    </div>
                    <div class="mb-3">
                        <label htmlFor="password" class="form-label">Password</label>
                        <input type="password" v-model="formData.password" class="form-control" id="password" />
                    </div>
                    <div class="mb-3">
                        <label htmlFor="c_password" class="form-label">Confirm Password</label>
                        <input type="password" v-model="formData.c_password" class="form-control" id="c_password" />
                    </div>
                    <button class="btn btn-primary">
                        Register
                        <div v-if="loading" class="spinner-border spinner-border-sm" role="status"></div>
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    middleware: 'guest',
})
const loading = ref(false);
const errors = ref([]);
const formData = reactive({
    name: "",
    email: "",
    password: "",
    c_password: "",
});

const {authUser} = useAuth();

async function register() {
    loading.value = true;
    try {
        const user = await $fetch('/api/auth/register', {
            method: 'POST',
            body: formData
        })
        authUser.value = user;
        return navigateTo('/');
    } catch (error) {
        errors.value = Object.values(error.data.data).flat();
    } finally {
        loading.value = false;
    }

}

</script>