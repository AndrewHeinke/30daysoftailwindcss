<template>
    <main>
        <div class="rounded-lg p-8 md:p-8 bg-gray-100 shadow-2xl">
            <form action="#" method="POST">
                <div class="grid md:grid-cols-2 gap-4 form-container mx-auto">
                    <div>
                        <label
                            for="first-name-input"
                            class="block text-sm font-medium text-gray-700"
                        >
                            First Name
                        </label>
                        <input
                            name="first-name-input"
                            id="first-name-input"
                            type="text"
                            class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 appearance-none"
                        />
                    </div>
                    <div>
                        <label
                            for="last-name-input"
                            class="block text-sm font-medium text-gray-700"
                        >
                            Last Name
                        </label>
                        <input
                            name="last-name-input"
                            id="last-name-input"
                            type="text"
                            class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 appearance-none"
                        />
                    </div>
                    <div class="col-span-full">
                        <label for="number-input" class="block text-sm font-medium text-gray-700">
                            Price
                        </label>
                        <input
                            name="number-input"
                            id="number-input"
                            type="number"
                            inputMode="numeric"
                            placeholder="$420.09"
                            class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 appearance-none font-mono"
                        />
                    </div>
                    <div class="col-span-full">
                        <label
                            for="text-area-input"
                            class="block text-sm font-medium text-gray-700"
                        >
                            Comment
                        </label>
                        <textarea
                            name="text-area-input"
                            id="text-area-input"
                            type="text"
                            class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 appearance-none"
                        />
                    </div>
                    <div class="col-span-full">
                        <label
                            for="character-select"
                            class="block text-sm font-medium text-gray-700"
                        >
                            Character
                        </label>
                        <div class="relative w-full border-none text-gray-700">
                            <select
                                name="character-select"
                                id="character-select"
                                class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 appearance-none cursor-pointer"
                            >
                                <option v-for="option in options" v-bind:key="option">
                                    {{ option }}
                                </option>
                            </select>
                            <div
                                class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2"
                            >
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
                    <div
                        class="flex flex-col-reverse mt-4 sm:block col-span-full sm:place-self-end"
                    >
                        <button
                            type="button"
                            class="rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 mt-3 sm:mt-0 sm:w-auto sm:text-sm w-full sm:w-auto transition duration-500 ease-in-out"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            class="rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 sm:ml-3 sm:w-auto sm:text-sm w-full sm:w-auto transition duration-500 ease-in-out"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </form>
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
