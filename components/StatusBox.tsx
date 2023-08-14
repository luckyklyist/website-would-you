const Shard = ({ number }) => (
  <div className="relative inline-block mx-1">
    <div className="w-12 h-12 bg-zinc-900 rounded-lg">
      <div className="flex items-center justify-center h-full text-[#85FF72] text-sm font-bold">{number}</div>
    </div>
  </div>
);

const StatusBox = ({ clusterText, arrowColor, shardNumbers }) => {
  const shardGroups = [];

  while (shardNumbers.length > 0) {
    const shardGroup = shardNumbers.splice(0, 5);
    shardGroups.push(shardGroup);
  }

  return (
    <div className="w-80 p-4 bg-[#121212] rounded-xl">
      <div className="text-white text-lg font-semibold mb-2">{clusterText}</div>
      <div className={`w-2 h-2 bg-${arrowColor}-300 rounded-full`} />
      {shardGroups.map((shardGroup, index) => (
        <div className="flex my-2" key={index}>
          {shardGroup.map((number, shardIndex) => (
            <Shard key={shardIndex} number={number} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default StatusBox;
