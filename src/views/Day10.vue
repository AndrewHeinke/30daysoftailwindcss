<template>
    <main>
        <div class="demo-container">
            <div class="max-w-sm w-full m-auto">
                <div
                    class="grid grid-cols-3 grid-rows-7 grid-flow-row overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                >
                    <div class="col-span-3 row-span-4 p-1 m-1 relative">
                        <p
                            class="absolute bottom-4 left-4 bg-white py-1 px-2 rounded-lg shadow-2xl"
                        >
                            This is the card title
                        </p>
                        <a href="#">
                            <img
                                src="https://picsum.photos/640/400/?random"
                                alt="Placeholder"
                                class="rounded-t-xl object-cover h-48 w-full"
                            />
                        </a>
                    </div>

                    <div class="col-span-3 row-span-1">
                        <div class="flex align-bottom flex-col leading-none p-2 md:p-4">
                            <div class="flex flex-row justify-between items-center">
                                <a
                                    class="flex items-center no-underline hover:underline text-black"
                                    href="#"
                                >
                                    <img
                                        alt="Placeholder"
                                        class="block rounded-full"
                                        src="https://picsum.photos/32/32/?random"
                                    />
                                    <span class="ml-2 text-sm"> Aragorn </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="px-2 md:px-4 col-span-3 row-span-1">
                        <p class="text-grey-darker text-sm">
                            Claimed crevice Elfling wars then. Flattery bonebreaker swung
                            hey-diddle-diddle trumpet Sackville-Bagginses note crime you nothing's?
                            You are full of surprises, Master Baggins.
                        </p>
                    </div>

                    <div class="col-span-3 row-span-1">
                        <ul
                            class="flex flex-row pl-2 text-gray-600 overflow-x-scroll hide-scroll-bar"
                        >
                            <li class="py-1">
                                <div
                                    class="transition duration-300 ease-in-out rounded-2xl mr-1 px-2 py-1 hover:bg-blue-200 text-gray-500 hover:text-gray-800"
                                >
                                    <a class="" href="#">#frodo</a>
                                </div>
                            </li>
                            <li class="py-1">
                                <div
                                    class="transition duration-300 ease-in-out rounded-2xl mr-1 px-2 py-1 hover:bg-blue-200 text-gray-500 hover:text-gray-800"
                                >
                                    <a class="" href="#">#baggins</a>
                                </div>
                            </li>

                            <li class="py-1">
                                <div
                                    class="transition duration-300 ease-in-out rounded-2xl mr-1 px-2 py-1 hover:bg-blue-200 text-gray-500 hover:text-gray-800"
                                >
                                    <a class="" href="#">#precious</a>
                                </div>
                            </li>
                            <li class="py-1">
                                <div
                                    class="transition duration-300 ease-in-out rounded-2xl mr-1 px-2 py-1 hover:bg-blue-200 text-gray-500 hover:text-gray-800"
                                >
                                    <a class="" href="#">#ring</a>
                                </div>
                            </li>
                            <li class="py-1">
                                <div
                                    class="transition duration-300 ease-in-out rounded-2xl mr-1 px-2 py-1 hover:bg-blue-200 text-gray-500 hover:text-gray-800"
                                >
                                    <a class="" href="#">#legolas</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
