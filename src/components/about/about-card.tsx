const AboutCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}) => (
  <div className="p-6 rounded-xl bg-dark-800/50 backdrop-blur-sm border border-dark-700/50 hover:border-purple-500/50 transition-colors">
    <div className="flex items-start space-x-4">
      <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-500/10 to-purple-500/10">
        <Icon className="w-6 h-6 text-purple-400" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-200 mb-2">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
);

export default AboutCard;
