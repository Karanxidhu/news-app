import React, { Component } from 'react'

export class Dropdown extends Component {
  render() {
    return (
      <div>
        {/* <!-- component --> */}
<html>
   <head>
      {/* <!-- JIT SUPPORT, for using peer-* below --> */}
      
   </head>
   <body>
<div class="min-h-screen p-10 bg-gray-100">
  <div class="max-w-md mx-auto">
    <label for="select" class="font-semibold block py-2">Select Input:</label>

    <div class="relative">
      <div class="h-10 bg-white flex border border-gray-200 rounded items-center">
        <input value="Javascript" name="select" id="select" class="px-4 appearance-none outline-none text-gray-800 w-full" checked />

        <button class="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-gray-600">
          <svg class="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <label for="show_more" class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-gray-600">
          <svg class="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </label>
      </div>

      <input type="checkbox" name="show_more" id="show_more" class="hidden peer" checked />
      <div class="absolute rounded shadow bg-white overflow-hidden hidden peer-checked:flex flex-col w-full mt-1 border border-gray-200">
        <div class="cursor-pointer group">
          <a class="block p-2 border-transparent border-l-4 group-hover:border-blue-600 group-hover:bg-gray-100">Python</a>
        </div>
        <div class="cursor-pointer group border-t">
          <a class="block p-2 border-transparent border-l-4 group-hover:border-blue-600 border-blue-600 group-hover:bg-gray-100">Javascript</a>
        </div>
        <div class="cursor-pointer group border-t">
          <a class="block p-2 border-transparent border-l-4 group-hover:border-blue-600 group-hover:bg-gray-100">Node</a>
        </div>
        <div class="cursor-pointer group border-t">
          <a class="block p-2 border-transparent border-l-4 group-hover:border-blue-600 group-hover:bg-gray-100">PHP</a>
        </div>
      </div>
    </div>
  </div>
</div>
<a href="https://www.buymeacoffee.com/dgauderman" target="_blank" class="md:absolute bottom-0 right-0 p-4 float-right animate-bounce">
      <img src="https://www.buymeacoffee.com/assets/img/guidelines/logo-mark-3.svg" alt="Buy Me A Coffee" class="transition-all rounded-full w-14 -rotate-45 hover:shadow-sm shadow-lg ring hover:ring-4 ring-white"/>
    </a>
</body>
</html>
      </div>
    )
  }
}

export default Dropdown
