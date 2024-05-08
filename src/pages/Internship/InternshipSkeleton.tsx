const InternshipSkeleton = () => {
  return (
    <div className="flex w-full animate-pulse flex-col rounded-lg border border-input">
      <div className="p-6">
        <div className="w-[90%] rounded-2xl bg-gray-400 p-2" />
        <div className="my-4 grid w-[80%] grid-cols-2 gap-2">
          <div className="w-[30%] rounded-2xl bg-gray-400 p-1" />
          <div className="w-[30%] rounded-2xl bg-gray-400 p-1" />
          <div className="w-[30%] rounded-2xl bg-gray-400 p-1" />
          <div className="w-[30%] rounded-2xl bg-gray-400 p-1" />
        </div>
        <div className="mb-4 w-[70%] rounded-2xl bg-gray-400 p-2" />
        <div className="flex w-full items-center justify-between">
          <div className="w-[10%] rounded-2xl bg-gray-400 p-1" />
          <div className="w-[20%] rounded-lg bg-gray-400 p-4" />
        </div>
      </div>
    </div>
  );
};

export default InternshipSkeleton;
