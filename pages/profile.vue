<template>
    <div class="container mt-5">
    <div class="card" style="width: 18rem;">
        <div class="card-header">
            Profile
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Name : {{ authUser?.name }}</li>
            <li class="list-group-item">Email : {{ authUser?.email }}</li>
        </ul>
    </div>
    </div>
</template>
<script setup>
const { authUser } = useAuth();
</script>