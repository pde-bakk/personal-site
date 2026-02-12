interface MetricCardProps {
  value: string;
  label: string;
}

const MetricCard = ({ value, label }: MetricCardProps) => {
  return (
    <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 text-center">
      <p className="text-3xl font-bold font-mono text-accent_purple">{value}</p>
      <p className="text-sm text-slate_body mt-1">{label}</p>
    </div>
  );
};

export default MetricCard;
