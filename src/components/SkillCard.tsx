interface SkillCardProps {
  name: string;
  level: number;
  text: string;
}

export default function SkillCard({ name, level, text }: SkillCardProps) {
  return (
    <div className="bg-white/50 dark:bg-primary-dark/50 rounded-lg p-6 backdrop-blur-sm">
      <div className="flex justify-between mb-2">
        <h3 className="text-lg font-heading text-text-light dark:text-text-dark">{name}</h3>
        <span className="text-accent">{text}</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
        <div 
          className="h-full bg-accent rounded-full transition-all duration-500"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}
