export default function SideBar() {
  return (
    <div className="w-2/12 shadow-lg h-screen bg-rose-500">

      <div className="p-4">
        <ul>
          <li className="mb-2"><a href="#" className="text-gray-700 flex justify-center border-2">Home</a></li>
          <li className="mb-2"><a href="#" className="text-gray-700 flex justify-center border-2">Mates</a></li>
          <li className="mb-2"><a href="#" className="text-gray-700 flex justify-center border-2">Articles</a></li>
          <li className="mb-2"><a href="#" className="text-gray-700 flex justify-center border-2">Videos</a></li>
        </ul>
      </div>

    </div>
  );
}