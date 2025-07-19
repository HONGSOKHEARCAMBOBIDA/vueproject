// src/controllers/postController.js
import { ref } from 'vue';
import { apiService } from '../services/apiService';

export function usePostController() {
  const posts = ref([]);
  const isLoading = ref(false);
  const error = ref(null);

  const fetchPosts = async () => {
    isLoading.value = true;
    error.value = null;

    try {
      const response = await apiService.getPosts();
      posts.value = response.data;
    } catch (err) {
      error.value = 'Failed to fetch posts';
    } finally {
      isLoading.value = false;
    }
  };

  return {
    posts,
    isLoading,
    error,
    fetchPosts
  };
}
