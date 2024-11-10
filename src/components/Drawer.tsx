import { createSignal } from 'solid-js';

export function Drawer() {
  const [isOpen, setIsOpen] = createSignal(false);

  return (
    <div>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setIsOpen(!isOpen())}
      >
        Toggle Drawer
      </button>

      <div class={`fixed inset-y-0 left-0 w-64 bg-white shadow-xl transform ${isOpen() ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300`}>
        <button
          class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2"
          onClick={() => setIsOpen(false)}
        >
          Close
        </button>
        <nav class="mt-5">
          <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-300">Home</a>
          <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-300">About</a>
          <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-300">Contact</a>
        </nav>
      </div>
    </div>
  );
}