<template>
    <main>
        <div class="rounded-lg p-8 md:p-8 bg-gray-100 shadow-2xl">
            <label for="character-select" class="block text-sm font-medium text-gray-700">
                Character
            </label>
            <div class="relative w-full border-none text-gray-700">
                <select
                    name="characters"
                    id="character-select"
                    class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 appearance-none cursor-pointer"
                >
                    <option v-for="option in options" v-bind:key="option">
                        {{ option }}
                    </option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        class="h-5 w-5"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    data: () => ({
        options: ['Aragorn', 'Frodo Baggins', 'Gandalf', 'Legolas', 'Gollum', 'Arwen'],
    }),
});
</script>
