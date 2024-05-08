const BlogSkeleton = () => {
  return (
    <div className="flex w-full animate-pulse flex-col">
      <div className="h-64 w-full rounded-lg bg-gray-400" />
      <div className="my-3 flex items-center justify-between">
        <div className="w-[25%] rounded-2xl bg-gray-400 p-1" />
        <div className="w-[25%] rounded-2xl bg-gray-400 p-1" />
      </div>
      <div className="w-[25%] rounded-2xl bg-gray-400 p-1" />
      <div className="my-6 w-[80%] rounded-2xl bg-gray-400 p-2" />
      <div className="h-24 w-full rounded-2xl bg-transparent p-2" />
    </div>
  );
};

export default BlogSkeleton;
