<template>
  <div class="p-4">
    <h2 class="text-xl font-bold mb-4">Branch List</h2>

    <form @submit.prevent="createNew">
      <input v-model="newBranch" placeholder="New branch name" class="border p-2 mr-2" />
      <button class="bg-blue-500 text-white px-3 py-1">Create</button>
    </form>

    <ul class="mt-4">
      <li v-for="branch in branches" :key="branch.id" class="flex justify-between items-center mb-2">
        {{ branch.name }}
        <button @click="remove(branch.id)" class="bg-red-500 text-white px-2">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getBranches, createBranch, deleteBranch } from './services/branchService'

const branches = ref([])
const newBranch = ref('')

const fetch = async () => {
  const res = await getBranches()
  branches.value = res.data
}

const createNew = async () => {
  if (!newBranch.value.trim()) return
  await createBranch({ name: newBranch.value })
  newBranch.value = ''
  await fetch()
}

const remove = async (id) => {
  await deleteBranch(id)
  await fetch()
}

onMounted(() => fetch())
</script>
