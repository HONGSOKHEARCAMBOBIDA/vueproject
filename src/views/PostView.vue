<template>
  <div class="fullscreen-wrapper">
    <div class="container-fluid p-4 h-100 d-flex flex-column">
      <h1 class="mb-3">Posts</h1>

      <div v-if="isLoading" class="flex-grow-1 d-flex justify-content-center align-items-center">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>

      <div v-if="error" class="alert alert-danger">{{ error }}</div>

      <div v-if="!isLoading && posts.length" class="table-responsive flex-grow-1">
        <table id="postsTable" class="table table-striped table-hover w-100">
          <thead class="table-dark">
            <tr>
              <th>ID</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="post in posts" :key="post.id">
              <td>{{ post.id }}</td>
              <td>{{ post.title }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>


<script>
import { onMounted, watch, nextTick } from 'vue';
import { usePostController } from '../controllers/postController';

export default {
  setup() {
    const { posts, isLoading, error, fetchPosts } = usePostController();

    // Re-init DataTable after posts change
    watch(posts, async (newPosts) => {
      if (newPosts.length) {
        await nextTick();

        if ($.fn.DataTable.isDataTable('#postsTable')) {
          $('#postsTable').DataTable().destroy();
        }

        $('#postsTable').DataTable();
      }
    });

    onMounted(() => {
      fetchPosts();
    });

    return {
      posts,
      isLoading,
      error,
      fetchPosts
    };
  }
};
</script>
