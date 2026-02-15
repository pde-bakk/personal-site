import React from "react";

interface MetricCardProps {
  value: string;
  label: string;
  index?: number;
}

const MetricCard = ({ value, label, index = 0 }: MetricCardProps) => {
  return (
    <div
      className={`metric-card-glow rounded-xl p-[1px] transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent_purple/20 fade-item stagger-${index + 1}`}
    >
      <div className="bg-background_colour/95 backdrop-blur-lg rounded-[11px] p-6 text-center shimmer">
        <p className="text-3xl font-bold font-mono text-accent_purple">
          {value}
        </p>
        <p className="text-sm text-slate_body mt-1">{label}</p>
      </div>
    </div>
  );
};

export default MetricCard;
