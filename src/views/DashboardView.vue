<template>
  <aside id="default-sidebar" class="z-40 w-80 h-screen transition-transform -translate-x-full sm:translate-x-0"
    aria-label="Sidebar">
    <div class="h-full  px-4 py-4 overflow-y-auto bg-dashboard dark:bg-gray-800">
      <ul class="space-y-2">
        <li>
          <a href="#"
            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <svg
              class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd">
              </path>
            </svg>

            <span class="flex-1 ml-3 whitespace-nowrap hover:text-emerald-700">
              Admin
            </span>
          </a>
        </li>


        <li>
          <a href="#"
            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <span class="flex-1 ml-3 whitespace-nowrap hover:text-emerald-700">
              Section 2
            </span>
          </a>
        </li>

        <li>
          <a href="#"
            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <span class="flex-1 ml-3 whitespace-nowrap hover:text-emerald-700">
              Section 3
            </span>
          </a>
        </li>



      </ul>
    </div>
  </aside>
  <h3 class="text-center absolute top-1/2 left-1/2 text-4xl text-teal-500 font-bold">Welcome to dashboard</h3>
</template>


