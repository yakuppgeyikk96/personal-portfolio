import React from "react";

const TechItem = ({
  icon: Icon,
  name,
}: {
  icon?: React.ComponentType<{ className?: string }>;
  name: string;
}) => (
  <div className="p-4 rounded-xl bg-dark-800/50 backdrop-blur-sm border border-dark-700/50 hover:border-purple-500/30 transition-all duration-300 group">
    <div className="flex flex-col items-center space-y-3">
      <div className="p-3 rounded-lg bg-gradient-to-br from-indigo-500/10 to-purple-500/10 group-hover:from-indigo-500/20 group-hover:to-purple-500/20 transition-all duration-300">
        {Icon && <Icon className="w-8 h-8 text-purple-400" />}
      </div>
      <span className="text-gray-400 font-medium text-sm">{name}</span>
    </div>
  </div>
);

export default TechItem;
