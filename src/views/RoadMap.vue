<template>
  <div class="min-h-screen bg-gray-50">
    <div class="max-w-4xl mx-auto px-4 py-16">
      <h1 class="text-4xl font-bold text-gray-900 mb-6">Welcome to Our Project</h1>

      <div class="prose prose-lg max-w-none">
        <p class="text-gray-600 mb-8">
          This is a demonstration of a Vue 3 application using the Composition API.
          The application allows you to submit form data and view responses in an
          organized way.
        </p>

        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Key Features:</h2>
        <ul class="list-disc list-inside text-gray-600 mb-8">
          <li>Responsive design that works on all devices</li>
          <li>Form submission with API integration</li>
          <li>History of previous responses</li>
          <li>State persistence across tabs</li>
        </ul>

        <button
            @click="goToCalculator"
            class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Get Started
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goToCalculator = () => router.push('/calculator')

</script>