<template>
    <main>
        <div class="demo-container">
            <div class="flex flex-wrap">
                <button
                    type="button"
                    class="rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 sm:w-auto sm:text-sm w-full sm:w-auto transition duration-500 ease-in-out"
                >
                    Primary Button
                </button>
                <button
                    type="button"
                    class="rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 mt-3 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm w-full sm:w-auto transition duration-500 ease-in-out"
                >
                    Secondary Button
                </button>
                <button
                    type="button"
                    class="rounded-md border border-transparent px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 mt-3 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm w-full sm:w-auto transition duration-500 ease-in-out inline-flex justify-center"
                >
                    <svg
                        class="-ml-1 mr-2 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clip-rule="evenodd"
                            aria-hidden="true"
                        />
                    </svg>
                    Destructive Button
                </button>
                <button
                    type="button"
                    class="rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 mt-3 md:mt-0 sm:ml-3 sm:w-auto sm:text-sm w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled
                >
                    Disabled Button
                </button>
            </div>
        </div>
    </main>
</template>
