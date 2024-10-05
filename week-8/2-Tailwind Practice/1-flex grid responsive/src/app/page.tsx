export default function Home() {
  return (
    <div>
      <h1>Flex</h1>
      <div className="flex justify-between">
        <div className="bg-slate-200">hikaskdsc skms</div>
        <div className="bg-slate-400">hikaskdsc skms</div>
        <div className="bg-slate-600">hikaskdsc skms</div>
        <div className="bg-slate-800">hikaskdsc skms</div>
      </div>
      <h1>Grid</h1>
      <div className="grid grid-cols-12">
        <div className="bg-yellow-200 col-span-4">hikaskdsc skms</div>
        <div className="bg-red-400 col-span-4">hikaskdsc skms</div>
        <div className="bg-green-600 col-span-2">hikaskdsc skms</div>
        <div className="bg-purple-800 col-span-2">hikaskdsc skms</div>
      </div>
      <h1>Responsive</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="bg-blue-500 sm:bg-green-500 md:bg-yellow-500 lg:bg-red-500">hikaskdsc skms</div>
        <div className="bg-red-500 sm:bg-blue-500 md:bg-green-500 lg:bg-yellow-500">hikaskdsc skms</div>
        <div className="bg-yellow-500 sm:bg-green-500 md:bg-blue-500 lg:bg-red-500">hikaskdsc skms</div>
        <div className="bg-blue-500 sm:bg-red-500 md:bg-green-500 lg:bg-yellow-500">hikaskdsc skms</div>
      </div>
    </div> 
  );
}
